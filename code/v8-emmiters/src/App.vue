<template>
  <div class="display">
    <div class="counter">
      <h1>{{ counter }}</h1>
    </div>

    <TheButton buttonText="UP" @somebodyClicked="handleItUp" />
    <TheButton buttonText="DOWN" @somebodyClicked="handleItDown" />
    <TheButton buttonText="RESET" @somebodyClicked="handleItReset" />
  </div>
</template>

<script>
import TheButton from './components/TheButton.vue'

export default {
  components: {
    TheButton
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    handleItUp() {
      this.counter += 1
    },
    handleItDown() {
      this.counter -= 1
    },
    handleItReset() {
      this.counter = 0
    }
  }
}
</script>

<style scoped>
.display {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.counter {
  min-width: 5rem;
  text-align: center;
  background-color: blanchedalmond;
  border-radius: 3px;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  border: 3px solid;

  box-shadow:
    1px 1px 0px 0px,
    2px 2px 0px 0px,
    3px 3px 0px 0px,
    4px 4px 0px 0px,
    5px 5px 0px 0px;
}
</style>
