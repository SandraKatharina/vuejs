<template>
  <div class="button-box">
    <MyButton buttonText="+1" @justClicked="handleUp" />
    <MyButton buttonText="-1" @justClicked="handleDown" />
    <MyButton buttonText="+10" @justClicked="handleUpTen" />
    <MyButton buttonText="-10" @justClicked="handleDownTen" />
    <MyButton buttonText="RESET" @justClicked="handleReset" />
  </div>
</template>

<script>
import MyButton from './MyButton.vue'

export default {
  components: { MyButton },
  emits: ['oneOfTheButtonsWasClicked'],
  methods: {
    handleUp() {
      this.$emit('oneOfTheButtonsWasClicked', 1)
    },
    handleDown() {
      this.$emit('oneOfTheButtonsWasClicked', -1)
    },
    handleUpTen() {
      this.$emit('oneOfTheButtonsWasClicked', 10)
    },
    handleDownTen() {
      this.$emit('oneOfTheButtonsWasClicked', -10)
    },
    handleReset() {
      this.$emit('oneOfTheButtonsWasClicked', null)
      //   this.$emit('oneOfTheButtonsWasClicked', (this.counter = 0))
    }
  }
}
</script>

<style scoped>
.button-box {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 80px;
  margin: auto;
  background-color: white;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 3px;
  padding: 10px;
}
</style>
