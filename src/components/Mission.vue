<script setup>
import { computed } from 'vue';

const props = defineProps({
  main: {
    type: String,
    required: true
  },
  sub: {
    type: String,
    required: true
  },
  // 'primary', 'warm', 'dark'
  variant: {
    type: String,
    default: 'primary'
  }
});

const sectionClass = computed(() => {
  return `style-${props.variant}`;
});
</script>

<template>
  <section 
    id="mission" 
    class="mission-section position-relative py-5 d-flex align-items-center"
    :class="sectionClass"
  >
    <div class="slope-overlay"></div>
    
    <div class="deco-circle deco-1"></div>
    <div class="deco-circle deco-2"></div>

    <div class="container position-relative z-2">
      <div class="row justify-content-center text-center">
        <div class="col-12 col-md-10 col-lg-8">
          
          <h2 
            class="display-5 fw-bold mb-4 mission-title" 
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            {{ main }}
          </h2>

          <p 
            class="fs-5 mission-subtitle opacity-90" 
            data-aos="fade-up"
            data-aos-duration="1000" 
            data-aos-delay="500"
            data-aos-once="true"
          >
            {{ sub }}
          </p>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

.mission-section {
  min-height: 300px;
  overflow: hidden;
  color: white;
  z-index: 1;
}

/* --- Variants --- */

/* Primary */
.style-primary {
  background: linear-gradient(135deg, var(--brand-primary, #6b9080), #557568);
}
.style-primary .slope-overlay {
  background: rgba(255, 255, 255, 0.1);
}

/* 2. Warm */
.style-warm {
  background: linear-gradient(135deg, var(--brand-warm, #f4a261), var(--brand-accent, #e9c46a));
}
.style-warm .mission-title {
  text-shadow: 0 2px 4px rgba(165, 70, 0, 0.2);
}

/* 3. Dark */
.style-dark .mission-title {
  color: var(--brand-light);
}
.style-dark {
  background: linear-gradient(135deg, var(--brand-dark, #264653), #1a323c);
}
.style-dark .mission-subtitle {
  color: var(--brand-secondary, #a4c3b2);
}

/* --- 背景裝飾 --- */

.slope-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  z-index: -1;
  pointer-events: none;
}

.deco-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  z-index: -1;
}

.deco-1 {
  width: 200px;
  height: 200px;
  top: -50px;
  left: -50px;
}

.deco-2 {
  width: 150px;
  height: 150px;
  bottom: -30px;
  right: 10%;
}

.mission-title {
  letter-spacing: 2px;
  text-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.mission-subtitle {
  line-height: 1.6;
  font-weight: 300;
  letter-spacing: 1px;
}
</style>