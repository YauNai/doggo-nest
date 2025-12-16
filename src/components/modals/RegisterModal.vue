<script setup>
  import { useValidation } from "@/composables/useValidation";
  import useRegister from "@/composables/useRegister"
  import { computed, ref, watch } from "vue";

  const isSigninSuccess = ref(false);

  // 名稱驗證
  const name = ref("");
  const regexName = /^[^\s]{4,25}$/;
  const { isValid: isNameValid, showError: showNameError } = useValidation(
    name,
    regexName
  );

  // 檢查名稱重複
  const isNameDuplicate = ref(false)
  const checkDuplicateName = async (nameValue) => {

    if (!regexName.test(nameValue)) {
      isNameDuplicate.value = false;
      duplicateMessage.value = "";
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:5000/api/checkuni", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: nameValue
        }),
      });

      const data = await res.json()

      if (res.ok) {
        isNameDuplicate.value = !data.status
      } else {
        console.error("API 錯誤", data, error)
      }
    } catch {
      console.error("網路錯誤:", error);
    } finally {
      //
    }

  }

  let debounceTimer = null;

  watch(name, (newValue) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      checkDuplicateName(newValue);
    }, 500);
  });

  // 生日驗證
  const birthDate = ref(null);

  // 電子信箱驗證
  const email = ref("");
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const { isValid: isEmailValid, showError: showEmailError } = useValidation(
    email,
    regexEmail
  );

  // 電話號碼驗證
  const tel = ref("");
  const regexTel = /^09\d{8}$/;
  const { isValid: isTelValid, showError: showTelError } = useValidation(
    tel,
    regexTel
  );

  // 密碼驗證
  const password = ref("");
  const regexPassword = /^[^\s]{6,}$/;
  const { isValid: isPasswordValid, showError: showPasswordError } =
    useValidation(password, regexPassword);

  // 確認密碼認證
  const password_confirmation = ref("");

  const isPasswordConfirmationValid = computed(() => {
    if (password_confirmation.value.length === 0) {
      return null;
    }
    return password_confirmation.value === password.value;
  });

  const showPasswordConfirmationError = computed(() => {
    return (
      !isPasswordConfirmationValid.value && password_confirmation.value.length > 0
    );
  });

  // 訂閱電子報
  const news = ref(false);

  // 註冊邏輯
  const registerError = ref("");
  const isRegistering = ref(false);

  // 註冊按鈕送出
  const showSubmitError = ref(false);
  const handleSubmit = async () => {
    showSubmitError.value = false;

    // 檢查所有欄位是否有效
    if (
      !isNameValid.value ||
      !isEmailValid.value ||
      !isTelValid.value ||
      !isPasswordValid.value ||
      !isPasswordConfirmationValid.value
    ) {
      registerError.value = "請確認必填欄位皆已填寫！"
      showSubmitError.value = true;
      return;
    } else if (isNameDuplicate.value) {
      registerError.value = "使用者名稱不得重複！"
      showSubmitError.value = true;
      return;
    }

    if (isRegistering.value) return;

    // 執行註冊邏輯
    showSubmitError.value = false;
    isRegistering.value = true;

    const result = await useRegister(name.value, password.value, email.value, tel.value, birthDate.value, news.value);
    registerError.value = result.registerError
    isSigninSuccess.value = result.isSigninSuccess

    isRegistering.value = false;
  };
</script>

<template>
  <div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <p class="modal-title fs-5">立刻加入狗狗窩</p>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <!-- 表單 -->
        <div v-if="!isSigninSuccess" class="modal-body">
          <div class="row">
            <!-- 使用者名稱 -->
            <div class="col-md-6 mb-3">
              <label class="form-label">使用者名稱<span class="text-danger">*</span>
                <span v-if="showNameError" data-aos="fade" class="form-text text-danger">
                  必須介於 4-25 字元</span>
                <span v-if="isNameDuplicate" data-aos="fade" class="form-text text-danger">
                  使用者名稱已重複</span></label>
              <input v-model="name" id="name" name="name" type="text" class="form-control" :class="{
                'is-invalid': showNameError || isNameDuplicate,
                'is-valid': isNameValid && !isNameDuplicate,
              }" required autocomplete="off" />
            </div>

            <!-- 出生日期 -->
            <div class="col-md-6 mb-3">
              <label class="form-label">出生日期</label>
              <input v-model="birthDate" id="birthDate" name="birthDate" type="date" class="form-control"
                autocomplete="off" />
            </div>
          </div>

          <!-- 電子郵件 -->
          <div class="mb-3">
            <label class="form-label">電子郵件<span class="text-danger">*</span><span v-if="showEmailError" data-aos="fade"
                class="form-text text-danger">
                請輸入正確的電子信箱格式</span></label>
            <input v-model="email" id="email" name="email" type="email" class="form-control" :class="{
              'is-invalid': showEmailError,
              'is-valid': isEmailValid && email.length > 0,
            }" required autocomplete="off" />
          </div>

          <!-- 電話號碼 -->
          <div class="mb-3">
            <label class="form-label">電話號碼<span class="text-danger">*</span><span v-if="showTelError" data-aos="fade"
                class="form-text text-danger">
                請輸入正確的電話號碼格式</span></label>
            <input v-model="tel" id="tel" name="tel" type="tel" class="form-control" :class="{
              'is-invalid': showTelError,
              'is-valid': isTelValid && tel.length > 0,
            }" maxlength="10" required autocomplete="off" />
          </div>

          <!-- 密碼 -->
          <div class="mb-3">
            <label class="form-label">密碼<span class="text-danger">*</span><span v-if="showPasswordError" data-aos="fade"
                class="form-text text-danger">
                密碼必須至少 6 個字元且不包含空格</span></label>
            <input v-model="password" id="password" name="password" type="password" class="form-control" :class="{
              'is-invalid': showPasswordError,
              'is-valid': isPasswordValid && password.length > 0,
            }" required autocomplete="off" />
          </div>

          <!-- 確認密碼 -->
          <div class="mb-3">
            <label class="form-label">確認密碼<span class="text-danger">*</span></label>
            <input v-model="password_confirmation" id="password_confirmation" name="password_confirmation"
              type="password" class="form-control" :class="{
                'is-invalid': showPasswordConfirmationError,
                'is-valid':
                  isPasswordConfirmationValid &&
                  password_confirmation.length > 0,
              }" required autocomplete="off" />
          </div>

          <!-- 電子報 -->
          <div class="mb-3">
            <div class="form-check">
              <input v-model="news" type="checkbox" name="news" id="news" class="form-check-input" />
              <label class="form-check-label">我同意訂閱電子報。</label>
            </div>
          </div>

          <div class="mb-3 text-muted">
            按下「註冊」即表示您同意 狗狗窩研究所 的<a href="#">服務條款</a>並認可<a href="#">隱私權聲明</a>的適用範圍。
          </div>

          <div class="d-grid gap-2 mb-3">
            <span v-if="showSubmitError" class="text-danger text-center">
              <p>{{ registerError }}</p>
            </span>
            <button type="submit" class="btn" @click.prevent="handleSubmit">
              註冊
            </button>

            <button type="button" class="btn btn-sp" data-bs-toggle="modal" data-bs-target="#loginModal">
              已經加入狗狗窩了嗎？ 登入
            </button>
          </div>
        </div>

        <!-- 註冊成功 -->
        <div v-else data-aos="fade" class="modal-body text-center">
          <h2>註冊成功！</h2>
          <h3>歡迎加入狗狗窩！</h3>
          <p class="mt-3">
            請前往您的電子信箱進行認證。<br />
            <small>（別忘了檢查您的垃圾郵件！）</small>
          </p>

          <div class="d-grid gap-2 mb-3">
            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#loginModal">
              登入狗狗窩
            </button>
          </div>
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
