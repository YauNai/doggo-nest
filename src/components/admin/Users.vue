<template>
  <section>
    <table class="table table-striped table-bordered">
      <thead class="d-none d-md-table-header-group">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">使用者名稱</th>
          <th scope="col">Email</th>
          <th scope="col">電話</th>
          <th scope="col">權限等級</th>
          <th scope="col">建立時間</th>
          <th scope="col">動作</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="user in users" :key="user.id">

          <!-- 桌面版 -->
          <tr class="d-none d-md-table-row">
            <th scope="row">{{ user.id }}</th>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.tel }}</td>
            <td>{{ user.level }}</td>
            <td>{{ user.created_at }}</td>
            <td>
              <button>修改</button>
              <button class="ms-2">刪除</button>
            </td>
          </tr>
          
          <!-- 手機版 -->
          <tr class="d-md-none">
            <td>
              <table class="table table-sm mb-0">
                <tbody>
                  <tr>
                    <th scope="row" style="width: 40%;">ID</th>
                    <td>{{ user.id }}</td>
                  </tr>
                  <tr>
                    <th scope="row">使用者名稱</th>
                    <td>{{ user.username }}</td>
                  </tr>
                  <tr>
                    <th scope="row">Email</th>
                    <td>{{ user.email }}</td>
                  </tr>
                  <tr>
                    <th scope="row">電話</th>
                    <td>{{ user.tel }}</td>
                  </tr>
                  <tr>
                    <th scope="row">生日</th>
                    <td>{{ user.birth_date || '未提供' }}</td>
                  </tr>
                  <tr>
                    <th scope="row">權限等級</th>
                    <td>{{ user.level }}</td>
                  </tr>
                  <tr>
                    <th scope="row">訂閱電子報</th>
                    <td>{{ user.sub_news ? '是' : '否' }}</td>
                  </tr>
                  <tr>
                    <th scope="row">建立時間</th>
                    <td>{{ user.created_at }}</td>
                  </tr>
                  <tr>
                    <th scope="row">動作</th>
                    <td>
                      <button>修改</button>
                      <button class="ms-2">刪除</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

        </template>
      </tbody>
    </table>
  </section>
</template>

<script setup>
import getAllUsers from '@/composables/getAllUsers';
import { ref, onMounted } from 'vue';

const users = ref([]);
const loading = ref(false);
const error = ref(null);

onMounted(async () => {
  loading.value = true;
  
  try {
    const data = await getAllUsers();
    users.value = data.users;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
/* 手動修正 thead 的顯示問題 */
@media (max-width: 767.98px) {
  thead {
    display: none !important;
  }
}

@media (min-width: 768px) {
  thead {
    display: table-header-group !important;
  }
}

/* 在手機上增加使用者之間的間距 */
@media (max-width: 767.98px) {
  .table tbody tr.d-md-none {
    border-bottom: 3px solid #dee2e6;
  }
}
</style>