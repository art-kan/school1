<?php

require_once('helpers.php');
prevent_direct(__FILE__);

const username = 'kan';
const password = 'jkd';
const dbname = 'schooldb';
const serveruri = 'localhost';

$db = new mysqli(serveruri, username, password, dbname);
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
  $result = $db->query('SELECT s_key, s_key_expire_date FROM admin LIMIT 1');
  return $result->fetch_assoc()['s_key'];
}

// CREATE
function new_post($title, $text, $preview_url) {
  global $db;
  $date = date('Y-m-d', time());
  if ($preview_url == Null) {
    $query = 'INSERT INTO posts (title, text, date)'
    .' VALUES (?, ?, ?)';
    sql_prepare($query, 'sss', $title, $text, $date);
  } else {
    $query = 'INSERT INTO posts (title, text, date, preview_url)'
      .' VALUES (?, ?, ?, ?)';
    sql_prepare($query, 'ssss', $title, $text, $date, $preview_url);
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

  $query .= " WHERE id = $id";

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

function new_admin_key($key, $num_days) {
  $now = time();
  $then = ($now + $num_days * sec_per_day) % sec_per_day;
  $expire_date = date('Y-m-d', $then);
  $query = 'UPDATE admin SET s_key = ?, s_key_expire_date = ?';
  sql_prepare($query, 'ss', $key, $expire_date);
}

// DELETE
function remove_post($id) {
  global $db;
  sql_prepare('DELETE FROM posts WHERE id = ?', 'd', $id);
}

?>
