<?php include 'header.php'; ?>
<header id="header-image" class="header-image"></header>

<?php
  $greeting_text = get_text('greeting', 'ru');
  $rooms_text = get_text('rooms', 'ru');
  $short_history = get_text('short-history', 'ru')
?>

<main id="content" class="content-section">
  <div class="container">
    <section class="director">
      <div class="director_box">
        <div class="box_tit">
          <h2><?= s($greeting_text['title']); ?></h2>
        </div>
        <div class="director-box-bottom">
          <div class="director_content_box">
            <div class="director_img">
              <img src="img/director.jpg" class="clearfix">
            </div>
          </div>
          <div class="director_poragraph">
            <?= purify($greeting_text['content']); ?>
          </div>
        </div>
      </div>
    </section>
    <section class="rooms">
      <div class="rooms_container">
        <div class="box_tit">
          <h2><?= s($rooms_text['title']); ?></h2>
        </div>
        <div class="rooms_poragraph">
          <p class="rooms-desc"><?= purify($rooms_text['content']); ?></p>
        </div>
        <div class="rooms_content" id="swipe-slider">
          <?php
            $rooms = get_rooms('ru');
            $odd = False;
            foreach ($rooms as $room):
              $odd = !$odd;
          ?>
            <div class="room-box">
              <?php if ($odd): ?>
                <div
                  class="room-box-img"
                  style="background-image: url(<?= $room['picture_url']; ?>); ">
                </div>
              <?php endif; ?>
              <p class="room-box-desc">
                <?= $room['description']; ?>
              </p>
              <?php if (!$odd): ?>
                <div
                  class="room-box-img"
                  style="background-image: url(<?= $room['picture_url']; ?>); ">
                </div>
              <?php endif; ?>
            </div>
          <?php endforeach; ?>
       <div id="slider-control">
          <button id="slider-to-prev" class="slider-to-prev">Предыдущий</button>
          <button id="slider-to-next" class="slider-to-next">Следующий</button>
        </div>
      </div>
    </section>
    <section class="history">
      <div class="history_container">
        <!--
          <div class="box_tit">
            <h2>О нашей школе</h2>
          </div>
          <blockquote class="box-tit-q">
            <p><q>Спираль времен бесконечна, и сменяющие её друг друга поколения лишь восходят словно по лестнице, от ступени к ступени. Каждое поколение передает накопленный опыт следующиму поколению, которое будет развивать и обогащать его в дальнешем.</q></p>
          </blockquote>
        -->
        <div class="history-block">
          <h2><?= s($short_history['title']); ?></h2>
          <?= purify($short_history['content']); ?>
        </div>
      </div>
    </section>
  </div>
</main>

<?php include 'footer.php'; ?>
<script src="scripts/swipe-slider.js"></script>

<script>
  let removeSliderFeatures = null;
  function wrapRoomsBySliderIfLess920() {
    if (window.innerWidth <= 920) {
      if (removeSliderFeatures == null) {
        removeSliderFeatures = createSwipeSlider({
          id: 'swipe-slider',
          toLeftId: 'slider-to-prev',
          toRightId: 'slider-to-next',
        });
      }
    } else {
      if (removeSliderFeatures) {
        removeSliderFeatures();
        removeSliderFeatures = null;
      }
    }
  }

  wrapRoomsBySliderIfLess920();
  window.addEventListener('resize', wrapRoomsBySliderIfLess920);
</script>

</body>
</html>
