<template>
  <div class="display">
    <h1>{{ showsValue }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    showsValue: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
.display {
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 80px;
  margin: 40px auto;
  background-color: white;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 3px;
  padding: 10px;
  text-align: center;
  color: salmon;
}
</style>
