<?php

require_once "../extra.php";
require_once "config.php";
require_once "helpers.php";

assert_permissions();

validate();
handle();

done([
  "message" => "The photo was successfully uploaded.",
]);

/*
 * $_POST = [
 *   "category" => string,
 *   "desc" => string, // optional
 * ];
 *
 * $_FILES = [
 *   "image" => ...
 * ];
 */
function validate() {
  $is_ok =
    isset($_POST["category"]) &&
    is_string($_POST["category"]) &&
    (
      !isset($_POST["desc"]) ||
      is_string($_POST["desc"])
    ) &&
    isset($_FILES[KEY_FOR_PHOTO_IN_FILES]);

  if (!$is_ok) {
    validation_is_failed();
  }
}

function handle() {
  global $LEFT;

  $filename = save_new_photo();

  // $filename = save_uploaded_file(
  //   "image", GALLERY_DIR, md5(microtime().rand()));

  QB::table("gallery")->insert(filter_left([
    "category" => $_POST["category"],
    "desc"     => @$_POST["desc"] ?: $LEFT,
    "filename" => $filename,
  ]));
}

?>
