<script setup>
import Products from './Products.vue';
</script>

<template>
  <section id="products">
    <div class="row gx-0 text-center align-items-center py-4">
      <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">產品列表</h1>
    </div>

    <div class="row g-0 overflow-hidden">

      <Products title="雲朵級睡墊" about="用過就回不去，專為關節健康打造。" imgUrl="./images/products/Pillow.jpg" fadeSide="right" />

      <Products title="智慧點心盒" about="狗狗安撫神器，防無聊、防焦慮。" imgUrl="./images/products/Bowl.jpg" fadeSide="left" />

    </div>

    <div class="row g-0 overflow-hidden">

      <Products title="夜光散步胸背帶" about="安全第一，晚上散步不再黑壓壓。" imgUrl="./images/products/Leash.jpg" fadeSide="right" />

      <Products title="抗撕咬繩" about="真的很難咬壞。" imgUrl="./images/products/Rope.jpg" fadeSide="left" />

    </div>

  </section>

</template>

<style scoped>

</style>