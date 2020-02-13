<?php

require_once "../extra.php";
require_once "config.php";

validate();
handle();

/*
 * $_GET = [
 *   "page" => number, // option, default 1
 *   "category" => string, // option, default "all"
 * ];
 */
function validate() {
  $is_ok =
    (
      !isset($_GET["page"]) ||
      ctype_digit($_GET["page"])
    ) &&
    (
      !isset($_GET["category"]) ||
      is_string($_GET["category"])
    );

  if (!$is_ok) {
    validation_is_failed();
  }
}

function handle() {
  $page = @$_GET["page"] ?: 1;

  $qb = QB::table("gallery")
    ->limit(PHOTOS_PER_PAGE)
    ->offset(($page - 1) * PHOTOS_PER_PAGE)
    ->orderBy("date", "DESC")
    ->select([ "id", "filename" ]);

  if (isset($_GET["category"]) && $_GET["category"] != "all") {
    $qb->where("category", "=", $_GET["category"]);
  }

  if (isset($_GET["data"]) && $_GET["data"]) {
    $qb->select([ "desc", "category" ]);
  }

  echo json_encode(arary_map($qb->get(), function ($photo) {
    $photo->filename = GALLERY_DIR.'/'.$photo->filename;
    $photo->s_filename = SMALL_GALLERY_DIR.'/'.$photo->s_filename;
  }));
}

?>
