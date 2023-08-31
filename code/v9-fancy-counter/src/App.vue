<template>
  <div>
    <DisplayCounter :showsValue="counter" />
    <ButtonBox @oneOfTheButtonsWasClicked="handleIt" />
  </div>
</template>

<script>
import ButtonBox from './components/ButtonBox.vue'
import DisplayCounter from './components/DisplayCounter.vue'

export default {
  components: {
    ButtonBox,
    DisplayCounter
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    // handleIt(value) {
    //   this.counter += value
    // }
    handleIt(value) {
      if (value) {
        this.counter += value
      } else {
        this.counter = 0
      }
    }
  }
}
</script>

<style scoped></style>
