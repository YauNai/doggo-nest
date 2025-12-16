<template>
  <section id="footer" class="text-white py-5" style="background-color: var(--brand-dark)">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-12 mb-4">
          <h3 class="text-white mb-3" style="letter-spacing: 3px">DoggoNest</h3>
          <p class="opacity-75" style="font-weight: 300">
            用心對待每一隻狗狗，<br />因為牠們把全部的世界都給了我們。
          </p>
        </div>

        <div class="col-10 border-top border-secondary my-4 opacity-50"></div>

        <div class="col-12">
          <div
            class="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 gap-md-5 text-light mb-4">
            <div class="d-flex align-items-center gap-2">
              <i class="bi bi-telephone-fill text-warning"></i>
              <span>(04) 2359-2181</span>
            </div>

            <div class="d-flex align-items-center gap-2">
              <i class="bi bi-geo-alt-fill text-warning"></i>
              <a href="https://maps.google.com" target="_blank" class="text-decoration-none text-white hover-underline">
                台中市西屯區工業區一路100號
              </a>
            </div>

            <div class="d-flex align-items-center gap-2">
              <i class="bi bi-clock-fill text-warning"></i>
              <span>週一至週五 08:00 ～ 17:00</span>
            </div>
          </div>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29120.274025984752!2d120.58952629566195!3d24.170531462217415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693e048d342aa9%3A0x2b6f18a6783fa3b!2z5Yue5YuV6YOo5Yue5YuV5Yqb55m85bGV572y5Lit5b2w5oqV5YiG572y77yI6Ie65Lit6IG36KiT5bGA77yJ!5e0!3m2!1szh-TW!2stw!4v1764744959682!5m2!1szh-TW!2stw" height="300" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="mt-4 col-12 border-0"></iframe>

          <div class="mt-5 social-icons">
            <a href="#"><i class="bi bi-facebook"></i></a>
            <a href="#"><i class="bi bi-instagram"></i></a>
            <a href="#"><i class="bi bi-twitter-x"></i></a>
            <a href="#"><i class="bi bi-line"></i></a>
          </div>

          <div class="mt-4 small opacity-50">
            &copy; 2025 DoggoNest 狗狗窩研究所. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped>
.social-icons a {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  margin: 0 8px;
  transition: all 0.3s ease;
  font-size: 1.2rem;
}

.social-icons a:hover {
  background-color: var(--brand-accent);
  color: var(--brand-dark);
  transform: translateY(-3px);
}
</style>