<template>
  <nav>
    <RouterLink to="/" class="btn">返回首頁</RouterLink>
    <div class="text-center align-self-center">
      <h1>管理員頁面</h1>
      <p v-show="isLoggedIn">您好：{{ username }}</p>
    </div>
    <button v-if="isLoggedIn" @click="$emit('doLogout')" class="btn">登出</button>
  </nav>
</template>

<script setup>
  const props = defineProps({
    isLoggedIn: Boolean,
    username: String
  })
</script>

<style scoped>
  nav {
    display: grid;
    background-color: var(--brand-dark);
    padding: 20px 30px;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
  }

  h1 {
    margin: 0;
    color: var(--brand-accent);
  }

  p {
    margin: 0;
    color: var(--brand-light);
  }
</style>