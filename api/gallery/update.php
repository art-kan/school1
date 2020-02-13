<?php

require_once "../extra.php";
require_once "config.php";
require_once "helpers.php";

assert_permissions();

validate();
handle();

done([
  "message" => "The photo was successfully updated.",
]);

/*
 * $_POST = [
 *   "id" => number,
 *   "category" => string, // optional
 *   "desc" => string, // optional
 * ];
 *
 * $_FILES = [
 *   "image" => ...
 * ];
 */
function validate() {
  $is_ok =
    isset($_POST["id"]) &&
    (
      !isset($_POST["category"]) ||
      is_string($_POST["category"])
    ) &&
    (
      !isset($_POST["desc"]) ||
      is_string($_POST["desc"])
    ) &&
    ( // least one thing
      isset($_POST["category"]) ||
      isset($_POST["desc"]) ||
      isset($_FILES["image"])
    );

  if (!$is_ok) {
    validation_is_failed();
  }
}

function handle() {
  global $LEFT;

  if (isset($_FILES["image"])) {
    $filename = save_new_photo();
    delete_photo_file($_POST["id"]);
  }

  $changes = filter_left([
    "category" => @$_POST["category"] ?: $LEFT,
    "desc"     => @$_POST["desc"] ?: $LEFT,
    "filename" => @$filename ?: $LEFT,
  ]);

  if (count($changes)) {
    QB::table("gallery")
      ->where('id', $_POST["id"])
      ->update($changes);
  }
}

?>
