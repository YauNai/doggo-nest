<template>
  <div>
    <div class="text-center">
      <h2 class="fw-bold text-muted">{{ step.number }}.</h2>
      <h4 class="mb-0">{{ step.title }}</h4>
    </div>
    
    <div class="step-indicator">
      <div class="step-line"></div>
      <div class="step-dot"></div>
    </div>
    
    <div 
      class="process-img-box" 
      :style="{ backgroundImage: `url(${getImageUrl(step.imageFile)})` }"
    >
      <div class="process-overlay text-center text-white">
        <p class="h5 mb-3 fw-bold">{{ step.quote }}</p>
        <p class="small opacity-75">{{ step.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  step: {
    type: Object,
    required: true
  }
})

const getImageUrl = (filename) => {
  return new URL(`../assets/images/match/${filename}`, import.meta.url).href
}
</script>

<style scoped>
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

  :deep(.process-step:nth-child(2n - 1)) .step-line {
    width: 50%;
    left: 50%;
  }

  :deep(.process-step:nth-child(2n)) .step-line {
    width: 50%;
    left: 0;
  }
}

@media (min-width: 992px) {
  .step-line {
    display: block;
  }

  :deep(.process-step:nth-child(4n - 3)) .step-line {
    width: 50%;
    left: 50%;
  }

  :deep(.process-step:nth-child(4n - 2)) .step-line,
  :deep(.process-step:nth-child(4n - 1)) .step-line {
    width: 100%;
    left: 0;
  }

  :deep(.process-step:nth-child(4n)) .step-line {
    width: 50%;
    left: 0;
  }
}
</style>