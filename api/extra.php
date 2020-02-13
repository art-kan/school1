<?php

require __dir__."/../vendor/autoload.php";
require_once "dbconnect.php";

class _LEFT {}
$LEFT = new _LEFT();

function send_and_die($code, $json_message) {
  http_response_code($code);

  if (!isset($json_message["status"])) {
    $json_message["status"] = $code;
  }

  echo json_encode($json_message);

  die();
}

function assert_permissions() {
  if (/* the requester is not admin */ 0) {
    send_and_die(403, [
      "message" => "Forbidden",
    ]);
  }
}

function done($json) {
  send_and_die(200, $json);
}

function filter_left($assoc) {
  return array_filter($assoc, function ($value) {
    return !($value instanceof _LEFT);
  });
}

function validation_is_failed() {
  send_and_die(400, [
    "message" => "Your request has failed validation",
  ]);
}

function save_uploaded_file($filekey, $dir, $filename_no_ext) {
  $data = $_FILES[$filekey];
  $fileext = strtolower(
    substr($data["type"], 6, strlen($data["type"])));

  if (!in_array($fileext, ["tif", "jpg", "jpeg", "gif", "png"])) {
    send_and_die(400, [
      "message" => "Unknown extention of the image.",
    ]);
  }

  $filename = "$filename_no_ext.$fileext";
  $filepath = $_SERVER["DOCUMENT_ROOT"].$dir."/$filename";
  $success = move_uploaded_file($data["tmp_name"], $filepath);
  if (!$success) {
    throw new Exception("Uploaded file was not saved.", 1);
  }
  return $filename;
}

function delete_file($dir, $filename) {
  echo $_SERVER["DOCUMENT_ROOT"] . "/$dir/$filename";
  return unlink($_SERVER["DOCUMENT_ROOT"] . "/$dir/$filename");
}

?>
