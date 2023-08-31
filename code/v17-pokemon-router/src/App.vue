<template>
  <header class="wrapper">
    <RouterLink to="/"><i class="arrow"></i></RouterLink>
    <div class="header-bar">pokemons</div>
  </header>
  <div>
    <RouterView />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.wrapper {
  display: flex;
  gap: 50px;
  position: sticky;
  height: 80px;
  font-weight: bolder;
  font-size: 72px;
  background-color: aquamarine;
  color: white;
  padding-left: 100px;
}
.arrow {
  width: 20px;
  height: 20px;

  border: solid burlywood;
  border-width: 0 8px 8px 0;
  display: inline-block;
  padding: 5px;
  transform: rotate(135deg);
}
.arrow:hover {
  width: 20px;
  height: 20px;

  border: solid white;
  border-width: 0 8px 8px 0;
  display: inline-block;
  padding: 5px;
  transform: rotate(135deg);
}
</style>
