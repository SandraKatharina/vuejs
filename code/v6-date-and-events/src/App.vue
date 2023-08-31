<template>
  <div>
    <TheCounter />
    <br />
    <br />
    <br />
    <TheCheckbox />
  </div>
</template>

<script>
import TheCounter from './components/TheCounter.vue'
import TheCheckbox from './components/TheCheckbox.vue'
export default {
  components: { TheCounter, TheCheckbox }
}
</script>
<style scoped></style>
