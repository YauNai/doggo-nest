<script setup>
</script>

<template>
  <section id="please-login">

    <div 
      data-aos="fade-up" 
      data-aos-duration="1000" 
      data-aos-once="true"
      class="container my-5 text-center justify-content-center"
    >

      <h1><i class="fa-solid fa-lock"></i></h1>
      <h3 class="my-4">登入後看完整的網頁內容！</h3>

      <small>使用者名稱：test05<br>密碼：123456</small>

      <div>
        <button data-bs-toggle="modal" data-bs-target="#loginModal" class="btn btn-lg px-5 shadow-sm mt-2">
          <i class="bi bi-person-vcard-fill"></i> 登入
        </button>
      </div>

      <div>
        <button data-bs-toggle="modal" data-bs-target="#registerModal" class="btn btn-lg px-5 shadow-sm mt-2">
          <i class="bi bi-person-arms-up"></i> 註冊
        </button>
      </div>

    </div>
  </section>
</template>

<style scoped>
.form-control {
  border-radius: 15px;
  border: 1px solid #e0e0e0;
}

.form-control:focus {
  background-color: #fff;
  box-shadow: none;
  border: 2px solid var(--brand-primary);
}
</style>