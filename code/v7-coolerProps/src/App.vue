<template>
  <div>
    <input class="input-box" type="text" @input="inputHandler" />

    <DisplayBox :displayText="inputValue" />
  </div>
</template>
<script>
import DisplayBox from './components/DisplayBox.vue'

export default {
  components: {
    DisplayBox
  },
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    inputHandler(event) {
      this.inputValue = event.target.value
    }
  }
}
</script>
<style scoped>
.input-box {
  width: 195px;
  min-height: 50px;
  box-shadow:
    rgba(240, 46, 170, 0.4) 0px 2px,
    rgba(240, 46, 170, 0.3) 0px 4px,
    rgba(240, 46, 170, 0.2) 0px 6px,
    rgba(240, 46, 170, 0.1) 0px 8px,
    rgba(240, 46, 170, 0.05) 0px 10px,
    rgba(108, 2, 69, 0.35) 0px -2px 6px 0px inset;
  background-color: wheat;
  margin: 20px 20px 0;
  color: white;
  border-radius: 5px;
  border: none;
  padding: 0 10px 0 10px;
}
input:focus {
  outline: none;
  box-shadow:
    rgba(240, 46, 170, 0.4) 2px 2px,
    rgba(240, 46, 170, 0.3) 4px 4px,
    rgba(240, 46, 170, 0.2) 6px 6px,
    rgba(240, 46, 170, 0.1) 8px 8px,
    rgba(240, 46, 170, 0.05) 10px 10px;
}
</style>
