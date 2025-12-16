<script setup>
import { computed } from 'vue';

const props = defineProps({
  cardIcon: {
    type: String,
    required: true
  },
  titleT: {
    type: String,
    required: true
  },
  titleB: {
    type: String,
    required: true
  },
  num: {
    type: String,
    required: true
  },
  note: {
    type: String,
    required: true
  },
  fadeDelay: {
    type: Number
  }
})

const icon = computed(() => {
  return `bi-${props.cardIcon}`
})
</script>

<template>
  <div class="col-12 col-md-6 col-lg-3">
    <div 
      data-aos="fade-up" 
      :data-aos-delay="fadeDelay" 
      data-aos-once="true"
    >
      <div class="glass-card text-center">
        <div class="mb-3">
          <i class="bi fs-1 text-warning" :class="icon"></i>
        </div>
        <h4>{{ titleT }}</h4>
        <h1 class="text-warning">
          <strong class="counter">{{ num }}</strong>
        </h1>
        <h4>{{ titleB }}</h4>
        <p class="small mt-3 opacity-75">
          {{ note }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
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