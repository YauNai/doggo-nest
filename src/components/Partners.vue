<script setup>
import PartnersGroup from './PartnersGroup.vue';
</script>

<template>
  <section id="partners" class="py-5">
    <div class="container">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" class="text-center mb-5">
        <h1 class="fw-bold text-brand-dark">合作夥伴與公益支持</h1>
        <p class="text-muted">與我們共同守護狗狗的友好夥伴</p>
      </div>
    </div>

    <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" class="partner-carousel-wrapper">
      <div class="partner-carousel mt-0">
        <PartnersGroup isHidden="false" />
        <PartnersGroup isHidden="true" />
        <PartnersGroup isHidden="true" />
      </div>
    </div>
  </section>

</template>

<style scoped>
#partners {
  background-color: var(--brand-light, #f6f8f7);
  overflow: hidden;
}

.partner-carousel-wrapper {
  overflow: hidden;
  padding: 1.5rem 0;
}


.partner-carousel {
  display: flex;
  width: max-content;
  animation: scroll-left 40s linear infinite;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-33.3333%);
  }
}
</style>