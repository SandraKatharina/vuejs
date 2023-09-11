<template>
  <div class="header-bar">
    <nav class="menu">
      <RouterLink to="/">home</RouterLink>
      <RouterLink to="/about">about</RouterLink>
      <RouterLink to="/allDestinations">destinations</RouterLink>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.header-bar {
  position: sticky;
  height: 50px;
  background-color: darkgoldenrod;
  color: white;
  font-size: 72px;
  font-weight: bolder;
  text-decoration: none;
}

.menu {
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 80px;
  padding-top: 0;
  padding-left: 30px;
}

a:link {
  text-decoration: none;
  color: white;
}
a:visited {
  color: white;
}
a:hover {
  color: hotpink;
}
a:active {
  color: blue;
}
</style>
