<?php

require_once 'helpers.php';
use PHPHtmlParser\Dom;

const ADMIN_KEY_BYTES = 64;
const upload_image_dir = 'img/upload';
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
    new_admin_key($key, ADMIN_KEY_EXPIRE_DAYS);
    echo json_encode(['key' => $key, 'ok' => 1]);
  } else {
    echo json_encode(['ok' => 0]);
  }
}

function check_admin($_BODY) {
  echo json_encode([ 'ok' => check_admin_key($_BODY['key'])]);
}

function check_admin_key($attempt_key) {
  return get_admin_key() == $attempt_key;
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
      $filepaths[$name] = $PROTOCOL.$_SERVER['HTTP_HOST'].'/'.$filepath;
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

  echo json_encode([ 'ok' => 1, 'id' => $id ]);
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

  if (is_our_link($crud_preview_url)) {
    $preview_url = $crud_preview_url;
  }

  edit_post($post_id, $title, $text, $preview_url);

  $dom = new Dom();
  $imgsInUse = [];
  $allImgs = glob(upload_image_dir."/{$post_id}_*");

  @$dom->load($text);

  $imgs = $dom->find('img');

  foreach ($imgs as $img) {
    $imgsInUse[] = parse_url($img->getAttribute('src'), PHP_URL_PATH);
  }

  foreach ($allImgs as $path) {
    if (!in_array("/$path", $imgsInUse)) {
      unlink($path);
    }
  }

  echo json_encode([ 'ok' => 1, 'use' => $imgsInUse, 'all' => $allImgs ]);
}

function delete_post($_PARAMS) {
  if (!isset($_PARAMS['id'])) {
    return send_400();
  }

  $id = $_PARAMS['id'];
  remove_post($id);
  array_map('unlink', glob(upload_image_dir."/{$id}_*"));
  echo json_encode([ 'ok' => 1 ]);
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
  echo json_encode([ 'ok' => 1 ]);
}

?>
