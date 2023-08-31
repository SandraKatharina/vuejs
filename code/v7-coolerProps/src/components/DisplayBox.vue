<template>
  <div class="display-box">
    <div v-if="displayText">{{ displayText }}</div>
    <div v-else>Please write something</div>
  </div>
</template>

<script>
// export default {
//   props: ['displayText']
// }
export default {
  props: {
    displayText: {
      type: String
    }
  }
}
</script>

<style scoped>
.display-box {
  background-color: var(--strong-background-color);
  width: 150px;
  min-height: 150px;
  box-shadow: var(--shadow);
  padding: var(--size-2);
  border-radius: 5px;
  color: white;
  margin: 20px 20px 0;
}
</style>
