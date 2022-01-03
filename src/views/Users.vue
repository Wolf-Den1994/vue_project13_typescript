<template>
  <div class="card">
    <h1>Пользователи</h1>

    <p style="color: red" v-if="error">
      Ошибка: {{ error }}
    </p>

    <Suspense v-else>
      <template #default>
        <user-list></user-list>
      </template>
      <template #fallback>
        <p>Loading...</p>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent, onErrorCaptured, ref } from 'vue';
import UserList from "@/components/UserList.vue";

export default defineComponent({
  setup() {
    const error = ref<null | unknown>(null);

    onErrorCaptured(err => {
      error.value = err
      return true
    })

    return {
      error
    }
  },
  components: {UserList}
})
</script>
