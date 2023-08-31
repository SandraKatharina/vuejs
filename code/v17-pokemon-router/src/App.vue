<template>
  <header class="header-bar">pokemons</header>
  <div>
    <RouterView />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.header-bar {
  position: sticky;
  height: 80px;
  font-weight: bolder;
  font-size: 72px;
  background-color: aquamarine;
  color: white;
  padding-left: 100px;
}
</style>
