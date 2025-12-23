<template>
  <AdminNav @doLogout="doLogout" :isLoggedIn="isLoggedIn" :username="username"/>

  <section id="login">
    <div v-if="level !== 'admin'" class="grid-container py-3">
      <h2 v-if="!isLoggedIn">請先登入</h2>
      <h2 v-if="isLoggedIn">您無權觀看此頁面！</h2>
      <form @submit.prevent="doLogin" class="card">
        <div class="py-3">
          <label for="username" class="form-label">使用者名稱</label>
          <input v-model="loginUsername" type="text" id="username" class="form-control">
          <span v-if="showUsernameError" class="text-danger">請填入使用者名稱</span>
        </div>
        <div class="py-3">
          <label for="password" class="form-label">密碼</label>
          <input v-model="password" type="password" id="password" class="form-control">
          <span v-if="showPasswordError" class="text-danger">請填入密碼</span>
        </div>
        <div class="py-3 text-center">
          <div v-if="loginError" class="text-danger">{{ loginError }}</div>
          <button class="btn">登入</button>
        </div>
      </form>
    </div>
  </section>

  <main v-if="level === 'admin'">
    <nav>
      <p class="py-4 text-center">
        <a href="#" @click="changeContent('chart')" :class="{
          'selected': currContent === 'chart'
        }">會員圖表</a> |
        <a href="#" @click="changeContent('list')" :class="{
          'selected': currContent === 'list'
        }">會員列表</a>
      </p>
    </nav>
    <Chart v-if="currContent === 'chart'" />
    <Users v-if="currContent === 'list'" />
  </main>
</template>

<script setup>
import useLogin from "@/composables/useLogin"
import { useAuth } from '@/composables/useAuth';
import { onMounted, ref, watch } from 'vue';
import AdminNav from "@/components/admin/AdminNav.vue";
import Users from "@/components/admin/Users.vue";
import Chart from "@/components/admin/Chart.vue";

const { checkAuth, username, isLoggedIn, level, logout } = useAuth()

const currContent = ref("chart")
const changeContent = (content) => {
  currContent.value = content
}

onMounted(async () => {
  await checkAuth()
})

const loginUsername = ref("")
const showUsernameError = ref(false)
const password = ref("")
const showPasswordError = ref(false)

watch(loginUsername, () => {
  showUsernameError.value = false
})
watch(password, () => {
  showPasswordError.value = false
})

const loginError = ref("")
const isLoginingSuccess = ref(false)

const doLogin = async () => {
  loginError.value = ""

  // 檢查所有欄位是否有效
  if (!loginUsername.value.length || !loginUsername.value.length) {

    if (!loginUsername.value.length) {
      showUsernameError.value = true
    }

    if (!password.value.length) {
      showPasswordError.value = true
    }

    return;
  }

  // 執行登入邏輯
  const result = await useLogin(loginUsername.value, password.value);
  isLoginingSuccess.value = result.isLoginingSuccess
  loginError.value = result.loginError

  if (isLoginingSuccess.value) {
    window.location.reload()
  }

};

const doLogout = () => {
  logout()
  window.location.reload()
}
</script>

<style scoped>
.grid-container {
  display: grid;
  justify-items: center;
}

a {
  color: var(--brand-text);
  text-decoration: none;
}

.selected {
  color: var(--brand-dark);
  font-weight: bold;
}

.card {
  margin-top: 20px;
  padding: 20px 50px;
}
</style>