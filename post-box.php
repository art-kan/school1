<div class="box">
  <img class="box-img" src="<?php
    $def = "./img/default-preview.svg";
    echo $post['preview_url'] ?: $def;
  ?>" alt="">
  <a href="/post.php?id=<?= $post['id']; ?>" class="box-text">
    <h2><?= s($post['title']); ?></h2>
    <?php // TODO: Rewrite SQL query ?>
    <p><?= purify(substr(strip_tags($post['text']), 0, 250).'...'); ?></p>
    <span class="box-date"><?= s(format_date($post['date'])); ?></span>
  </a>
</div>
