<template>
  <section id="services">
    <div 
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
      class="row gx-0 text-center align-items-center py-4"
    >
      <h1 class="fw-bold">服務內容</h1>
    </div>

    <div 
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
      class="row gx-0 position-relative">
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item h-100 bg-cover bg-1 active" data-bs-interval="5000">
            <div class="carousel-caption">
              <h5>狗狗行為紀錄工具</h5>
              <p>輕鬆紀錄狗狗的飲食、散步、心情，讓你更了解牠真正需要什麼。</p>
            </div>
          </div>
          <div class="carousel-item h-100 bg-cover bg-2" data-bs-interval="5000">
            <div class="carousel-caption">
              <h5>狗狗情緒翻譯指南</h5>
              <p>用科學與生活觀察整理的狗狗情緒解讀工具，讓你更懂牠的小心思。</p>
            </div>
          </div>
          <div class="carousel-item h-100 bg-cover bg-3" data-bs-interval="5000">
            <div class="carousel-caption">
              <h5>居家生活改善小物</h5>
              <p>從防滑墊到睡窩、從散步配件到沐浴用品，全都基於真正需求設計。</p>
            </div>
          </div>
          <div class="carousel-item h-100 bg-cover bg-4" data-bs-interval="5000">
            <div class="carousel-caption">
              <h5>領養配對</h5>
              <p>協助浪浪找到適合牠的家庭，也讓主人找到真正契合的夥伴。</p>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">上一個</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">下一個</span>
      </button>
    </div>
  </section>
</template>

<style scoped>
.bg-1 {
  background-image: url('../assets/images/Lab1.jpg');
}
.bg-2 {
  background-image: url('../assets/images/Lab2.jpg');
}
.bg-3 {
  background-image: url('../assets/images/DogWithToy.jpg');
}
.bg-4 {
  background-image: url('../assets/images/Lab3.jpg');
}

.carousel-item {
  min-height: 600px;
  position: relative;
  cursor: pointer;
}

.carousel-item::before {
  position: absolute;
  content: "";
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.05), var(--brand-dark));
  z-index: 1;
}

.carousel-caption {
  z-index: 2;
}
</style>