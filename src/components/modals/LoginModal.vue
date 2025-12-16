<script setup>
  import useLogin from "@/composables/useLogin"
  import { ref, watch } from 'vue';

  const loginName = ref("")
  const loginPassword = ref("")
  const showLoginNameError = ref(false)
  const showLoginPasswordError = ref(false)

  const isLoginingSuccess = ref(false)
  const loginError = ref("")

  watch(loginName, () => {
    showLoginNameError.value = false
  })
  watch(loginPassword, () => {
    showLoginPasswordError.value = false
  })

  // 登入
  const isLogining = ref(false)

  const doLogin = async () => {
    // 檢查所有欄位是否有效
    if (!loginName.value.length || !loginPassword.value.length) {
      if (!loginName.value.length) {
        showLoginNameError.value = true
      }
      if (!loginPassword.value.length) {
        showLoginPasswordError.value = true
      }
      return;
    }

    if (isLogining.value) return;

    // 執行登入邏輯
    isLogining.value = true;

    const result = await useLogin(loginName.value, loginPassword.value);
    isLoginingSuccess.value = result.isLoginingSuccess
    loginError.value = result.loginError
    
    isLogining.value = false;
  };

  // 重新整理頁面
  const doReload = () => {
    window.location.reload()
  }
</script>

<template>
  <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" data-bs-backdrop="static"
    data-bs-keyboard="false" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <p class="modal-title fs-5" id="exampleModalLabel">登入狗狗窩</p>
          <button v-if="!isLoginingSuccess" type="button" class="btn-close" data-bs-dismiss="modal"
            aria-label="Close"></button>
        </div>

        <div v-if="!isLoginingSuccess" class="modal-body">
          <div class="mb-3">
            <label for="loginName" class="form-label">使用者名稱<span class="text-danger">*</span>
              <span v-if="showLoginNameError" data-aos="fade" class="ms-1 form-text text-danger">
                請輸入使用者名稱！</span></label>
            <input v-model="loginName" name="loginName" type="text" class="form-control" :class="{
              'is-invalid': showLoginNameError
            }" />
          </div>

          <div class="mb-3">
            <label for="loginPassword" class="form-label">密碼<span class="text-danger">*</span>
              <span v-if="showLoginNameError" data-aos="fade" class="ms-1 form-text text-danger">
                請輸入密碼！</span></label>
            <input v-model="loginPassword" name="loginPassword" type="password" class="form-control" :class="{
              'is-invalid': showLoginPasswordError
            }" />
          </div>

          <div class="mb-3">
            <a href="#">忘記密碼？</a>
          </div>

          <div class="mb-3">
            <div class="form-check form-switch">
              <input name="loginKeepLogin" type="checkbox" class="form-check-input" />
              <label for="loginKeepLogin" class="form-label">保持登入</label>
            </div>
          </div>

          <div class="d-grid gap-2 mb-3">
            <div v-if="loginError" class="text-center text-danger">{{ loginError }}</div>
            <button @click="doLogin()" type="submit" class="btn">登入</button>
            <button type="button" class="btn btn-sp" data-bs-toggle="modal" data-bs-target="#registerModal">
              還沒加入狗狗窩嗎？ 註冊
            </button>
          </div>
        </div>

        <div v-if="isLoginingSuccess" data-aos="fade" class="modal-body text-center d-grid">
          <h2>登入成功！</h2>
          <button @click="doReload" class="btn mt-4" data-bs-dismiss="modal"
            aria-label="Close">進入狗狗窩</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .modal-content {
    border-radius: 25px;
    border: none;
    overflow: hidden;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  }

  .modal-header {
    background-color: var(--brand-primary);
    color: white;
    border-bottom: none;
    padding: 1.5rem 2rem;
  }

  .modal-header.modal-match {
    background-color: var(--brand-accent);
    color: #212529;
    border-bottom: none;
    padding: 1.5rem 2rem;
  }

  .modal-title {
    font-weight: bold;
    letter-spacing: 2px;
  }

  .btn-close {
    filter: invert(1) grayscale(100%) brightness(200%);
  }

  .modal-body {
    padding: 2rem;
    background-color: #fff;
  }

  .modal-body .form-control {
    background-color: var(--brand-light);
    border: 1px solid transparent;
    padding: 0.8rem 1rem;
    border-radius: 50px;
    transition: all 0.3s;
  }

  .modal-body .form-control:focus {
    background-color: #fff;
    border-color: var(--brand-primary);
    box-shadow: 0 0 0 4px rgba(107, 144, 128, 0.2);
  }

  .modal-body label {
    font-weight: bold;
    color: var(--brand-dark);
    margin-left: 10px;
    margin-bottom: 5px;
    font-size: 0.9rem;
  }

  .btn-sp {
    background-color: rgba(0, 0, 0, 0);
    border: 2px solid var(--brand-primary);
    border-radius: 50px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font-weight: bold;
  }

  .btn-sp:hover {
    background-color: var(--brand-primary);
    border-color: var(--brand-primary);
    color: var(--brand-light);
  }
</style>