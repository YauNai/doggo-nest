<template>
  <div class="modal fade" id="MatchModal" tabindex="-1" aria-labelledby="MatchModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-xl modal-fullscreen-xl-down">
      <div class="modal-content">
        <div class="modal-header modal-match">
          <h1 class="modal-title fs-5" id="exampleModalLabel">認養流程</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="row g-4 mb-lg-5">
              <div class="col-12 col-md-6 col-lg-3 process-step">
                <div class="text-center">
                  <h2 class="fw-bold text-muted">1.</h2>
                  <h4 class="mb-0">填寫狗狗喜好表</h4>
                </div>
                <div class="step-indicator">
                  <div class="step-line"></div>
                  <div class="step-dot"></div>
                </div>
                <div class="process-img-box match1">
                  <div class="process-overlay text-center text-white">
                    <p class="h5 mb-3 fw-bold">
                      「先讓我們知道你的生活節奏，才能找對好隊友！」
                    </p>
                    <p class="small opacity-75">
                      請誠實填寫你的生活作息、居住環境、喜歡的犬種個性等資訊，幫助我們進行初篩。
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-3 process-step">
                <div class="text-center">
                  <h2 class="fw-bold text-muted">2.</h2>
                  <h4 class="mb-0">AI 汪汪配對</h4>
                </div>
                <div class="step-indicator">
                  <div class="step-line"></div>
                  <div class="step-dot"></div>
                </div>
                <div class="process-img-box match2">
                  <div class="process-overlay text-center text-white">
                    <p class="h5 mb-3 fw-bold">
                      「不是算命，是...科學與一點狗狗的直覺。」
                    </p>
                    <p class="small opacity-75">
                      我們的演算法會從性格、需求與日常習慣過濾出最合適的狗狗清單供你參考。
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-3 process-step">
                <div class="text-center">
                  <h2 class="fw-bold text-muted">3.</h2>
                  <h4 class="mb-0">初次見面</h4>
                </div>
                <div class="step-indicator">
                  <div class="step-line"></div>
                  <div class="step-dot"></div>
                </div>
                <div class="process-img-box match3">
                  <div class="process-overlay text-center text-white">
                    <p class="h5 mb-3 fw-bold">
                      「第一次見面緊張嗎？其實牠也在偷偷打量你。」
                    </p>
                    <p class="small opacity-75">
                      安排與配對成功的狗狗互動 20
                      分鐘，看彼此氣場是否合拍，並確認基本指令配合度。
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-3 process-step">
                <div class="text-center">
                  <h2 class="fw-bold text-muted">4.</h2>
                  <h4 class="mb-0">共同散步測試</h4>
                </div>
                <div class="step-indicator">
                  <div class="step-line"></div>
                  <div class="step-dot"></div>
                </div>
                <div class="process-img-box match4">
                  <div class="process-overlay text-center text-white">
                    <p class="h5 mb-3 fw-bold">「散步就是最真誠的磨合。」</p>
                    <p class="small opacity-75">
                      一起散步 10–15
                      分鐘，了解牠在戶外的表現與你是否能掌控牽繩，這是最終測試。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="row g-4">
              <div class="col-12 col-md-6 col-lg-3 process-step">
                <div class="text-center">
                  <h2 class="fw-bold text-muted">5.</h2>
                  <h4 class="mb-0">暫時寄宿體驗</h4>
                </div>
                <div class="step-indicator">
                  <div class="step-line"></div>
                  <div class="step-dot"></div>
                </div>
                <div class="process-img-box match5">
                  <div class="process-overlay text-center text-white">
                    <p class="h5 mb-3 fw-bold">
                      「讓狗狗看看你的沙發舒不舒服。」
                    </p>
                    <p class="small opacity-75">
                      提供 1～3
                      天的家庭試住期，確認狗狗能否適應你的生活環境，雙方是否真的合得來。
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-3 process-step">
                <div class="text-center">
                  <h2 class="fw-bold text-muted">6.</h2>
                  <h4 class="mb-0">認養審核</h4>
                </div>
                <div class="step-indicator">
                  <div class="step-line"></div>
                  <div class="step-dot"></div>
                </div>
                <div class="process-img-box match6">
                  <div class="process-overlay text-center text-white">
                    <p class="h5 mb-3 fw-bold">
                      「不用緊張，我們只是想確保牠能被好好照顧。」
                    </p>
                    <p class="small opacity-75">
                      審核生活環境、日常用品是否齊全，以及狗狗健康需求是否可被滿足。
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-3 process-step">
                <div class="text-center">
                  <h2 class="fw-bold text-muted">7.</h2>
                  <h4 class="mb-0">完成認養</h4>
                </div>
                <div class="step-indicator">
                  <div class="step-line"></div>
                  <div class="step-dot"></div>
                </div>
                <div class="process-img-box match7">
                  <div class="process-overlay text-center text-white">
                    <p class="h5 mb-3 fw-bold">
                      「從今天起，你就是牠的一輩子。」
                    </p>
                    <p class="small opacity-75">
                      正式簽署認養文件，領取基本用品包，成為牠永遠的家人。
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-3 process-step">
                <div class="text-center">
                  <h2 class="fw-bold text-muted">8.</h2>
                  <h4 class="mb-0">後續陪伴</h4>
                </div>
                <div class="step-indicator">
                  <div class="step-line"></div>
                  <div class="step-dot"></div>
                </div>
                <div class="process-img-box match8">
                  <div class="process-overlay text-center text-white">
                    <p class="h5 mb-3 fw-bold">
                      「照顧狗狗的路上，我們永遠不會放你一個人。」
                    </p>
                    <p class="small opacity-75">
                      認養後 30
                      天內提供免費諮詢與行為建議，確保狗狗和主人適應良好。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.match1 {
  background-image: url('/src/assets/images/adaption/Mtach1.jpg')
}
.match2 {
  background-image: url('/src/assets/images/adaption/Mtach2.jpg')
}
.match3 {
  background-image: url('/src/assets/images/adaption/Mtach3.jpg')
}
.match4 {
  background-image: url('/src/assets/images/adaption/Mtach4.jpg')
}
.match5 {
  background-image: url('/src/assets/images/adaption/Mtach5.jpg')
}
.match6 {
  background-image: url('/src/assets/images/adaption/Mtach6.jpg')
}
.match7 {
  background-image: url('/src/assets/images/adaption/Mtach7.jpg')
}
.match8 {
  background-image: url('/src/assets/images/adaption/Mtach8.jpg')
}

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

.process-step {
  position: relative;
  margin-bottom: 3rem;
}

.step-indicator {
  position: relative;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
}

.step-dot {
  width: 30px;
  height: 30px;
  background-color: var(--brand-accent, #e9c46a);
  border: 4px solid #fff;
  border-radius: 50%;
  position: relative;
  z-index: 3;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.step-line {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #e0e0e0;
  z-index: 1;
  transform: translateY(-50%);
  display: none;
}

.process-img-box {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  height: 300px;
  background-size: cover;
  background-position: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.process-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(38, 70, 83, 0.85);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  opacity: 0;
  transition: all 0.3s ease;
}

.process-img-box:hover {
  transform: translateY(-10px);
}

.process-img-box:hover .process-overlay {
  opacity: 1;
}


@media (min-width: 768px) and (max-width: 991.98px) {
  .step-line {
    display: block;
  }

  .process-step:nth-child(2n - 1) .step-line {
    width: 50%;
    left: 50%;
  }

  .process-step:nth-child(2n) .step-line {
    width: 50%;
    left: 0;
  }
}

@media (min-width: 992px) {
  .step-line {
    display: block;
  }

  .process-step:nth-child(4n - 3) .step-line {
    width: 50%;
    left: 50%;
  }

  .process-step:nth-child(4n - 2) .step-line,
  .process-step:nth-child(4n - 1) .step-line {
    width: 100%;
    left: 0;
  }

  .process-step:nth-child(4n) .step-line {
    width: 50%;
    left: 0;
  }
}
</style>