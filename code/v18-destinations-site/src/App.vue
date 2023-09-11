<template>
  <HeaderBar />
  <div>
    <RouterView />
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'

export default { components: { HeaderBar } }
</script>

<style scoped></style>
