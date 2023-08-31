<!-- <template>
  <input type="checkbox" v-model="isChecked" /> Change Counter
  <div>Counter 1: {{ counter }}</div>
  <button v-on:click="clickHandlerUp">GO UP</button>
  <button @click="clickHandlerDown">GO DOWN</button>
  <button @click="counter = 0">GO BACK</button>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      isChecked: false
    }
  },
  methods: {
    clickHandlerUp() {
      if (this.isChecked) {
        this.counter++
      } else {
        this.counter = 0
      }
    },
    clickHandlerDown() {
      if (this.isChecked) {
        this.counter -= 1
      } else {
        this.counter = 0
      }
    }
  }
}
</script> -->
<template>
  <input type="checkbox" v-model="isChecked" /> Change Counter 1
  <div>Counter 1: {{ counter1 }}</div>
  <div>Counter 2: {{ counter2 }}</div>
  <button v-on:click="clickHandlerUp">GO UP</button>
  <button @click="clickHandlerDown">GO DOWN</button>
  <button @click="(counter1 = 0), (counter2 = 0)">GO BACK</button>
</template>

<script>
export default {
  data() {
    return {
      counter1: 0,
      counter2: 0,
      isChecked: false
    }
  },
  methods: {
    clickHandlerUp() {
      if (this.isChecked) {
        this.counter1++
      } else {
        this.counter1++
        this.counter2++
      }
    },
    clickHandlerDown() {
      if (this.isChecked) {
        this.counter1--
      } else {
        this.counter1--
        this.counter2--
      }
    }
  }
}
</script>

<style scoped>
div {
  font-size: x-large;
  font-style: bold;
  color: mediumvioletred;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
button {
  background-color: palevioletred;
  border-radius: 5px;
  border-color: aquamarine;
}
</style>
