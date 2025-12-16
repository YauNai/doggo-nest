<script setup>

import { useValidation } from '@/composables/useValidation';
import { computed, ref } from 'vue';

const isSubmitted = ref(false)
const cityList = ref([])

const fetchCites = async () => {
  try {
    const res = await fetch('./json/CityCountyData.json')

    if (!res.ok) {
      throw new Error('連線錯誤！')
    }

    const data = await res.json()

    cityList.value = data
  } catch (error) {
    console.error("無法取得縣市資料：", error)
  }
}

fetchCites();

// 名字驗證
const contactName = ref("")
const regexName = /^[^\s]{1,20}$/
const { isValid: isNameValid, showError: showNameError } = useValidation(contactName, regexName)

// 城市驗證
const contactCity = ref("")
const regexCity = /./
const { isValid: isCityValid } = useValidation(contactCity, regexCity)

// 電子信箱認證
const contactEmail = ref("")
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const { isValid: isEmailValid, showError: showEmailError } = useValidation(contactEmail, regexEmail)

// 想說的話驗證
const contactText = ref("")
const regexText = /.{1,}/
const { isValid: isTextValid } = useValidation(contactText, regexText)

// 送出訊息
const showSubmitError = ref(false)
const handleSubmit = (e) => {
  e.preventDefault()

  if (isNameValid.value && isCityValid.value && isEmailValid.value && isTextValid.value) {

    console.log({
      name: contactName.value,
      city: contactCity.value,
      email: contactEmail.value,
      text: contactText.value
    })

    contactName.value = ""
    contactCity.value = ""
    contactEmail.value = ""
    contactText.value = ""
    showSubmitError.value = false
    isSubmitted.value = true
  } else {
    showSubmitError.value = true
  }
}

</script>

<template>
  <section id="contact" class="py-5">
    <div v-if="!isSubmitted" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" class="container">
      <div class="card border-0 shadow-lg overflow-hidden" style="border-radius: 20px">
        <div class="row g-0">
          <div class="col-lg-5 d-none d-lg-block bg-cover letter-img"></div>

          <div class="col-lg-7 p-5 bg-white align-content-center">
            <h2 class="fw-bold mb-4 text-center text-lg-start">聯絡我們</h2>
            <p class="text-muted mb-4 text-center text-lg-start">
              有任何關於狗狗生活的疑問、想法或合作提議？<br />
              歡迎寫信給我們，我們會比狗狗聽到開零食包裝更快回覆您。
            </p>

            <form>
              <div class="row g-3">
                <div class="col-md-6">
                  <label for="contactName" class="form-label fw-bold small text-muted">名字
                    <span data-aos="fade" class="text-danger" v-if="showNameError">請勿含有空格！</span>
                  </label>
                  <input v-model.trim="contactName" id="contactName" type="text"
                    class="form-control bg-light border-2 py-2" :class="{
                      'is-valid': isNameValid,
                      'is-invalid': showNameError
                    }" placeholder="您的稱呼" required />
                </div>

                <div class="col-md-6">
                  <label for="cityList" class="form-label fw-bold small text-muted">所在縣市</label>
                  <select v-model.lazy="contactCity" id="cityList"
                    class="form-select form-control bg-light border-2 py-2" :class="{
                      'is-valid': isCityValid
                    }" required>
                    <option value="" selected disabled>選擇縣市</option>
                    <option v-for="city in cityList" :key="city.CityName" :value="city.CityName">
                      {{ city.CityName }}
                    </option>
                  </select>
                </div>

                <div class="col-12">
                  <label for="contactEmail" class="form-label fw-bold small text-muted">電子信箱
                    <span data-aos="fade" class="text-danger" v-if="showEmailError">請輸入有效的電子信箱！</span>
                  </label>
                  <input v-model="contactEmail" id="contactEmail" type="email"
                    class="form-control bg-light border-2 py-2" :class="{
                      'is-invalid': showEmailError,
                      'is-valid': isEmailValid && contactEmail.length > 0
                    }" placeholder="name@example.com" required />
                </div>

                <div class="col-12">
                  <label for="contactText" class="form-label fw-bold small text-muted">您想說的話</label>
                  <textarea v-model.trim="contactText" id="contactText" class="form-control bg-light border-2" :class="{
                    'is-valid': isTextValid
                  }" rows="5" placeholder="請告訴我們您的想法……" required></textarea>
                </div>

                <div class="col-12 mt-4 text-center text-lg-end">
                  <p v-if="showSubmitError" class="text-danger">所有欄位皆為必填！</p>
                  <button @click="handleSubmit" class="btn btn-lg px-5 shadow-sm">
                    送出訊息 <i class="bi bi-send-fill ms-2"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- 回應卡片 -->
    <div v-else data-aos="fade-down" data-aos-duration="1000" data-aos-once="true" class="container">
      <div class="card border-0 shadow-lg overflow-hidden" style="border-radius: 20px">
        <div class="row g-0">
          <div class="col-lg-5 d-none d-lg-block bg-cover submitted-img"></div>

          <div class="col-lg-7 p-5 bg-white align-content-center text-center text-lg-start">
            <h2 class="fw-bold mb-4">信件已成功送出！</h2>
            <p class="mb-4">
              謝謝您的來信！我們將儘速與您聯繫。請隨時查看您的收件夾！
              <br>
              <small class="text-muted">（別忘了檢查您的垃圾郵件！）</small>
            </p>
            <button @click="isSubmitted = false" class="btn btn-lg px-5 shadow-sm">再寄一封 <i
                class="bi bi-pencil-fill ms-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

  </section>

</template>

<style scoped>
.letter-img {
  background-image: url('../assets/images/GoldenRetriever.jpg');
  min-height: 500px;
}

.submitted-img {
  background-image: url('../assets/images/BorderCollie.jpg');
  min-height: 500px;
}

.form-control {
  border-radius: 15px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
}

#contact .form-control:focus {
  background-color: #fff;
  box-shadow: none;
  border: 2px solid var(--brand-primary);
}

.hover-underline:hover {
  text-decoration: underline !important;
  color: var(--brand-accent) !important;
}
</style>