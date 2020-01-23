<?php include 'header.php'; ?>

  <!-- SLIDER_SECTION start -->
  <header id="slider-section" class="slider-section">
    <div class="container">
      <div id="simple-slider" class="simple-slider">
        <!-- Set default light image or just color -->
      </div>
      <div class="spacer"></div>
    </div>
  </header>
  <!-- SLIDER_SECTION end -->

  <?php
    $posts = get_last_posts_preview(5, 100);
    $first_two = array_slice($posts, 0, 2);
    $next_three = array_slice($posts, 2, 3);

    $welcome_text = get_text('welcome', 'ru');
  ?>

  <section id="welcome-section" class="welcome-section">
    <div class="container">
      <div class="welcome-box">
        <div class="welcome-box-item welcome-phrase-box">
          <img src="img/director.jpg">
          <p style="font-style: italic; text-align: right; margin-top: 1em;">Директор, Ли Н. А.</p>
          <h2><?= s($welcome_text['title']); ?></h2>
          <p><?= purify($welcome_text['content']); ?></p>
        </div>
        <div class="welcome-box-item last-events">
          <h2>Наши события</h2>
          <ul class="last-events-list">
            <?php foreach ($first_two as $post): ?>
              <li>
                <div class="small-event-box">
                  <p class="event-date"><?= s(format_date($post['date'])); ?></p>
                  <h3 class="event-name"><?= s($post['title']); ?></h3>
                  <p class="event-short-desc"><?= purify(substr(strip_tags($post['text']), 0, 250).'...'); ?></p>
                  <a href="/post.php?id=<?= $post['id']; ?>" class="read-more">Читать дальше</a>
                </div>
              </li>
            <?php endforeach; ?>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section id="last-news" class="last-news">
    <div class="container">
      <h2 class="heading">Новости и события</h2>
      <?php
        foreach($next_three as $post) {
          require('post-box.php');
        }
      ?>
      <?php if (1 || count($next_three) == 3): ?>
        <div class="link-view-all-wrapper">
          <a href="/news.php" class="link-view-all">Смотреть все</a>
        </div>
      <?php endif; ?>
    </div>
  </section>

  <?php include 'footer.php'; ?>

  <script src="scripts/simple-slider.js"></script>
  <script>

    createSimpleSlider({
      id: 'simple-slider',
      imageUrls: [
        location.href + '/../img/welcome0.jpg',
        location.href + '/../img/welcome.jpg',
        location.href + '/../img/welcome2.jpg',
      ],
      rate: 5000,
    });

  </script>

</body>
</html>
