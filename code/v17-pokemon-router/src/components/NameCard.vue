<template>
  <div class="name-card">
    <RouterLink :to="`/detail?name=${name}`">
      {{ name }}
    </RouterLink>
  </div>
</template>

<script>
export default {
  props: {
    name: String
  }
}
</script>

<style scoped>
.name-card {
  display: flex;
  min-width: 70px;
  height: 30px;
  justify-content: center;
  align-items: center;
  background-color: burlywood;
  border-radius: 2px;
  color: white;
}
</style>
