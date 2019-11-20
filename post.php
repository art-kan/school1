<?php include 'header.php'; ?>
<header class="header-banner"></header>

<?php
  $post_id = $_GET['id'];
  $post = get_post($post_id);
?>

<main id="main" class="main">
  <div class="container">
    <header class="heading-box">
      <h2>Новости и события</h2>
    </header>
    <section class="post">
      <header class="post-header">
        <h2 class="post-name"><?= s($post['title']); ?></h2>
        <div class="post-date"><?= s(format_date($post['date'])); ?></div>
      </header>
      <?php if ($post['preview_url'] != Null): ?>
        <div class="post-preview">
          <img src="<?= s($post['preview_url']); ?>" alt="">
        </div>
      <?php endif; ?>
      <div class="post-body"><?= purify($post['text']); ?></div>
    </section>
  </div>
</main>

<?php include 'footer.php'; ?>

</body>
</html>
