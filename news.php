<?php include 'header.php'; ?>
<header class="header-banner"></header>

<section>
  <h2 class="main-heading">Новости и события</h2>

  <?php
    $list = list_posts();
    foreach ($list as $post) {
      require('post-box.php');
    }
  ?>
</section>

<?php include 'footer.php'; ?>

</body>
</html>
