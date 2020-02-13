<?php

require_once('helpers.php');
require_once('config.php');
prevent_direct(__FILE__);

$db = new mysqli(DB_URI, DB_USERNAME, DB_PASSWORD, DB_NAME);
$db->set_charset('utf8');

if ($db->connect_error) {
  die('The failure to connect to the database');
}

// READ
function get_post($id) {
  return sql_prepare('SELECT * FROM posts WHERE id = ?', 's', $id)[0];
}

function list_posts() {
  global $db;
  $result = $db->query('SELECT * FROM posts ORDER BY date DESC');
  $list = [];
  while ($post = $result->fetch_assoc()) {
    $list[] = $post;
  }
  return $list;
}

function get_contacts() {
  global $db;
  $result = $db->query('SELECT * FROM contacts');
  return $result->fetch_assoc();
}

function get_last_posts_preview($n, $text_len) {
  return sql_prepare(
    'SELECT * FROM posts ORDER by date desc LIMIT ?', 'd', $n);
}

function get_admin_password_hash() {
  global $db;
  $result = $db->query('SELECT pwd_hash FROM admin LIMIT 1');
  return $result->fetch_assoc()['pwd_hash'];
}

function get_admin_key() {
  global $db;
  $result = $db->query('SELECT s_key, s_key_creation_time FROM admin LIMIT 1');
  return $result->fetch_assoc();
}

// CREATE
function new_post($title, $text, $preview_url) {
  global $db;
  if ($preview_url == Null) {
    $query = 'INSERT INTO posts (title, text, date)'
    .' VALUES (?, ?, NOW())';
    sql_prepare($query, 'ss', $title, $text);
  } else {
    $query = 'INSERT INTO posts (title, text, date, preview_url)'
      .' VALUES (?, ?, NOW(), ?)';
    sql_prepare($query, 'sss', $title, $text, $preview_url);
  }
  return $db->insert_id;
}

// UPDATE
function edit_post($id, $title, $text, $preview_url) {
  $query = 'UPDATE posts SET';
  $params = [];
  $types = '';
  $comma_req = 0;

  if ($title != Null) {
    $query .= ' title = ?';
    $params[] = $title;
    $types .= 's';
    $comma_req = 1;
  }

  if ($text != Null) {
    if ($comma_req) $query .= ',';
    $query .= ' text = ?';
    $params[] = $text;
    $types .= 's';
    $comma_req = 1;
  }

  if ($preview_url != Null) {
    if ($comma_req) $query .= ',';
    $query .= ' preview_url = ?';
    $params[] = $preview_url;
    $types .= 's';
  }

  $query .= " WHERE id = ?";
  $types .= 'd';
  $params[] = $id;

  if (strlen($types) == 0) return [];
  return sql_prepare($query, $types, ...$params);
}

function edit_contacts($contacts) {
  $query = 'UPDATE contacts SET';
  $params = [];
  $types = '';
  $flag = true;
  foreach ($contacts as $key => $value) {
    $query .= " $key = ?,";
    $params[] = $value;
    $types .= 's';
    $flag = false;
  }
  if ($flag) return True;

  $query = substr($query, 0, strlen($query) - 1);
  return sql_prepare($query, $types, ...$params);
}

function new_admin_key($key) {
  $query = 'UPDATE admin SET s_key = ?, s_key_creation_time = NOW()';
  sql_prepare($query, 's', $key);
}

// DELETE
function remove_post($id) {
  sql_prepare('DELETE FROM posts WHERE id = ?', 'd', $id);
}


///////////////////////////////////////////////////////////////////
// GALLERY

function get_photo_paths($skip, $limit) {
  return array_map(function ($el) {
    return $el["filename"];
  }, sql_prepare(
    'SELECT filename FROM gallery '.
    'ORDER BY `date` desc '.
    'LIMIT ?, ?',
    'dd',
    $skip, $limit
  ));
}

function list_photos() {
  global $db;
  $result = $db->query('SELECT filename FROM gallery');
  $answer = [];
  while ($row = $result->fetch_assoc()) {
    $answer[] = $row['filename'];
  }
  return $answer;
}

function new_photo($filename, $desc, $category) {
  sql_prepare(
    'INSERT INTO gallery (filename, `desc`, category, `date`) '.
    'VALUES (?, ?, ?, NOW())',
    'sss',
    $filename, $desc, $category
  );
}

function remove_photo() {

}

function edit_photo($filename, $desc, $category) {
  $qq = make_update_query(
    'gallery',
    'sss',
    [ '`desc`' => $desc, 'category' => $category ],
    [ 'filename' => $filename ]
  );

  sql_prepare($qq['query'], $qq['types'], ...$qq['params']);
}

?>
