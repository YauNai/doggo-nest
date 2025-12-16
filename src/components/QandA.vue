<script setup>
import { ref } from 'vue';

const qaList = ref([
  {
    question: "你們的狗狗配對服務需要收費嗎？",
    answer: "不需要！我們的配對服務完全免費，只希望更多狗狗能找到適合的家。若您願意支持我們，也可以購買周邊商品作為狗狗基金小額贊助！"
  },
  {
    question: "我可以親自來看狗狗嗎？",
    answer: "可以！我們採預約制，確保每隻狗狗都不會太緊張。填寫預約表單後，會有專員與您確認時段。"
  },
  {
    question: "我沒有養狗經驗，也能領養嗎？",
    answer: "當然可以～我們會提供「狗狗照護入門課」、「性格小測驗推薦」等工具，讓新手也能更有信心照顧狗狗。"
  },
  {
    question: "網站中的狗狗性格測試準確嗎？",
    answer: "它是以行為分類為基礎的小遊戲，好玩又能幫助您暸解自己更適合什麼性格的狗狗。不過正式領養前還是會有專員協助評估。"
  },
  {
    question: "購買商品需要登入會員嗎？",
    answer: "不需要，但登入後能享有更多功能，例如訂單管理、回饋積分、狗狗生日提醒等。"
  },
  {
    question: "我該怎麼知道商品是否適合我家的狗狗？",
    answer: "每個商品都有「適合犬種」、「尺寸參考」、「使用示範」等資訊。如果您不確定，也可以在聯絡表單告訴我們您家狗狗的年齡、體型。"
  },
  {
    question: "配對過程大概需要多久？",
    answer: "通常 3～7 天。我們會依據您的生活習慣與需求，從合作收容所中推薦最適合的狗狗。"
  },
  {
    question: "領養後如果遇到照護問題，可以再向你們諮詢嗎？",
    answer: "當然可以！我們提供「領養後 30 天免費線上諮詢」，包含飲食、行為、環境適應等問題，讓新手爸媽更安心。"
  },
  {
    question: "商品多久可以送達？",
    answer: "一般商品在 2～4 個工作天內出貨。若您的訂單包含「客製化名牌／手工項圈」，製作時間會較長，大約 5～7 個工作天。"
  },
  {
    question: "你們的狗狗照片是一定會更新的嗎？",
    answer: "會的！我們每週都會更新合作收容所提供的最新資料，包括照片、年齡、性格描述，確保資訊都是最新、最準確的。"
  },
]);

const openQA = ref(false)
const buttonText = ref("展開常見問答")

const handleOpen = () => {

  if (openQA.value) {
    buttonText.value = "展開常見問答"
    openQA.value = !openQA.value
  } else {
    buttonText.value = "收起常見問答"
    openQA.value = !openQA.value
  }

  document.getElementById('qanda').scrollIntoView();

}

</script>

<template>
  <section id="qanda" class="py-5">
    <div class="container">
      <div 
        data-aos="fade-up" 
        data-aos-duration="1000" 
        data-aos-delay="0" 
        data-aos-once="true" 
        class="text-center mb-3"
      >
        <h1 class="fw-bold text-brand-dark">常見問答</h1>
        <p class="text-muted">關於領養與服務，我們整理了大家最想知道的事</p>

        <div class="text-center">
          <button @click="handleOpen" class="btn btn-lg w-50">
            {{ buttonText }}
          </button>
        </div>
      </div>

      <div v-if="openQA" class="masonry-container">
        <div 
          v-for="(item, index) in qaList" 
          :key="index" 
          data-aos="fade-up" 
          data-aos-duration="1000"
          :data-aos-delay="index * 100" 
          data-aos-once="true"
          class="masonry-item"
        >
          <div class="qa-card">
            <button class="btn qa-btn w-100 text-start d-flex justify-content-between align-items-center" type="button"
              data-bs-toggle="collapse" :data-bs-target="'#qa-' + index" aria-expanded="false"
              :aria-controls="'qa-' + index">
              <span class="fw-bold">{{ item.question }}</span>
              <i class="bi bi-chevron-down toggle-icon"></i>
            </button>

            <div class="collapse" :id="'qa-' + index">
              <div class="qa-body">
                {{ item.answer }}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
#qanda {
  background-color: var(--brand-light, #f6f8f7);
}

.text-brand-dark {
  color: var(--brand-dark, #264653);
}

.masonry-container {
  column-count: 1;
  column-gap: 1.5rem;
}


.masonry-item {
  break-inside: avoid;
  margin-bottom: 1.5rem;
}

.qa-card {
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.qa-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.qa-btn {
  background-color: white;
  color: var(--brand-dark, #264653);
  border: none;
  padding: 1.25rem 1.5rem;
  border-radius: 15px;
  font-size: 1.05rem;
  transition: all 0.3s ease;
}

.qa-btn:hover {
  background-color: var(--brand-light, #f6f8f7);
  color: var(--brand-primary, #6b9080);
}

.qa-btn[aria-expanded="true"] {
  color: var(--brand-primary, #6b9080);
  background-color: #fcfcfc;
}

.toggle-icon {
  font-size: 0.9rem;
  transition: transform 0.3s ease;
  color: #ccc;
}

.qa-btn:hover .toggle-icon {
  color: var(--brand-primary);
}

.qa-btn[aria-expanded="true"] .toggle-icon {
  transform: rotate(180deg);
  color: var(--brand-primary);
}

.qa-body {
  padding: 0 1.5rem 1.5rem 1.5rem;
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
  background-color: #fcfcfc;
  border-top: 1px solid rgba(0, 0, 0, 0.03);
}
</style>