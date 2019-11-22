<?php
// prevent_direct(__FILE__);
require_once('dbcontrol.php');
require_once 'vendor/autoload.php';

const STYLE_DIR = '/styles';
const MAX_ATTEMPTS_TO_GEN_SECURE_KEY = 10;
const months_ru =
  [ 'Январь', 'Февраль', 'Март',
    'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь',
    'Октябрь', 'Ноябрь', 'Декабрь' ];
const sec_per_day = 24 * 60 * 60;
const pages = [
  [ "name" => "index", "label" => "Главная" ],
  [ "name" => "about", "label" => "О школе" ],
  [ "name" => "gallery", "label" => "Галерея" ],
  [ "name" => "news", "label" => "Новости" ],
  [ "name" => "contacts", "label" => "Контакты" ],
];

$HASH_ALGO = @constant('PASSWORD_ARGON2ID')
  ?: @constant('PASSWORD_ARGON2I')
  ?: PASSWORD_DEFAULT;

$script_name = $_SERVER['SCRIPT_NAME'];
$script_name = substr($script_name, 1, strlen($script_name) - 5);

$PROTOCOL = stripos($_SERVER['SERVER_PROTOCOL'], 'https') === 0
  ? 'https://' : 'http://';

$purifier_config = HTMLPurifier_Config::createDefault();
$purifier_config->set('Core.Encoding', 'UTF-8');
$purifier_config->set('HTML.SafeIframe', true);
$purifier_config->set('URI.SafeIframeRegexp', '%^(https?:)?//(www\.youtube(?:-nocookie)?\.com/embed/|player\.vimeo\.com/video/)%');

$purifier = new HTMLPurifier($purifier_config);

/**
 * $_PARAMS - URL params
 * $_BODY - decoded php://input
 * $_REQUEST_DATA - array_merge($_PARAMS, $_BODY)
 */
parse_str(@$_SERVER['QUERY_STRING'] ?: '', $_PARAMS);


if ($_POST) {
  $_BODY = $_POST;
} elseif (!isset($_SERVER['CONTENT_TYPE'])
    || $_SERVER['CONTENT_TYPE'] != 'application/json') {
  parse_str(file_get_contents('php://input'), $_BODY);
} else {
  $_BODY = json_decode(file_get_contents('php://input'), true) ?: [];
}

$_REQUEST_DATA = array_merge($_PARAMS, $_BODY);

function prevent_direct($name) {
  global $script_name;
  $self_name = basename($name, '.php');
  if ($script_name == $self_name) {
    http_response_code(404);
    die();
  }
}

function include_styles() {
  $names = get_names_of_styles();

  foreach ($names as $name) {
    echo '<link rel="stylesheet" href="'.STYLE_DIR."/$name.css\">\n";
  }
}

function get_names_of_styles() {
  global $script_name;

  switch ($script_name) {
    case 'index': return ['news', 'home'];
    case 'news': return ['news'];
    case 'post': return ['post'];
    case 'gallery': return ['gallery'];
    case 'contacts': return ['contacts'];
    case 'about': return ['about'];
  }
}

function include_navigation() {
  global $script_name;
  foreach (pages as $page) {

    echo '<li><a href="'.$page['name'].'.php"';
    if ($script_name == $page['name']) {
      echo ' class="active"';
    }
    echo '>'.$page['label'].'</a></li>'."\n";
  }
}

function s($text) {
  return htmlspecialchars($text, ENT_QUOTES, 'UTF-8');
}

function purify($html) {
  global $purifier;
  return $purifier->purify($html);
}

function format_date($str) {
  $yyyy = substr($str, 0, 4);
  $mm = (int) substr($str, 6, 2);
  $dd = substr($str, 8, 2);

  return $dd.' '.months_ru[$mm].' '.$yyyy;
}

function format_tel_uz($str) {
  return substr($str, 0, 4)
    .' ('.substr($str, 4, 2).') '
    .substr($str, 6, 3).' '
    .substr($str, 9, 2).' '
    .substr($str, 11, 2);
}

function filter_not_strict_null($array) {
  $result = [];
  foreach ($array as $key => $value) {
    if ($value != Null) {
      $result[$key] = $value;
    }
  }
  return $result;
}

function get_post_preview_url($post_id) {
  $query = 'SELECT preview_url FROM posts WHERE id = ?';
  return sql_prepare($query, 'd', $post_id)[0]['preview_url'];
}

// TODO: WRITE get_texts function
function get_text($name, $loc) {
  if (!preg_match('/[^A-Za-z0-9]/', $loc)) {
    // ASSERT $loc CONTAINS ONLY ENGLISH LETTERS & DIGITS
    $query =
      "SELECT title_$loc, content_$loc FROM texts WHERE name = ?";
    $result = sql_prepare($query, 's', $name)[0];
    return [
      'title' => $result["title_$loc"],
      'content' => $result["content_$loc"],
    ];
  }

  throw new Exception('Insafe value of $loc (used for language)', 1);
}

function get_rooms($loc) {
  global $db;
  if (!preg_match('/[^A-Za-z0-9]/', $loc)) {
    // ASSERT $loc CONTAINS ONLY ENGLISH LETTERS & DIGITS
    $query = "SELECT picture_url, description_$loc FROM rooms "
      .'ORDER BY n_order ASC';
    $result = $db->query($query);
    $rooms = [];
    while($row = $result->fetch_assoc()) {
      $rooms[] = [
        'picture_url' => $row["picture_url"],
        'description' => $row["description_$loc"],
      ];
    }
    return $rooms;
  }
}

function check_no_mysql_error() {
  global $db;
  return $db->error == Null;
}

function make_update_query(
  $tb_name, $max_types, $crud_assoc_data, $assoc_cond = []
) {
  if (preg_match('/[^A-Za-z0-9]/', $tb_name)) {
    throw new Exception('Insecure table name.', 1);
  }

  $q_leading = "UPDATE $tb_name";

  $assoc_data = [];
  $params = [];
  $types = [];
  $ind = 0;

  foreach ($crud_assoc_data as $key => $value) {
    if ($value != Null) {
      $types[] = $max_types[$ind++];
      $assoc_data[$key] = $value;
      $params[] = $value;
    }
  }

  foreach ($assoc_cond as $key => $value) {
    $types[] = $max_types[$ind++];
    $params[] = $value;
  }

  if (count($assoc_data) == 0) {
    return False;
  }

  $q_update_set_part = format_comma_key_equal_qmark($assoc_data);
  $q_where_part = format_comma_key_equal_qmark($assoc_cond);

  if (strlen($q_where_part) > 0) {
    $query = "$q_leading SET $q_update_set_part WHERE $q_where_part";
  } else {
    $query = "$q_leading SET $q_update_set_part";
  }

  return [
    'query' => $query,
    'types' => join($types),
    'params' => $params,
  ];
}

function format_comma_key_equal_qmark($assoc_data) {
  $q_update = [];

  foreach ($assoc_data as $key => $name) {
    $q_update[$key] = '?';
  }

  return format_comma_equations($q_update);
}

// 'f1 = v1, f2 = v2, f3 = v3, ..., fn = vn';
function format_comma_equations($assoc_arr) {
  $result = '';
  $comma_req = False;

  foreach ($assoc_arr as $key => $value) {
    if ($comma_req) {
      $result .= ', ';
    }
    $result .= "$key = $value";
    $comma_req = True;
  }

  return $result;
}

function sql_prepare($template, $params_type, ...$params) {
  global $db;
  $stmt = $db->prepare($template);
  $stmt->bind_param($params_type, ...$params);
  $stmt->execute();
  $result = $stmt->get_result();

  if (is_bool($result)) {
    return $result;
  }

  $rows = [];
  while ($row = $result->fetch_assoc()) {
    $rows[] = $row;
  }
  return $rows;
}

function hash_password($string) {
  global $HASH_ALGO;
  $full_hash = password_hash($string, $HASH_ALGO);
  return $full_hash;
}

function check_password($hash, $att_pwd) {
  return password_verify($att_pwd, $hash);
}

function generate_crypto_key($bytes) {
  $is_crypto = False;
  $attempts = 0;
  $key;
  while (!$is_crypto && $attempts++ < MAX_ATTEMPTS_TO_GEN_SECURE_KEY) {
    $key = openssl_random_pseudo_bytes($bytes, $is_crypto);
  }
  return bin2hex($key);
}

function is_our_link($url) {
  $host_of_preview = parse_url($url, PHP_URL_HOST);
  $our_host = $_SERVER['SERVER_NAME'];

  return $host_of_preview == $our_host;
}

?>