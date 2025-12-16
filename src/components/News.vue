<script setup>
import { computed, nextTick, ref } from "vue";

const news = ref([
  {
    img: "./images/news/news1.jpg",
    title: "DoggoNest 舉辦首屆「溫暖同伴日」吸引超過 500 位民眾參與",
    date: "2025/11/29",
    content:
      "DoggoNest 上週於大安森林公園舉辦「溫暖同伴日」活動，邀請寵物行為師分享狗狗情緒識讀技巧，現場更有 12 隻收容犬成功與家庭媒合，引起熱烈迴響。活動期間的公益義賣所得全數投入醫療基金。",
    link: "#",
  },
  {
    img: "./images/news/news2.jpg",
    title: "與三家獸醫院合作 DoggoNest 啟動「銀齡犬關懷計畫」",
    date: "2025/01/12",
    content:
      "考量高齡犬醫療需求提高，DoggoNest 宣布與三間合作獸醫院正式啟動「銀齡犬關懷計畫」。領養銀齡犬的家庭可獲得年度健檢補助與線上諮詢服務，希望讓每一隻老狗都能在安心與陪伴中度過晚年。",
    link: "#",
  },
  {
    img: "./images/news/news3.jpg",
    title: "DoggoNest 全新打造「狗狗專屬行為檔案」正式上線",
    date: "2024/12/28",
    content:
      "平台推出全新功能「行為檔案」，記錄每隻收容犬的個性標籤、生活習慣以及志工觀察紀錄，協助領養者更快速找到適合的狗狗。功能上線首週，領養諮詢量提升 38%。",
    link: "#",
  },
  {
    img: "./images/news/news4.jpg",
    title: "推出天然繩結玩具系列：由弱勢家庭手工製作",
    date: "2024/11/10",
    content:
      "DoggoNest 與在地社福組織合作推出「天然麻繩玩具」系列，產品由弱勢家庭手工製作，讓狗狗獲得安全玩具的同時，也實質協助社區家庭提升收入。",
    link: "#",
  },
  {
    img: "./images/news/news5.jpg",
    title: "DoggoNest 志工團隊突破 10,000 小時服務里程碑",
    date: "2024/10/22",
    content:
      "平台志工累積服務超過 10,000 小時，從照護、清潔到行為訓練皆有涉略。DoggoNest 將持續舉辦教育訓練，提升整體動物照護品質。",
    link: "#",
  },
  {
    img: "./images/news/news6.jpg",
    title: "平台公開「收容犬健康追蹤」資訊提升透明度",
    date: "2024/09/15",
    content:
      "DoggoNest 全面新增健康追蹤資訊，包括體重變化、疫苗進度與基本檢查報告，讓未來家長能更全面掌握犬隻的健康狀況，增加領養信任度。",
    link: "#",
  },
  {
    img: "./images/news/news7.jpg",
    title: "與知名攝影團隊合作 為收容犬拍攝免費形象寫真",
    date: "2024/08/30",
    content:
      "為提高收容犬曝光度，DoggoNest 與專業寵物攝影團隊合作，免費替每隻狗狗拍攝個人寫真照。活動開始後已有多隻長期滯留犬成功找到新家庭。",
    link: "#",
  },
]);

const showAll = ref(false);
const showCount = 3;

const displayedNews = computed(() => {
  return showAll.value ? news.value : news.value.slice(0, showCount);
});

const btnShowMore = ref(null);

const toggleShowAll = async () => {
  showAll.value = !showAll.value;
  if (!showAll.value) {
    await nextTick();
    btnShowMore.value?.scrollIntoView({
      block: "center",
      behavior: "instant",
      inline: "center",
    });
  }
};
</script>

<template>
  <section id="news" class="py-5 bg-light-section">
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
      class="container-sm"
      :class="{ 'has-gradient': !showAll }"
    >
      <div class="text-center mb-5">
        <h1 class="fw-bold text-brand-dark">最新消息</h1>
      </div>

      <div class="row g-4">
        <div
          v-for="(item, index) in displayedNews"
          :key="index"
          data-aos="fade"
          data-aos-duration="1000"
          data-aos-once="true"
          class="col-12"
        >
          <a
            :href="item.link"
            class="news-item-card d-block text-decoration-none border rounded-3 overflow-hidden"
          >
            <div class="row g-0 align-items-center">
              <div class="col-md-5">
                <div class="img-wrapper">
                  <img :src="item.img" class="news-img" :alt="item.title" />
                </div>
              </div>

              <div class="col-md-7">
                <div class="card-body p-4">
                  <small class="text-brand-primary fw-bold d-block mb-1">{{
                    item.date
                  }}</small>

                  <h5
                    class="card-title fw-bold text-brand-dark mb-2 news-title-clamp"
                  >
                    {{ item.title }}
                  </h5>

                  <p class="card-text news-content-clamp">{{ item.content }}</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div class="text-center mt-4">
        <button
          ref="btnShowMore"
          @click="toggleShowAll"
          class="btn btn-show-more"
        >
          {{ showAll ? "顯示較少" : "顯示更多" }}
          <i
            :class="showAll ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"
            class="ms-2"
          ></i>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container-sm {
  position: relative;
  max-width: 720px;
}

.container-sm.has-gradient::before {
  position: absolute;
  content: "";
  bottom: 60px;
  left: 0;
  right: 0;
  height: 200px;
  background: linear-gradient(
    180deg,
    rgba(var(--brand-light-rgb, 255, 255, 255), 0),
    var(--brand-light)
  );
  pointer-events: none;
  z-index: 1;
}

.row {
  position: relative;
  z-index: 0;
}

.btn {
  position: relative;
  z-index: 2;
  padding: 0.75rem 2rem;
  border: none;
  background-color: var(--brand-primary);
  border: none;
  border-radius: 50px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  font-weight: bold;
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background-color: #557568;
  color: var(--brand-light);
}

.bg-light-section {
  background-color: var(--brand-light);
}

.text-brand-dark {
  color: var(--brand-dark);
}

.text-brand-primary {
  color: var(--brand-primary);
}

.news-item-card {
  max-width: 800px;
  background-color: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.news-item-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1) !important;
}

.news-item-card:hover .card-title {
  color: var(--brand-primary);
}

.img-wrapper {
  height: 200px;
  overflow: hidden;
}

@media (min-width: 768px) {
  .img-wrapper {
    height: 100%;
  }
}

.news-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.news-item-card:hover .news-img {
  transform: scale(1.05);
}

.news-title-clamp {
  line-clamp: 2;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.news-content-clamp {
  line-clamp: 2;
  color: #6c757d;
  line-height: 1.5;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
