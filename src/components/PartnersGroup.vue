<script setup>
const props = defineProps({
  isHidden: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <div :aria-hidden="isHidden" class="group">
    <div class="partner-card partner1">
      <i class="bi bi-google"></i>
    </div>
    <div class="partner-card partner2">
      <i class="bi bi-meta"></i>
    </div>
    <div class="partner-card partner3">
      <i class="bi bi-amazon"></i>
    </div>
    <div class="partner-card partner4">
      <i class="bi bi-apple"></i>
    </div>
    <div class="partner-card partner5">
      <i class="bi bi-steam"></i>
    </div>
    <div class="partner-card partner6">
      <i class="bi bi-microsoft"></i>
    </div>
  </div>
</template>

<style scoped>
i {
  font-size: 3rem;
  color: var(--brand-dark, rgba(0, 0, 0, 0.4));
  transition: color 0.3s ease;
}

.partner-card {
  width: 250px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--brand-light, #f6f8f7);
  border-radius: 10px;
  margin: 0 1.5rem;
  flex-shrink: 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.partner-card:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
}

.partner-card:hover i {
  color: var(--brand-dark, #264653);
}

.group {
  display: flex;
}
</style>