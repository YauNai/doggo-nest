<template>
  <section>
    <h1 class="text-center pb-3">會員圖表</h1>
    <div>
      <div v-if="isLoading">
        <h1 class="text-center">載入中...</h1>
      </div>
      <div v-else>
        <h1 v-if="error" class="text-danger">錯誤：{{ error }}</h1>
        <div v-else class="charts">
          <canvas ref="chartLevel" class="level"></canvas>
          <canvas ref="chartEdu" class="edu"></canvas>
          <canvas ref="chartCity" class="city"></canvas>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import countLevel from '@/composables/count/countLevel';
import countEdu from '@/composables/count/countEdu';
import countCity from '@/composables/count/countCity';
import { ref, onMounted, useTemplateRef, nextTick, onUnmounted } from 'vue';
import makeChart from '@/composables/makeChart';

const isLoading = ref(false);
const error = ref(null);

const insCharts = ref([])

const cLevel = useTemplateRef('chartLevel')
const labelsLevel = ref([])
const dataLevel = ref([])

const cEdu = useTemplateRef('chartEdu')
const labelsEdu = ref([])
const dataEdu = ref([])

const cCity = useTemplateRef('chartCity')
const labelsCity = ref([])
const dataCity = ref([])

onMounted(async () => {
  isLoading.value = true;

  try {
    const levelData = await countLevel()
    const eduData = await countEdu()
    const cityData = await countCity()

    // 處理資料
    levelData.data.forEach(item => {
      labelsLevel.value.push(item.level)
      dataLevel.value.push(item.count)
    });

    eduData.data.forEach(item => {
      labelsEdu.value.push(item.edu)
      dataEdu.value.push(item.count)
    });

    cityData.data.forEach(item => {
      labelsCity.value.push(item.city)
      dataCity.value.push(item.count)
    });

    // 所有資料處理完畢
    isLoading.value = false;
    await nextTick();

    // 繪製圖表
    insCharts.value.push(makeChart(cLevel.value, labelsLevel.value, dataLevel.value, "bar", "數量"))
    insCharts.value.push(makeChart(cEdu.value, labelsEdu.value, dataEdu.value, "bar", "數量"))
    insCharts.value.push(makeChart(cCity.value, labelsCity.value, dataCity.value, "bar", "數量"))

  } catch (err) {
    error.value = err.message;
    isLoading.value = false;
  }
});

onUnmounted(() => {
  insCharts.value.forEach(ins => ins.destroy())
})
</script>

<style scoped>
.charts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  width: 100%;
}

.form-select {
  width: 600px;
}

canvas {
  width: 100% !important;
  height: auto !important;
  border: 1px solid #ddd;
}

.city {
  grid-row: 2;
  grid-column: span 2;
}
</style>