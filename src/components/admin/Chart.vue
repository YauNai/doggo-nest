<template>
  <section>
    <h1 class="text-center pb-3">會員圖表</h1>
    <div class="grid-container">
      <div>
        <select v-model="selectedCity" class="form-select">
          <option value="" disabled selected>請選擇目標縣市</option>
          <option v-for="city in cityList" :key="city" :value="city">
            {{ city }}
          </option>
        </select>
      </div>
      <div>
        <canvas ref="chart" class="chart"></canvas>
      </div>
    </div>
  </section>
</template>

<script setup>
import getAllUsers from '@/composables/getAllUsers';
import { ref, onMounted, useTemplateRef, watch } from 'vue';
import makeChart from '@/composables/makeChart';

const users = ref([]);
const loading = ref(false);
const error = ref(null);

const ctx = useTemplateRef('chart')
const chartLabels = ref([])
const chartData = ref([])

// 讀取會員資料
const loadUsersData = async () => {
  try {
    const data = await getAllUsers();
    users.value = data.users;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
}

// 讀取旅館資料
const allHotels = ref([])
const loadHotelData = async () => {
  try {
    const res = await fetch('./json/HotelList.json')

    if (!res.ok) {
      throw new Error('連線錯誤!')
    }

    const data = await res.json()
    allHotels.value = data.Hotels

    genCityList()

  } catch (err) {
    console.error('無法取得資料:', err)
  }
}

// 取得縣市列表
const cityList = ref([])
const cityCounter = ref({})
const cityData = ref([])
const selectedCity = ref('')
const genCityList = async () => {
  // 產生縣市選單
  allHotels.value.forEach(item => {
    const city = item.PostalAddress.City
    if (cityCounter.value[city] == undefined) {
      cityCounter.value[city] = cityData.value.length
      cityData.value.push([])
      cityList.value[cityCounter.value[city]] = city
    }
    cityData.value[cityCounter.value[city]].push(item)
  })

  // console.log('縣市列表:', cityList.value)
}

// 根據選定縣市取得鄉鎮資料
const townList = ref([])
const townCounter = ref({})
const townData = ref([])
const getData = (selectedCity) => {
  // 清空舊資料
  townList.value = []
  townCounter.value = {}
  townData.value = []

  // 資料重構
  allHotels.value.forEach(item => {
    if (item.PostalAddress.City === selectedCity) {
      const town = item.PostalAddress.Town
      if (townCounter.value[town] == undefined) {
        townCounter.value[town] = townData.value.length
        townData.value.push([])
        townList.value[townCounter.value[town]] = town
      }
      townData.value[townCounter.value[town]].push(item)
    }
  })

  // console.log('鄉鎮列表:', townList.value)
  // console.log('鄉鎮資料:', townData.value)

  // 產生圖表
  chartLabels.value = townList.value
  chartData.value = townData.value.map(arr => arr.length)
  makeChart(ctx.value, chartLabels.value, chartData.value, "bar", "旅館數量")
}

// 監控選單
watch(selectedCity, (newCity) => {
  if (newCity) {
    getData(newCity)
  }
})

onMounted(async () => {
  loading.value = true;

  await loadUsersData()

  await loadHotelData()
});
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  padding: 0 10px;
  width: 100vw;
  justify-items: center;
}

.form-select {
  width: 600px;
}

.chart {
  width: 800px;
  border: 2px solid black;
}
</style>