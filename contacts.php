<?php include 'header.php'; ?>
<header id="header-banner" class="header-banner">
  <div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=Toytepa%201%20elementary%20school&t=&z=15&ie=UTF8&iwloc=&output=embed&hl=ru" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div><style>.mapouter{position:relative;text-align:right;height:100%;width:100%;}.gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}</style></div>
</header>

<main id="content" class="content-section">
  <div class="container">
    <div class="content_box">
      <div class="contact_tit">
        <h2>Свяжитесь с нами</h2>
      </div>
      <!--
      <div class="contact_content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>
      -->
    </div>

    <div class="forms_box">
      <div class="left_box">
        <p>По любым вопросам вы можете связатся со школьной администрацией</p>
        <form class="form">
          <input type="text" name="name" placeholder="Ваше имя *" required>
          <input type="email" name="email" placeholder="Ваша e-почта *" required>
          <input type="text" name="subject" placeholder="Тема">
          <textarea placeholder="Письмо *" required></textarea>
          <button type="submit" class="clearfix">Отправить</button>
        </form>
      </div>

      <?php $contacts = get_contacts(); ?>

      <div class="right_box">
        <p class="contact-declaration">Вы можете задать нам любой вопрос по телефону: <span><?= s(format_tel_uz($contacts['tel'])); ?></span> (с 9:00 до 18:00).</p>

        <div class="contact-details">
          <div class="contact-address">О.Шарафуддинова 1и г.Нурафшон</div>
          <div class="contact-tel">Телефон: <?= s(format_tel_uz($contacts['tel'])); ?></div>
          <div class="contact-email">Email: <?= s($contacts['gmail']); ?></div>
        </div>

      </div>
    </div>
  </div>
</main>

<?php include 'footer.php'; ?>

</body>
</html>
