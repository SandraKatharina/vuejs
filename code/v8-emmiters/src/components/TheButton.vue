<template>
  <div class="button-container">
    <button @click="clickHandler">{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: false,
      default: 'BUTTON'
    }
  },
  emits: ['somebodyClicked'],
  methods: {
    clickHandler() {
      this.$emit('somebodyClicked')
    }
  }
}
</script>

<style scoped>
.button-container {
  width: 5rem;

  display: grid;
}
button {
  background-color: blanchedalmond;
  border-style: none;
  border-radius: 3px;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow:
    1px 1px 0px 0px,
    2px 2px 0px 0px,
    3px 3px 0px 0px,
    4px 4px 0px 0px,
    5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
button:hover {
  background-color: burlywood;
}
button:active {
  box-shadow: 0px 0px 0px 0px;
  top: 5px;
  left: 5px;
}
</style>
