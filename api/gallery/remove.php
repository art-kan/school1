<?php

require_once "../extra.php";
require_once "config.php";
require_once "helpers.php";

assert_permissions();

validate();
handle();

done([
  "message" => "The photo was successfully removed.",
]);

/*
 * $_GET = [
 *   "id" => number,
 * ];
 */
function validate() {
  $is_ok = isset($_GET["id"]);

  if (!$is_ok) {
    validation_is_failed();
  }
}

function handle() {
  delete_photo_file($_GET["id"]);
  QB::table("gallery")
    ->where("id", "=", $_GET["id"])
    ->delete();
}

?>
