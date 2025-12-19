<template>
  <section id="not-found">
    <img :src="imgNotFound" alt="NotFound" class="rounded-4">
    <h1>404 - 哎呀！</h1>
    <h2>這個頁面不存在！</h2>
    <RouterLink to="/" class="btn btn-lg">返回首頁</RouterLink>
  </section>
</template>

<script setup>
  import imgNotFound from '../assets/images/NotFound.jpg'
</script>

<style scoped>
  #not-found {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #not-found>* {
    margin: 20px;
  }

  img {
    width: 500px;
    box-shadow: 0 0 10px var(--brand-dark);
    transition: all 0.3s ease;
  }

  img:hover {
    box-shadow: 0px 0 30px var(--brand-dark);
    transform: scale(1.01);
  }

</style>