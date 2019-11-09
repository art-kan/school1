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
  // RANDOM IMAGES
  const imagesData = [];

  function getRandomSize(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  for (let i = 0; i < 25; i++) {
    const width = 400 + getRandomSize(120.0, 720.0);
    const height = 200 + getRandomSize(72.0, 480.0);
    const url = 'https://picsum.photos/' + width + '/' + height + '?t=' + performance.now();
    const fullUrl = 'https://picsum.photos/' + (width * 2) + '/' + (height * 2) + '?t=' + performance.now();
    const desc = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
    imagesData.push({ url, fullUrl, desc });
  }

  createGallery({
    id: 'gallery',
    popupId: 'popup',
    imagesData,
  });

  // CUSTOM USAGE
  // createGallery({
  //   id: 'gallery',
  //   popupId: 'popup',
  //   imagesData: [
  //     {
  //       url: 'path/to/small/image',
  //       fullUrl: 'path/to/full/image',
  //       desc: 'This text is description of the image',
  //     },
  //     // ..
  //   ],
  // });
</script>

</body>
</html>
