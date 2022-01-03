<template>
  <ul class="list">
    <li
      class="list-item"
      v-for="user in users"
    >
      {{ user.name }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
setup() {
  return {
    users: []
  }
}
})
</script>

<style scoped>

</style>