<script setup>
  import { useAuth } from '@/composables/useAuth';

  const { logout } = useAuth()

  const doLogout = () => {
    logout()
    window.location.reload()
  }
</script>

<template>
  <div class="modal fade" id="logoutModal" aria-labelledby="logoutModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <p class="modal-title fs-5" id="logoutModalLabel">您確定要登出嗎？</p>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="d-grid gap-2 my-3 mx-auto w-75">
          <button @click="doLogout" class="btn">確定登出</button>
          <button type="button" class="btn btn-sp" data-bs-dismiss="modal" aria-label="Close">
            取消
          </button>
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