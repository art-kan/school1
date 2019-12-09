<?php

require_once 'helpers.php';
use PHPHtmlParser\Dom;

const ADMIN_KEY_BYTES = 64;
const upload_image_dir = 'img/upload';
const room_photo_dir = 'img/room';
const ADMIN_KEY_EXPIRE_DAYS = 1;
const contacts_items = [
  'copyright',
  'tel',
  'gmail',
  'address',
  'telegram',
  'instagram',
];

header('Content-Type: application/json');
handle_request($_REQUEST_DATA, $_BODY, $_PARAMS);

function send_400() {
  http_response_code(400);
  echo json_encode([
    'status' => 400,
    'message' => 'Bad Request',
  ]);

  die();
}

function handle_request($_REQUEST_DATA, $_BODY, $_PARAMS) {
  if (@$_REQUEST_DATA['action'] != 'auth' &&
      @$_REQUEST_DATA['action'] != 'checkauth' &&
     (!isset($_REQUEST_DATA['key']) ||
      !check_admin_key($_REQUEST_DATA['key']))) {
    return http_response_code(401);
  }

  switch (@$_REQUEST_DATA['action']) {
    case 'auth': return auth_admin($_BODY);
    case 'checkauth': return check_admin($_BODY);
    case 'uploadimage': return upload_image($_BODY);
    case 'getpost': return send_post($_PARAMS);
    case 'listposts': return send_posts_list();
    case 'deletepost': return delete_post($_PARAMS);
    case 'newpost': return create_post($_BODY);
    case 'editpost': return update_post($_BODY);
    case 'getcontacts': return send_contacts();
    case 'editcontacts': return update_contacts($_BODY);
    case 'gettext': return send_text($_PARAMS);
    case 'listtexts': return send_texts();
    case 'edittext': return update_text($_BODY);
    case 'editroomimage': return update_room_image($_BODY);
    case 'editroomdesc': return update_room_desc($_BODY);
    default: send_400();
  }
}

function auth_admin($_BODY) {
  $is_admin = False;
  if (isset($_BODY['password'])) {
    $hash = get_admin_password_hash();
    $is_admin = check_password($hash, $_BODY['password']);
  }

  if ($is_admin) {
    $key = generate_crypto_key(ADMIN_KEY_BYTES);
    new_admin_key($key);
    echo json_encode(['key' => $key, 'ok' => 1]);
  } else {
    echo json_encode(['ok' => 0]);
  }
}

function check_admin($_BODY) {
  echo json_encode([
    'ok' => isset($_BODY['key']) && check_admin_key($_BODY['key']),
  ]);
}

function check_admin_key($attempt_key) {
  $data = get_admin_key();
  $creat_time = strtotime($data['s_key_creation_time']);
  $expire_time = $creat_time + 1000 * sec_per_day * ADMIN_KEY_EXPIRE_DAYS;

  if ($expire_time <= time()) {
    return False;
  }
  return $data['s_key'] === $attempt_key;
}

function upload_image($_BODY) {
  global $PROTOCOL;

  if (!isset($_BODY['postid'])) {
    return send_400();
  }

  $post_id = $_BODY['postid'];
  $filepaths = [];
  $flag_correctness = True;
  $uploaded = 0;

  foreach ($_FILES as $name => $data) {
    if (substr($data['type'], 0, 6) != 'image/') {
      $flag_correctness = False;
      continue;
    }

    $fileext = substr($data['type'], 6, strlen($data['type']));
    $filename = $post_id.'_'.md5(microtime().rand()).".$fileext";
    $filepath = upload_image_dir."/$filename";
    $success = move_uploaded_file($data['tmp_name'], $filepath);

    if ($success) {
      $uploaded++;
      $filepaths[$name] = SERVER_URL.'/'.$filepath;
    }
  }

  echo json_encode([
    'uploaded' => $uploaded,
    'correctness' => $flag_correctness,
    'filepaths' => $filepaths,
  ]);
}

function send_post($_PARAMS) {
  if (isset($_PARAMS['id'])) {
    echo json_encode(get_post($_PARAMS['id']));
  } else {
    send_400();
  }
}

function send_posts_list() {
  echo json_encode(list_posts());
}

function create_post($_BODY) {
  $crud_title = @$_BODY['title'];
  $crud_text = @$_BODY['text'];
  $crud_preview_url = @$_BODY['preview_url'];

  if ($crud_text == Null || $crud_title == Null) {
    return send_400();
  }

  if ($crud_preview_url != Null && is_our_link($crud_preview_url)) {
    echo json_encode([
      'ok' => 0,
      'message' => "The preview must be {$_SERVER['SERVER_NAME']} in origin.",
    ]);
    die();
  }

  $title = s($crud_title);
  $text = purify($crud_text);
  $id = new_post($title, $text, $crud_preview_url);

  if (check_no_mysql_error()) {
    echo json_encode([ 'ok' => 1, 'id' => $id ]);
  } else {
    echo json_encode([ 'ok' => 0 ]);
  }
}

function update_post($_BODY) {
  $crud_new_title = @$_BODY['title'];
  $crud_new_text = @$_BODY['text'];
  $crud_preview_url = @$_BODY['preview_url'];
  $preview_url = Null;
  $post_id = @$_BODY['id'];

  if ($post_id != 0 && $post_id == Null) {
    echo json_encode([ 'ok' => 0 ]);
    return;
  }

  $title = @s($crud_new_title);
  $text = @purify($crud_new_text);

  if ($crud_preview_url != Null && is_local_url($crud_preview_url)) {
    $preview_url = $crud_preview_url;
  }

  edit_post($post_id, $title, $text, $preview_url);
  $cur_preview_url = parse_url(
    $preview_url ?: get_post_preview_url($post_id),
    PHP_URL_PATH
  );

  $dom = new Dom();
  $imgsInUse = [];
  $allImgs = glob(upload_image_dir."/{$post_id}_*");

  @$dom->load($text);

  $imgs = $dom->find('img');

  foreach ($imgs as $img) {
    $imgsInUse[] = parse_url($img->getAttribute('src'), PHP_URL_PATH);
  }

  foreach ($allImgs as $path) {
    if (!in_array("/$path", $imgsInUse) &&
       "/$path" != $cur_preview_url) {
      unlink($path);
    }
  }

  echo json_encode([ 'ok' => check_no_mysql_error() ? 1 : 0 ]);
}

function delete_post($_PARAMS) {
  if (!isset($_PARAMS['id'])) {
    return send_400();
  }

  $id = $_PARAMS['id'];
  remove_post($id);
  array_map('unlink', glob(upload_image_dir."/{$id}_*"));
  echo json_encode([ 'ok' => check_no_mysql_error() ? 1 : 0 ]);
}

function send_contacts() {
  echo json_encode(get_contacts());
}

function update_contacts($_BODY) {
  $new_contacts = [];
  foreach (contacts_items as $contact_item) {
    if (isset($_BODY[$contact_item])) {
      $new_contacts[$contact_item] = $_BODY[$contact_item];
    }
  }

  edit_contacts($new_contacts);
  echo json_encode([ 'ok' => check_no_mysql_error() ? 1 : 0 ]);
}

function send_text($_PARAMS) {
  if (!isset($_PARAMS['name'])) {
    return send_400();
  }

  $q = 'SELECT title_ru, content_ru FROM texts WHERE name = ?';
  $r = sql_prepare($q, 's', $_PARAMS['name']);
  if ($r == Null || !isset($r[0])) {
    echo json_encode([ 'ok' => 0 ]);
  } else {
    $r[0]['ok'] = 1;
    echo json_encode($r[0]);
  }
}

function send_texts() {
  global $db;
  $res = $db->query('SELECT name, title_ru FROM texts');
  $result = [];
  while ($row = $res->fetch_assoc()) {
    $result[] = $row;
  }
  echo json_encode($result);
}

function update_text($_BODY) {
  if (!isset($_BODY['name'])) {
    return send_400();
  }

  $name = $_BODY['name'];
  $crud_picture_url = @$_BODY['picture_url'];
  $new_title_ru = @$_BODY['title_ru'];
  $new_content_ru = @$_BODY['content_ru'];
  $picture_url = Null;

  if ($new_title_ru == Null && $new_content_ru == Null) {
    return send_400();
  }

  if (is_our_link($crud_picture_url)) {
    $picture_url = $crud_picture_url;
  }

  $q_update = make_update_query('texts', 'ssss', [
    'title_ru' => @$_BODY['title_ru'],
    'content_ru' => @$_BODY['content_ru'],
    'picture_url' => $picture_url,
  ], [
    'name' => @$_BODY['name'],
  ]);

  $query = $q_update['query'];
  $types = $q_update['types'];
  $params = $q_update['params'];

  if ($query == False) return send_400();

  sql_prepare($query, $types, ...$params);

  echo json_encode([ 'ok' => check_no_mysql_error() ? 1 : 0 ]);
}

function update_room_desc($_BODY) {
  if (!isset($_BODY['name']) || !isset($_BODY['desc'])) {
    return send_400();
  }

  $q = 'UPDATE rooms SET description_ru = ? WHERE name = ?';

  sql_prepare($q, 'ss', $_BODY['desc'], $_BODY['name']);

  echo json_encode([ 'ok' => check_no_mysql_error() ? 1 : 0 ]);
}

function update_room_image($_BODY) {
  if (!isset($_BODY['name']) || !isset($_FILES['imag'])) {
    return send_400();
  }

  $image = $_FILES['image'];
  $name = $_BODY['name'];

  if (!check_room_exist($name)) {
    return send_400();
  }

  if (substr($data['type'], 0, 6) != 'image/') {
    echo json_encode([
      'ok' => 0,
      'message' => 'Invalid file type.',
    ]);
    return;
  }

  $fileext = substr($image['type'], 6, strlen($image['type']));
  $filename = "$name.$fileext";
  $filepath = room_photo_dir."/$filename";

  try {
    $exist = glob(room_photo_dir."$name.*");
    if (isset($exist[0])) {
      rename($exist[0], $exist[0].'.back');
    }
  } catch (Expection $e) {
    http_send_status(500);
    echo json_encode([
      'ok' => 0,
      'message' => 'Could not make back up',
    ]);
    return;
  }

  $success = move_uploaded_file($image['tmp_name'], $filepath);

  if ($success) {
    if (isset($exist[0])) {
      unlink($exist[0].'.back');
    }
  }

  echo json_encode([
    'ok' => ($success && check_no_mysql_error()) ? 1 : 0
  ]);
}
?>
