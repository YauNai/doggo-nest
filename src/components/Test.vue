<script setup>
import { computed, ref } from 'vue';

const q1 = ref(null);
const q2 = ref(null);
const q3 = ref(null);
const q4 = ref(null);
const q5 = ref(null);
const q6 = ref(null);

const showQuizButton = ref(true);
const showQuiz = ref(false);
const showQuizError = ref(false);
const quizResult = ref(null);
const quizResultDetail = ref(null);
const resultDogKey = ref(null);

// 各種狗狗結果
const personalities = {
  A: '熱情運動型',
  B: '忠誠陪伴型',
  C: '獨立內斂型',
  D: '愛吃享受型',
}
const personalityDogs = {
  A: '邊境牧羊犬',
  B: '黃金獵犬',
  C: '柴犬',
  D: '法國鬥牛犬',
}
const personalityDetail = {
  A: '充滿能量，喜歡探險、外向、遇到新事物永遠是第一個衝上去的！',
  B: '最舒服的地方就是主人身邊，溫柔、貼心，是超可靠的伴侶。',
  C: '慢熟但觀察力敏銳，喜歡安靜、有自己的節奏，值得慢慢了解。',
  D: '什麼都可以用零食解決！對食物天生敏銳，行為以胃為主。',
}
const personalityImages = {
  A: 'BorderCollie.jpg',
  B: 'GoldenRetriever.jpg',
  C: 'Shiba.jpg',
  D: 'FrenchBulldog.jpg',
}

// 顯示題目
const handleStartQuiz = () => {
  showQuiz.value = true;
  showQuizButton.value = false;
  document.getElementById('test').scrollIntoView();
}

// 選擇圖片
const resultImageStyle = computed(() => {

  if (!resultDogKey.value) return {};

  const imageName = personalityImages[resultDogKey.value];
  const imageUrl = `url('./images/test/${imageName}')`;


  return {
    'background-image': imageUrl,
  };

})

// 選擇代表
const resultDogName = computed(() => {
  if (!resultDogKey.value) return null;

  return personalityDogs[resultDogKey.value];

})

// 送出答案
const handleSubmit = () => {

  const answers = [q1.value, q2.value, q3.value, q4.value, q5.value, q6.value];
  const isCompleted = answers.every(answer => answer !== null)

  if (!isCompleted) {
    showQuizError.value = true;
    quizResult.value = null;
    resultDogKey.value = null; // 確保重設 key
    return;
  }

  showQuizError.value = false;

  let scores = { A: 0, B: 0, C: 0, D: 0 };
  answers.forEach(answer => { scores[answer] += 1; })

  let maxScore = 0;
  let maxKey = '';

  for (const key in scores) {
    if (scores[key] > maxScore) {
      maxScore = scores[key];
      maxKey = key;
    }
  }

  resultDogKey.value = maxKey;

  const resultText = personalities[maxKey];
  const resultDetail = personalityDetail[maxKey]

  quizResult.value = resultText;
  quizResultDetail.value = resultDetail;

  document.getElementById('test').scrollIntoView();

  showQuiz.value = false;

}


// 重設
const handleReset = () => {
  q1.value = null;
  q2.value = null;
  q3.value = null;
  q4.value = null;
  q5.value = null;
  q6.value = null;
  showQuizError.value = false;
  quizResult.value = null;
  quizResultDetail.value = null;
  const resultDogKey = null;
  document.getElementById('test').scrollIntoView();
  showQuiz.value = true;
}

</script>

<template>
  <section id="test" class="py-5 bg-light-section">
    <div class="container py-4">

      <div 
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
        class="text-center"
      >
        <h1 class="fw-bold">
          狗狗性格小測驗
        </h1>
        <p class="text-muted mb-4">
          想知道您是什麼樣子的狗狗嗎？填寫下列題目就知道！
        </p>
        
        <div v-if="showQuizButton" class="text-center">
          <button class="btn btn-lg w-50 mb-4" @click.prevent="handleStartQuiz">
            開始測驗！
          </button>
        </div>
      </div>

      <div 
        v-if="quizResult"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-once="true"  
        class="alert alert-success-custom mt-4 p-4 text-center shadow">
        <div class="row align-items-center">

          <div 
            data-aos="fade"
            data-aos-duration="500"
            data-aos-delay="500"
            data-aos-once="true"
            class="col-12 col-md-6 order-md-2">
            <div class="result-img d-flex justify-content-center" :style="resultImageStyle">
              <h2 class="dog-name align-self-end pb-3">
                {{ resultDogName }}
              </h2>
            </div>
          </div>

          <div class="col-12 col-md-6 order-md-1">
            <p class="h4 mb-2 fw-bold text-brand-dark">
              您的狗狗性格是：<br>
              {{ quizResult }}！
            </p>
            <p class="mb-3">
              {{ quizResultDetail }}
            </p>
            <div
              data-aos="fade"
              data-aos-duration="500"
              data-aos-delay="2000"
              data-aos-once="true"
            >
              <button class="btn btn-lg mb-3">
                分享結果
              </button>
            </div>
            <div
              data-aos="fade"
              data-aos-duration="500"
              data-aos-delay="2500"
              data-aos-once="true"
            >
              <button @click.prevent="handleReset" class="btn btn-lg btn-reset">
                重新測驗
              </button>
            </div>
          </div>
        </div>
      </div>

      <form 
        v-if="showQuiz"
        data-aos="fade"
        data-aos-anchor-placement="top-center"
        data-aos-duration="500"
        data-aos-once="true" 
        class="p-lg-5 p-4 border rounded-3 bg-white shadow-sm">

        <div class="row g-4">

          <!-- Q1 -->
          <div class="col-12 col-lg-6">
            <div class="mb-3 border-bottom pb-4 h-100">
              <p class="lead fw-bold text-dark">Q1. 如果今天是假日，您最想做什麼？</p>

              <div class="form-check">
                <input id="q1-a" v-model="q1" name="q1" type="radio" value="A" class="form-check-input">
                <label for="q1-a" class="form-check-label">A. 去戶外大奔跑！</label>
              </div>

              <div class="form-check">
                <input id="q1-b" v-model="q1" name="q1" type="radio" value="B" class="form-check-input">
                <label for="q1-b" class="form-check-label">B. 待在主人身邊一起放鬆</label>
              </div>

              <div class="form-check">
                <input id="q1-c" v-model="q1" name="q1" type="radio" value="C" class="form-check-input">
                <label for="q1-c" class="form-check-label">C. 自己在家靜靜睡覺</label>
              </div>

              <div class="form-check">
                <input id="q1-d" v-model="q1" name="q1" type="radio" value="D" class="form-check-input">
                <label for="q1-d" class="form-check-label">D. 尋找新零食嘗鮮！</label>
              </div>

            </div>
          </div>

          <!-- Q2 -->
          <div class="col-12 col-lg-6">
            <div class="mb-3 border-bottom pb-4 h-100">
              <p class="lead fw-bold text-dark">Q2. 當您遇到陌生人時，會怎麼做？</p>

              <div class="form-check">
                <input id="q2-a" v-model="q2" name="q2" type="radio" value="A" class="form-check-input">
                <label for="q2-a" class="form-check-label">A. 超興奮地跑去打招呼</label>
              </div>

              <div class="form-check">
                <input id="q2-b" v-model="q2" name="q2" type="radio" value="B" class="form-check-input">
                <label for="q2-b" class="form-check-label">B. 先觀察一下再靠近</label>
              </div>

              <div class="form-check">
                <input id="q2-c" v-model="q2" name="q2" type="radio" value="C" class="form-check-input">
                <label for="q2-c" class="form-check-label">C. 躲到主人後面偷看</label>
              </div>

              <div class="form-check">
                <input id="q2-d" v-model="q2" name="q2" type="radio" value="D" class="form-check-input">
                <label for="q2-d" class="form-check-label">D. 完全沒興趣，只想找零食</label>
              </div>
            </div>
          </div>

          <!-- Q3 -->
          <div class="col-12 col-lg-6">
            <div class="mb-3 border-bottom pb-4 h-100">
              <p class="lead fw-bold text-dark">Q3. 主人出門時，您的反應是？</p>

              <div class="form-check">
                <input id="q3-a" v-model="q3" name="q3" type="radio" value="A" class="form-check-input">
                <label for="q3-a" class="form-check-label">A. 立刻大叫「帶我一起！」</label>
              </div>

              <div class="form-check">
                <input id="q3-b" v-model="q3" name="q3" type="radio" value="B" class="form-check-input">
                <label for="q3-b" class="form-check-label">B. 坐在門口默默地等待</label>
              </div>

              <div class="form-check">
                <input id="q3-c" v-model="q3" name="q3" type="radio" value="C" class="form-check-input">
                <label for="q3-c" class="form-check-label">C. 直接去睡覺，反正主人會回來</label>
              </div>

              <div class="form-check">
                <input id="q3-d" v-model="q3" name="q3" type="radio" value="D" class="form-check-input">
                <label for="q3-d" class="form-check-label">D. 想著等一下要吃什麼</label>
              </div>
            </div>
          </div>

          <!-- Q4 -->
          <div class="col-12 col-lg-6">
            <div class="mb-3 border-bottom pb-4 h-100">
              <p class="lead fw-bold text-dark">Q4. 拿到新玩具時，您會怎麼做？</p>

              <div class="form-check">
                <input id="q4-a" v-model="q4" name="q4" type="radio" value="A" class="form-check-input">
                <label for="q4-a" class="form-check-label">A. 馬上玩到翻掉</label>
              </div>

              <div class="form-check">
                <input id="q4-b" v-model="q4" name="q4" type="radio" value="B" class="form-check-input">
                <label for="q4-b" class="form-check-label">B. 拿給主人一起玩</label>
              </div>

              <div class="form-check">
                <input id="q4-c" v-model="q4" name="q4" type="radio" value="C" class="form-check-input">
                <label for="q4-c" class="form-check-label">C. 先仔細嗅一嗅</label>
              </div>

              <div class="form-check">
                <input id="q4-d" v-model="q4" name="q4" type="radio" value="D" class="form-check-input">
                <label for="q4-d" class="form-check-label">D. 想知道能不能吃</label>
              </div>
            </div>
          </div>

          <!-- Q5 -->
          <div class="col-12 col-lg-6">
            <div class="mb-3 border-bottom pb-4 h-100">
              <p class="lead fw-bold text-dark">Q5. 到公園時，您會做什麼？</p>

              <div class="form-check">
                <input id="q5-a" v-model="q5" name="q5" type="radio" value="A" class="form-check-input">
                <label for="q5-a" class="form-check-label">A. 衝向草地盡情放電</label>
              </div>

              <div class="form-check">
                <input id="q5-b" v-model="q5" name="q5" type="radio" value="B" class="form-check-input">
                <label for="q5-b" class="form-check-label">B. 找其他狗狗一起玩</label>
              </div>

              <div class="form-check">
                <input id="q5-c" v-model="q5" name="q5" type="radio" value="C" class="form-check-input">
                <label for="q5-c" class="form-check-label">C. 躲在主人旁邊觀察環境</label>
              </div>

              <div class="form-check">
                <input id="q5-d" v-model="q5" name="q5" type="radio" value="D" class="form-check-input">
                <label for="q5-d" class="form-check-label">D. 尋找地上有沒有食物碎屑</label>
              </div>
            </div>
          </div>

          <!-- Q6 -->
          <div class="col-12 col-lg-6">
            <div class="mb-3 border-bottom pb-4 h-100">
              <p class="lead fw-bold text-dark">Q6. 聽到打雷或大聲音時，您的反應是？</p>

              <div class="form-check">
                <input id="q6-a" v-model="q6" name="q6" type="radio" value="A" class="form-check-input">
                <label for="q6-a" class="form-check-label">A. 完全不怕，繼續玩</label>
              </div>

              <div class="form-check">
                <input id="q6-b" v-model="q6" name="q6" type="radio" value="B" class="form-check-input">
                <label for="q6-b" class="form-check-label">B. 立刻跑去找主人</label>
              </div>

              <div class="form-check">
                <input id="q6-c" v-model="q6" name="q6" type="radio" value="C" class="form-check-input">
                <label for="q6-c" class="form-check-label">C. 躲起來不敢動</label>
              </div>

              <div class="form-check">
                <input id="q6-d" v-model="q6" name="q6" type="radio" value="D" class="form-check-input">
                <label for="q6-d" class="form-check-label">D. 一邊抖一邊想吃點東西壓驚</label>
              </div>
            </div>
          </div>

        </div>


        <div v-if="showQuizError" class="alert alert-danger p-2 text-center" role="alert">
          <p class="mb-0 fw-bold">您有題目沒選到喔！請檢查！</p>
        </div>

        <button v-if="!quizResult" class="btn btn-lg w-100 mt-4" @click.prevent="handleSubmit">
          送出測驗結果
        </button>

      </form>
    </div>
  </section>
</template>

<style scoped>
.result-img {
  position: relative;
  min-height: 600px;
  background-size: cover;
  background-position: center;
  border-radius: 0.5rem;
}

.result-img::before {
  position: absolute;
  content: "";
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(38, 70, 83, 0.5));
  z-index: 1;
}

@media (max-width: 767.98px) {
  .result-img {
    margin: 1rem 0;
  }
}

@media (min-width: 768px) {
  .result-img {
    margin-left: 1rem;
  }
}

.dog-name {
  color: var(--brand-light);
  z-index: 2;
}

.btn-reset {
  background-color: rgba(0, 0, 0, 0);
  border: 3px solid var(--brand-primary);
}

.btn-reset:hover {
  background-color: var(--brand-primary);
  border: 3px solid var(--brand-primary);
}

.bg-light-section {
  background-color: var(--brand-light, #f6f8f7);
}

.text-brand-dark {
  color: var(--brand-dark, #264653);
}

.form-check {
  padding: 0.5rem 1.5rem;
}

.form-check-input:checked {
  background-color: var(--brand-primary, #6b9080);
  border-color: var(--brand-primary, #6b9080);
}

.alert-success-custom {
  background-color: var(--brand-accent);
  border-color: var(--brand-accent);
  color: var(--brand-dark);
}

.alert-success-custom p {
  color: var(--brand-dark) !important;
}

.alert-danger {
  background-color: var(--brand-warm, #f4a261);
  border-color: var(--brand-warm, #f4a261);
  color: white;
}

.alert-danger p {
  color: white !important;
}

.border-bottom {
  border-color: rgba(0, 0, 0, 0.1) !important;
}
</style>