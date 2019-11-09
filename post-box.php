<div class="box">
  <img class="box-img" src="./img/photo_2019-09-28_11-32-30.jpg" alt="">
  <a href="post.php?id=<?= $post['id']; ?>" class="box-text">
    <h2><?= s($post['title']); ?></h2>
    <?php // TODO: Rewrite SQL query ?>
    <p><?= purify(substr($post['text'], 0, 250).'...'); ?></p>
    <span class="box-date"><?= s(format_date($post['date'])); ?></span>
  </a>
</div>
