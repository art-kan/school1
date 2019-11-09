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

  <section id="welcome-section" class="welcome-section">
    <div class="container">
      <div class="welcome-box">
        <div class="welcome-box-item welcome-phrase-box">
          <img src="img/director.jpg">
          <h2>Добро пожаловать в нашу школу</h2>
          <p>
            Добро пожаловать на официальный сайт средней школы №1 г.Нурафшан. <br>

            Сдесь вы можете найти много интересных сведеньей и статей о нашей школе, так же вы можете узнать в онлайн режиме последние школьные новости!

          </p>
          <a href="#">Читать дальше</a>
        </div>
        <div class="welcome-box-item last-events">
          <h2>Наши события</h2>
          <ul class="last-events-list">
            <li>
              <div class="small-event-box">
                <p class="event-date">4 сентября 2019</p>
                <h3 class="event-name">Первый звонок</h3>
                <p class="event-short-desc">

                4 сентября наша школа встречает новый учебный год, для многих первоклассников это волнительный
                праздник

                </p>
                <a href="#" class="read-more">Читать дальше</a>
              </div>
            </li>
            <li>
              <div class="small-event-box">
                <p class="event-date">1 октября 2019</p>
                <h3 class="event-name">Школа запускает официальный сайт</h3>
                <p class="event-short-desc">

               1 октября 2019 мы празднуем старт нашего официального сайта которые создали ученики нашей 
               школы!

               </p>

                <a href="#" class="read-more">Читать дальше</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section id="last-news" class="last-news">
    <div class="container">
      <h2 class="heading">Новости и события</h2>
      <?php
        $posts = get_last_posts_preview(2, 100);
        foreach($posts as $post) {
          require('post-box.php');
        }
      ?>
    </div>
  </section>

  <?php include 'footer.php'; ?>

  <script src="scripts/simple-slider.js"></script>
  <script>
    // Example usage
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
