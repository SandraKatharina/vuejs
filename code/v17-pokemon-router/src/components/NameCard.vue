<template>
  <div class="name-card">
    <RouterLink :to="`/detail?name=${name}`" class="link">
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
  padding: 10px;
}
.link {
  color: white;
  text-decoration: none;
}
.link:hover {
  color: aquamarine;
}
.link:active {
  color: burlywood;
}
.link:visited {
  color: darkmagenta;
}
</style>
