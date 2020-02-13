<?php

require_once "config.php";

use \Gumlet\ImageResize;

function save_new_photo() {
  $filename = save_uploaded_file(
    KEY_FOR_PHOTO_IN_FILES, GALLERY_DIR, md5(microtime().rand()));
  $filepath = $_SERVER["DOCUMENT_ROOT"].GALLERY_DIR."/$filename";

  list($width, $height) = getimagesize($filepath);

  $image = new ImageResize($filepath);
  $filepath_of_small =
    $_SERVER["DOCUMENT_ROOT"].SMALL_GALLERY_DIR."/$filename";

  if (max($height, $width) > SMALL_PHOTO_HEIGHT) {
    $image->resizeToHeight(SMALL_PHOTO_HEIGHT);
  }

  $image->save($filepath_of_small);

  return $filename;
}

function delete_photo_file($id) {
  $photo = QB::table("gallery")
    ->select("filename")
    ->where("id", "=", $id)
    ->first();

  if ($photo) {
    delete_file(GALLERY_DIR, $photo->filename);
    return 1;
  }

  return 0;
}

?>