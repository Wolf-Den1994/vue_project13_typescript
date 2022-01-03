<template>
  <div class="card">
    <h1>Пользователи</h1>

    <user-list></user-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserList from "@/components/UserList";

export default defineComponent({
  setup() {

  },
  components: {UserList}
})
</script>
