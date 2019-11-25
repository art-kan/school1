<?php include 'header.php'; ?>
<header id="header-banner" class="header-banner"></header>

<main id="all-container" class="gallery-section">
  <section id="gallery-section">
    <div class="container">
      <header class="gallery-heading-box">
        <h2>Школьная галерея</h2>
      </header>
      <section id="gallery" class="gallery">
        <!--
          <div class="photo">
            <img class="photo-img" src="path/to/photo" alt="">
            <p class="photo-desc">Lorem ipsum dolor sit.</p>
          </div>
        -->
      </section>
    </div>
  </section>
</main>

<?php include 'footer.php'; ?>

<div class="gallery-popup" id="popup">
  <div class="popup-wrapper">
    <div class="popup-img-box"></div>
    <div class="popup-desc"></div>
  </div>
</div>

<script src="scripts/gallery.js"></script>
<script>
  const names = [
    '1.jpg', '20191101_141126.jpg',
    '20190928_120805.jpg', '20191101_141821(0).jpg',
    '20191003_111951.jpg', '20191107_095335.jpg',
    '20191003_115223.jpg', '20191107_100117.jpg',
    '20191010_113638.jpg', 'photo_2019-11-23_13-50-08.jpg',
    '20191025_110055.jpg', 'photo_2019-11-23_13-52-24.jpg',
    '20191025_130724_001.jpg', 'photo_2019-11-23_13-54-41.jpg',
    '20191025_131111.jpg', 'photo_2019-11-23_13-54-59.jpg',
    '20191101_140455.jpg', 'photo_2019-11-23_13-55-05.jpg',
    '20191101_140738.jpg', 'photo_2019-11-23_13-55-11.jpg',
  ];

  const imagesData = names.map((name) => {
    return {
      url: `/img/gallery/${name}`,
      fullUrl: `/img/gallery/${name}`,
      desc: '',
    };
  });

  createGallery({
    id: 'gallery',
    popupId: 'popup',
    imagesData,
  });
</script>

</body>
</html>
