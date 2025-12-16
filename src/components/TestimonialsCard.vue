<script setup>
import { computed } from 'vue';

  const props = defineProps({
    words: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    imgUrl: {
      type: String,
      required: true
    },
    fadeSide: {
      type: String,
      required: true
    }
  })

  const cardStyle = computed(() => {
    return `background-image: url(${props.imgUrl})`
  })

  const side = computed(() => {
    return `fade-${props.fadeSide}`
  })
</script>

<template>
  <div class="row gx-0 pb-4">
    <div class="row justify-content-center">
      <div class="col-10 col-xl-8">
        <div :data-aos="side" data-aos-duration="1000" data-aos-once="true">
          <div class="card testimo bg-cover" :style="cardStyle">
            <div class="testimo-content text-center">
              <div class="mb-3">
                <i class="bi bi-quote text-white opacity-50" style="font-size: 3rem"></i>
              </div>

              <h2 class="mx-auto" style="max-width: 80%">
                {{ words }}
              </h2>

              <h4 class="mt-4">—— {{ name }}</h4>

              <div class="text-warning mt-2">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.testimo {
  position: relative;
  border: none;
  border-radius: 20px;
  overflow: hidden;
  min-height: 300px;
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