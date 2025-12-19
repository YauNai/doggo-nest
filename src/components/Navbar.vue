<script setup>
import { useAuth } from '@/composables/useAuth';
import Headroom from 'headroom.js';
import { onMounted, ref } from 'vue';

const { isLoggedIn, username, level, checkAuth } = useAuth();

const headerRef = ref(null);
let headroom = null;

onMounted(async () => {
  headroom = new Headroom(headerRef.value, {
    tolerance: 5,
    offset: 100,
  })
  headroom.init();

  await checkAuth()
})

</script>

<template>

  <section id="navbar">
    <nav ref="headerRef" class="fixed-top headroom navbar navbar-expand-lg navbar-dark custom-navbar">
      <div class="container-fluid">
        <a class="navbar-brand d-inline-flex align-items-center" href="#home">
          <i class="fa fa-paw"></i>
          <span class="d-block d-lg-none d-xl-block">DoggoNest｜狗狗窩研究所</span>
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#news"><i class="bi bi-newspaper"></i> 最新消息</a>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                <i class="fa-solid fa-handshake-angle"></i> 業務範圍
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#services"><i class="fa-solid fa-hand-holding-heart"></i> 服務項目</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#products"><i class="fa-solid fa-box-open"></i> 產品列表</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#test"><i class="fa-solid fa-paw"></i> 狗狗性格小測驗</a>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                <i class="bi bi-question-circle-fill"></i> 認識我們
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#aboutUs"><i class="bi bi-info-circle-fill"></i> 關於我們</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#contact"><i class="bi bi-envelope-fill"></i> 聯絡我們</a>
                </li>
              </ul>
            </li>

            <li v-if="isLoggedIn" class="nav-item">
              <a class="nav-link" aria-current="page" href="#"><i class="bi bi-person-circle"></i> 歡迎，{{ username }}！</a>
            </li>
          </ul>

          <span class="float-end">
            <button class="btn btn-match me-2" data-bs-toggle="modal" data-bs-target="#MatchModal">
              <i class="bi bi-person-raised-hand"></i>
              認養流程
            </button>
            <button v-if="!isLoggedIn" class="btn me-2" data-bs-toggle="modal" data-bs-target="#loginModal">
              <i class="bi bi-person-vcard-fill"></i> 登入
            </button>
            <button v-if="!isLoggedIn" class="btn" data-bs-toggle="modal" data-bs-target="#registerModal">
              <i class="bi bi-person-arms-up"></i> 註冊
            </button>
            <RouterLink to="/admin" v-if="level === 'admin'" class="btn me-2">
              <i class="fa-solid fa-screwdriver"></i> 進入管理頁面
            </RouterLink>
            <button v-if="isLoggedIn" data-bs-toggle="modal" data-bs-target="#logoutModal" class="btn">
              <i class="bi bi-door-open-fill"></i> 登出
            </button>
          </span>

        </div>
      </div>
    </nav>
  </section>

</template>

<style scoped>
.headroom {
  will-change: transform;
  transition: transform 200ms linear;
}

.headroom--pinned {
  transform: translateY(0%);
}

.headroom--unpinned {
  transform: translateY(-100%);
}

.custom-navbar {
  background-color: rgba(38, 70, 83, 0.95) !important;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding-top: 1rem;
  padding-bottom: 1rem;
  transition: all 0.3s ease;
}

.navbar-brand {
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--brand-accent) !important;
  font-size: 1.5rem;
}

.dropdown-menu {
  background-color: var(--brand-dark);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  margin-top: 15px;
}

.dropdown-item {
  color: rgba(255, 255, 255, 0.8);
  padding: 10px 20px;
  transition: all 0.2s;
}

.dropdown-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--brand-accent);
  padding-left: 25px;
}

.nav-link {
  font-weight: 500;
  letter-spacing: 1px;
}

.btn-match {
  color: var(--brand-light);
  background-color: rgba(0, 0, 0, 0);
  border: 2px solid var(--brand-accent);
  border-radius: 50px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  font-weight: bold;
}

.btn-match:hover {
  background-color: var(--brand-accent);
  border-color: var(--brand-accent);
  color: #212529;
}
</style>