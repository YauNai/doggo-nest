<script setup>
import { useValidation } from '@/composables/useValidation';
import { ref } from 'vue';

const showSubError = ref(false)
const isSubbed = ref(false)

const props = defineProps({
  main: {
    type: String,
    required: true
  }
});

// 電子信箱認證
const subEmail = ref("")
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const {isValid: isEmailValid, showError: showEmailError} = useValidation(subEmail, regexEmail)

const handleSub = (e) => {
  e.preventDefault();
  if (isEmailValid.value) {
    isSubbed.value = true
    showSubError.value = false
  } else {
    showSubError.value = true
  }
}

const handleSubAgain = () => {
  isSubbed.value = false
  subEmail.value = ""
}

</script>

<template>
  <section id="sub">

    <div 
      data-aos="fade-up" 
      data-aos-duration="1000" 
      data-aos-once="true"
      class="container my-5 text-center justify-content-center"
    >
      <h3 class="my-4">{{ main }}</h3>
      <input 
        v-model="subEmail"
        type="email" 
        class="form-control mx-auto w-50 border-2 text-center" 
        :class="{
          'is-invalid': showEmailError,
          'is-valid': isEmailValid && subEmail.length > 0
        }" 
        :disabled="isSubbed" 
        required
      >
      <div v-if="!isSubbed" data-aos="fade" data-aos-once="true">
        <small v-if="showSubError" class="text-danger">電子信箱格式有誤！</small><br>
        <button @click="handleSub" class="btn btn-lg px-5 shadow-sm">訂閱電子報 <i
            class="bi bi-envelope-plus-fill ms-2"></i>
        </button>
      </div>

      <div v-else data-aos="fade" data-aos-once="true" class="mt-3">
        <h3>謝謝您，您已成功訂閱電子報！</h3>
        <button @click="handleSubAgain" class="btn btn-lg px-5 shadow-sm mt-2">為另一個電子信箱訂閱電子報 <i
            class="bi bi-envelope-plus-fill ms-2"></i>
        </button>
      </div>

      <small data-aos="fade" data-aos-once="true" class="text-muted">您可以隨時取消訂閱。</small>

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