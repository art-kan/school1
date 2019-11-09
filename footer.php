<?php
  $contacts = get_contacts();
?>
<!-- FOOTER -->
<footer id="footer" class="footer">
  <div class="container">
    <div class="footer-box">
      <div class="footer-item social-net-and-copyright">
        <div class="top">
          <ul class="social-net">
            <?php if ($contacts['instagram']): ?>
              <li class="social-net-item">
                <a href="<?= s($contacts['instagram']); ?>"><img src="img/instagram.png" class="sn-icon" height="22" alt="Instagram"></a>
              </li>
            <?php endif; ?>
            <?php if ($contacts['telegram']): ?>
              <li class="social-net-item">
                <a href="<?= s($contacts['telegram']); ?>"><img src="img/telegram.png" class="sn-icon" height="22" alt="Telegram"></a>
              </li>
            <?php endif; ?>
          </ul>
        </div>
        <p class="copyright"><?= s($contacts['copyright']); ?></p>
      </div>
      <div class="footer-item contacts">
        <h2 class="top">Мы на связи</h2>
        <p>Телефон: <?= s(format_tel_uz($contacts['tel'])); ?><br>
           <a href="mailto: oneschull@gmail.com">Gmail: <?= s($contacts['gmail']); ?></a>
        </p>
      </div>
      <div class="footer-item address">
        <h2 class="top">Aдресс</h2>
        <p><?= s($contacts['address']); ?></p>
      </div>
    </div>
  </div>
</footer>
<!-- FOOTER end -->

<!-- SCRIPTS -->
<script src="scripts/hamburger.js"></script>
<script src="scripts/common.js"></script>
