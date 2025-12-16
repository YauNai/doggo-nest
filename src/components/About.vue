<script setup>
import TypeIt from 'typeit';
import { counterUp } from 'counterup2';
import { onMounted, ref } from 'vue';
import AboutCard from './AboutCard.vue';

const showNoteItalic = ref(false)
const showNoteColor = ref(false)

onMounted(() => {

  // 數字動畫
  const counters = document.querySelectorAll(".counter")
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(el => {
          counterUp(el, { duration: 2000 })
          observer.unobserve(entry.target)
        })
      }
    })
  })

  counters.forEach(el => observer.observe(el))

  // 打字動畫
  const typeTitle = new TypeIt("#title", {
    speed: 75,
    waitUntilVisible: true,
    afterComplete: function (instance) {
      instance.destroy();
    }
  })
    .type("我們相信，", {delay: 500})
    .type("每一隻狗狗", {delay: 500})
    .delete(1, {delay: 250})
    .delete(1, {delay: 500})
    .type("<span class='text-warning'>狗</span>", {delay: 500})
    .type("<span class='text-warning'>狗</span>", {delay: 500})
    .type("都值得被善待。")
    .pause(500)
    .exec(async () => {
      typeContent.go()
    })
    .go()

  const typeContent = new TypeIt("#content", {
    speed: 75,
    afterComplete: function (instance) {
      instance.destroy();
    }
  })
    .type("所以我們專注於打造真正改善狗狗生活的小小創新。")
    .break()
    .pause(500)
    .type("從生活用品、", {delay: 250})
    .type("照護資訊到主人與狗狗之間的互動體驗，", {delay: 250})
    .type("我們希望讓「", {delay: 250})
    .type("陪伴", {delay: 250})
    .type("」", {delay: 250})
    .type("這件事變得更輕鬆、", {delay: 250})
    .type("更溫暖。", {delay: 1000})
    .move(-13, {delay: 500})
    .delete(1, {delay: 100})
    .delete(1, {delay: 100})
    .delete(1, {delay: 100})
    .delete(1, {delay: 500})
    .type("<span class='text-warning fw-bold'>「</span>", {delay: 250})
    .type("<span class='text-warning fw-bold'>陪</span>", {delay: 250})
    .type("<span class='text-warning fw-bold'>伴</span>", {delay: 250})
    .type("<span class='text-warning fw-bold'>」</span>", {delay: 500})
    .move(13, {speed: 50, delay: 500})
    .exec(async () => {
      typeNote.go()
    })

  const typeNote = new TypeIt("#note", {
    speed: 50,
  })
    .type("—", {delay: 500})
    .type("— ", {delay: 1000})
    .type("我們是一群工作時桌邊都有狗狗在睡覺的團隊。")
    .pause(700)
    .exec(() => {
      showNoteColor.value = true
    })
    .pause(700)
    .exec(() => {
      showNoteItalic.value = true
    })

})

</script>

<template>

  <section id="aboutUs" class="bg-cover py-5">
    <div class="container mb-5 position-relative">
      <div class="row justify-content-center">
        <div id="words" class="col-12 col-lg-10 text-center text-white about-text">
          <h2 id="title" class="mb-4 fw-bold"></h2>
          <p id="content" class="h5 lh-lg"></p>
          <p 
            id="note" 
            class="mt-4"
            :class="{
              'fst-italic': showNoteItalic,
              'text-warning': showNoteColor
            }"></p>
        </div>
      </div>
    </div>

    <div class="container position-relative">
      <div class="row g-4">

        <AboutCard cardIcon="person-heart" titleT="服務了超過" num="12,400" titleB="位 狗狗飼主" note="包含個人、家庭與專業訓練師。"
          fadeDelay="0" />

        <AboutCard cardIcon="bar-chart-line-fill" titleT="累積分析" num="38,000" titleB="筆 行為紀錄" note="用於改進互動指南與情緒判讀模型。"
          fadeDelay="200" />

        <AboutCard cardIcon="emoji-smile-fill" titleT="產品回購率" num="62%" titleB="使用者滿意" note="不僅主人喜歡，狗狗也願意接受。"
          fadeDelay="400" />

        <AboutCard cardIcon="house-heart-fill" titleT="合作機構" num="27" titleB="家 收容單位" note="協助進行領養資訊媒合，提升曝光。"
          fadeDelay="800" />

      </div>
    </div>
  </section>

</template>

<style scoped>
#aboutUs {
  background-image: url('../assets/images/Lab5.jpg');
  position: relative;
  z-index: 0;
}

#aboutUs::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: -1;
}

#aboutUs h2 {
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

#aboutUs p {
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
}

.about-text {
  font-family: 'Noto Serif TC', serif;
  height: 244px;
}

@media (max-width: 500px) {
  .about-text {
    height: 350px;
  }
}

.glass-card {
  background: rgba(38, 70, 83, 0.85);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  color: white;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  height: 100%;
}

.glass-card:hover {
  transform: translateY(-5px);
  background: rgba(38, 70, 83, 0.95);
}

.glass-card h4 {
  font-size: 1.1rem;
  color: #a4c3b2;
  margin-bottom: 0.5rem;
  font-weight: normal;
}

.glass-card h1 {
  font-size: 3rem;
  margin: 1rem 0;
}
</style>