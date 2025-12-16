<script setup>
  import { onMounted, ref } from 'vue';
  import { useAuth } from '@/composables/useAuth';
  import Navbar from '@/components/Navbar.vue';
  import Home from '@/components/Home.vue';
  import News from '@/components/News.vue';
  import Services from '@/components/Services.vue';
  import Test from '@/components/Test.vue';
  import ProductList from '@/components/ProductList.vue';
  import Testimonials from '@/components/Testimonials.vue';
  import About from '@/components/About.vue';
  import Team from '@/components/Team.vue';
  import Partners from '@/components/Partners.vue';
  import Contact from '@/components/Contact.vue';
  import QandA from '@/components/QandA.vue';
  import FooterPage from '@/components/Footer.vue';
  import SubNewspaper from '@/components/Sub.vue';
  import Mission from '@/components/Mission.vue';
  import Modal from '@/components/Modal.vue';
  import PleaseLogin from '@/components/PleaseLogin.vue';

  const showBtnTop = ref(false)
  const { isLoggedIn } = useAuth()

  const handleScroll = () => {
    showBtnTop.value = window.scrollY > 400
  }

  const handelTop = () => {
    window.scrollTo(0, 0)
  }

  window.addEventListener("scroll", handleScroll)

  onMounted(() => {
  })
</script>

<template>
  <Navbar />
  <Home />
  <News />
  <PleaseLogin v-if="!isLoggedIn" />

  <span v-else>
    <SubNewspaper main="訂閱電子報，隨時掌握我們的最新活動與消息！" />
    <Mission main="每隻狗狗都值得被看見" sub="我們用耐心、尊重與陪伴，讓牠找到最溫暖的家。" variant="warm" />
    <Services />
    <Test />
    <Mission main="陪伴，是最好的承諾" sub="每一次互動、每一個微笑，都能改變狗狗的一生。" />
    <ProductList />
    <Testimonials />
    <Mission main="從等待，到相遇" sub="我們用行動與關懷，把每一次相遇變成幸福的開始。" variant="dark" />
    <About />
    <Team />
    <Partners />
    <Mission main="讓愛連結每顆心" sub="以透明、友善的方式，幫助每隻狗狗找到理想家庭。" variant="dark" />
    <QandA />
    <Contact />
    <SubNewspaper main="或者...您也可以訂閱我們的電子報！" />
  </span>

  <Mission main="溫暖每一個狗狗的世界" sub="陪伴、照護與理解，是我們不變的使命。" variant="warm" />
  <FooterPage />
  <Modal />

  <button data-aos="fade" v-if="showBtnTop" @click="handelTop" class="btn-top shadow text-center" title="回到最上端"><i
      class="fa-solid fa-angles-up"></i>
  </button>

</template>

<style scoped>
  .btn-top {
    height: 50px;
    width: 50px;
    position: fixed;
    bottom: 200px;
    right: 60px;
    z-index: 99;
    border: none;
    outline: none;
    background-color: var(--brand-accent);
    cursor: pointer;
    border-radius: 50%;
    transform: translateY(0);
    transition: all 0.3s ease;
  }

  .btn-top:hover {
    transform: translateY(-10%);
  }
</style>
