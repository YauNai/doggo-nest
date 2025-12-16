<script setup>
import { ref } from 'vue';

const members = ref([
  {
    img: "./images/team/EmmaChen.jpg",
    name: "Emma Chen",
    role: "創辦人 & 行為顧問",
    about:
      "擁有 10 年以上的犬隻行為研究經驗，曾在多家收容所擔任訓練志工。擅長透過行為評估與環境觀察，為每一隻狗狗找到最適合的家。",
    word: "沒有問題狗狗，只有不被理解的心。",
  },
  {
    img: "./images/team/LeoWang.jpg",
    name: "Leo Wang",
    role: "資深訓練師",
    about:
      "專精於正向訓練與敏捷運動，協助無數待認養犬重建自信心與社會化能力。他的耐心與細心使許多緊張狗狗順利找到幸福的家庭。",
    word: "慢慢來，狗狗會告訴你牠準備好了。",
  },
  {
    img: "./images/team/JasonWu.jpg",
    name: "Jason Wu",
    role: "資深訓練師",
    about:
      "曾任犬隻敏捷競賽教練，專精基礎服從與情緒管理訓練，協助超過 300 組狗狗與家庭建立更穩定的互動關係。",
    word: "一步一步來，每隻狗狗都能找到自己的節奏。",
  },
  {
    img: "./images/team/SophieLin.jpg",
    name: "Sophie Lin",
    role: "獸醫諮詢顧問",
    about:
      "提供醫療評估、營養建議與日常照護指導。致力於推廣健康養育觀念，讓每一位飼主都能給予狗狗最好的生活品質。",
    word: "健康是陪伴一輩子的基礎。",
  },
  {
    img: "./images/team/AlexChen.jpg",
    name: "Alex Chen",
    role: "行為復健專員",
    about:
      "專門協助受過創傷或有特殊行為問題的狗狗進行復健訓練。曾成功幫助超過 50 隻極度緊張的犬隻重新信任人類，找到溫暖的家。",
    word: "時間與愛，能治癒一切傷痕。",
  },
  {
    img: "./images/team/RyanTsai.jpg",
    name: "Ryan Tsai",
    role: "營養與健康管理師",
    about:
      "寵物營養學專家,針對不同年齡、體況的狗狗規劃客製化飲食方案。協助過敏、肥胖或體弱的犬隻恢復健康狀態，提升領養成功率。",
    word: "好好吃飯，是幸福生活的第一步。",
  },
  {
    img: "./images/team/LilyHsu.jpg",
    name: "Lily Hsu",
    role: "照護中心主管",
    about:
      "負責收容中心日常運作，擅長照護不同年齡層與需求的犬隻，確保所有狗狗都能在乾淨、安全且安心的環境生活。",
    word: "每一次溫柔的照顧，都是牠們重生的開始。",
  },
  {
    img: "./images/team/JayHuang.jpg",
    name: "Jay Huang",
    role: "社群與活動企劃",
    about:
      "負責線上社群互動與領養活動規劃，希望透過更友善的溝通方式，讓更多人理解領養的重要性。",
    word: "每次相遇，都是改變生命的開始。",
  },
  {
    img: "./images/team/SofiaYang.jpg",
    name: "Sofia Yang",
    role: "社群與活動企劃",
    about:
      "規劃每年超過 20 場狗狗主題活動，讓領養推廣以更有趣的方式被看見。負責社群內容，專長是把每隻狗狗拍得超級可愛。",
    word: "每個故事，都值得被聽見與分享。",
  },
  {
    img: "./images/team/MiaKao.jpg",
    name: "Mia Kao",
    role: "攝影與影像紀錄",
    about:
      "替每隻待認養狗狗拍攝專屬肖像與影片，善於捕捉牠們最真實、最溫柔的一面，讓牠們更容易遇見命定家人。",
    word: "鏡頭前的牠們，每一秒都值得被看見。",
  },
  {
    img: "./images/team/YangChang.jpg",
    name: "Yang Chang",
    role: "網站與系統工程師",
    about:
      "原 3D 動畫師結果公司解散來學寫程式的菜鳥工程師，最擅長 Vive Coding。最喜歡的遊戲是 Red Dead Redemption 2，最愛的 V 家音樂是 Ayase 的「HERO」。",
    word: "ハッピーバースデー 親愛なるヒーローへ",
  },
  {
    img: "./images/team/NinaLee.jpg",
    name: "Nina Lee",
    role: "志工培訓與協調",
    about:
      "負責招募、訓練與管理志工團隊，建立完善的志工支援系統。讓每位志工都能在助養過程中發揮最大價值，同時也獲得成長。",
    word: "每一份善意，都能成為改變的力量。",
  },
]);
</script>

<template>
  <section id="team" class="py-5 bg-light-section">
    <div class="container">
      <div class="text-center mb-5" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <h1 class="fw-bold text-brand-dark">專業團隊</h1>
        <p class="text-muted">遇見每一位用心守護狗狗的成員</p>
      </div>

      <div class="row g-4 justify-content-center">
        <div v-for="(item, index) in members" :key="index" class="col-12 col-md-6 col-lg-4" data-aos="fade-up"
          data-aos-duration="1000" :data-aos-delay="index * 100" data-aos-once="true">
          <div class="card team-card h-100 border-0 shadow-sm">
            <div class="card-body p-4 text-center d-flex flex-column">
              <div class="member-img-wrapper mb-4 mx-auto">
                <img :src="item.img" class="member-img" :alt="item.role">
              </div>

              <h6 class="text-brand-primary text-uppercase fw-bold mb-2 spacing-1">{{ item.role }}</h6>
              <h3 class="card-title fw-bold text-brand-dark mb-3">{{ item.name }}</h3>
              <p class="card-text text-muted small flex-grow-1 mb-4">
                {{ item.about }}
              </p>

              <div class="quote-box p-3 rounded-3 mt-auto">
                <p class="mb-0 fst-italic text-secondary">
                  <i class="bi bi-quote me-1 text-brand-accent"></i>
                  {{ item.word }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-light-section {
  background-color: var(--brand-light, #f6f8f7);
}

.text-brand-dark {
  color: var(--brand-dark, #264653);
}

.text-brand-primary {
  color: var(--brand-primary, #6b9080);
}

.text-brand-accent {
  color: var(--brand-accent, #e9c46a);
}

.spacing-1 {
  letter-spacing: 1px;
}

.team-card {
  border-radius: 20px;
  background-color: #ffffff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.team-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
}

.member-img-wrapper {
  position: relative;
  width: 140px;
  height: 140px;
}

.member-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.quote-box {
  background-color: rgba(107, 144, 128, 0.1);
  font-size: 0.9rem;
}

.bi-quote {
  font-size: 1.2rem;
  vertical-align: -3px;
}
</style>