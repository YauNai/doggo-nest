<script setup></script>

<template>
  <main>
    <section id="home" class="home-bg bg-cover">
      <div class="text-center align-content-center vh-100">
        <h1
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-once="true"
          class="text-white"
        >
          打造更快樂的狗狗世界
        </h1>
        <h4
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="1000"
          data-aos-once="true"
          class="text-white"
        >
          我們用創意與設計，<br
            class="d-md-none d-block"
          />讓狗狗的生活每一天都更舒服、更安心。
        </h4>
        <a
          data-aos="fade"
          data-aos-duration="2000"
          data-aos-delay="2000"
          data-aos-once="true"
          href="#aboutUs"
          ><button class="btn btn-lg mt-5">認識我們</button></a
        >
      </div>
    </section>
  </main>
</template>

<style scoped>
.home-bg {
  background-image: url("../assets/images/DogPark.jpg");
}

#home h1 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  color: var(--brand-light);
}
</style>
