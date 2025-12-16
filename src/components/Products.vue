<script setup>
import { computed } from 'vue';

  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    about: {
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
    return `fade-up-${props.fadeSide}`
  })
</script>

<template>
  <div 
    :data-aos="side" 
    data-aos-duration="1000" 
    data-aos-once="true" 
    class="col-6"
  >
    <div 
      class="h-50 text-center align-content-center bg-cover product-bg" 
      :style="cardStyle"
    >
      <div class="position-relative px-3">
        <h2>{{ title }}</h2>
        <p>{{ about }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-bg {
  min-height: 350px;
  position: relative;
  transition: transform 0.3s ease;
}

.product-bg h2,
.product-bg p {
  color: #ffffff !important;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  position: relative;
  z-index: 2;
}

.product-bg:hover h2,
.product-bg:hover p {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}

.product-bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(38, 70, 83, 0.6);
  transition: background 0.3s ease;
}

.product-bg:hover::before {
  background: rgba(38, 70, 83, 0.3);
}
</style>