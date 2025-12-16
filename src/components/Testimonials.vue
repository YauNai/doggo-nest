<script setup>
import TestimonialsCard from './TestimonialsCard.vue';
</script>

<template>
  <section id="testimonials">
    <div class="row gx-0 text-center align-items-center py-4">
      <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">好評回饋</h1>
    </div>
    <div class="row gx-0 pb-4">

      <TestimonialsCard words="「我家柯基以前都睡不好，自從換了雲朵睡墊後，一天到晚在上面打呼。」" name="小賴" imgUrl="images/testimonials/PeopleAndDog11-1.jpg" fadeSide="left" />
      
      <TestimonialsCard words="「智慧點心盒真的救了我家分離焦慮的小狗……現在我出門牠居然完全不哭了！」" name="阿霖" imgUrl="images/testimonials/PeopleAndDog21-1.jpg" fadeSide="right" />

      <TestimonialsCard words="「胸背帶質感好、安全又漂亮，我在路上走會有人跟我家狗狗打招呼。」" name="蕭姊" imgUrl="images/testimonials/PeopleAndDog31-1.jpg" fadeSide="left" />
    </div>
  </section>

</template>

<style scoped>
.testimo-1 {
  background-image: url('../assets/images/PeopleAndDog11-1.jpg');
}

.testimo-2 {
  background-image: url('../assets/images/PeopleAndDog21-1.jpg');
}

.testimo-3 {
  background-image: url('../assets/images/PeopleAndDog31-1.jpg');
}

.testimo {
  position: relative;
  border: none;
  border-radius: 20px;
  overflow: hidden;
  min-height: 300px;
  background-position: center center;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;

  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.testimo::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(38, 70, 83, 0.7);
  z-index: 1;
  transition: background 0.3s ease;
}

.testimo:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.testimo:hover::before {
  background: rgba(38, 70, 83, 0.5);
}

.testimo-content {
  position: relative;
  z-index: 2;
  padding: 2rem;
}

.testimo h2 {
  font-size: 1.5rem;
  line-height: 1.6;
  color: #fff !important;
  font-style: italic;
  margin-bottom: 1.5rem;
}

.testimo h4 {
  color: var(--brand-accent) !important;
  font-weight: bold;
  letter-spacing: 1px;
}
</style>