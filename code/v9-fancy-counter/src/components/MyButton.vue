<template>
  <div>
    <button @click="clickHandler">{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: false,
      default: 'Button'
    }
  },
  emits: ['justClicked'],
  methods: {
    clickHandler() {
      this.$emit('justClicked')
    }
  }
}
</script>

<style scoped>
button {
  min-width: 40px;
  height: 40px;
  border-style: none;
  border-radius: 2px;
  background-color: darkseagreen;
  color: darkslateblue;
  box-shadow:
    rgba(72, 61, 139, 0.4) 2px 2px,
    rgba(72, 61, 139, 0.3) 4px 4px,
    rgba(72, 61, 139, 0.2) 6px 6px,
    rgba(72, 61, 139, 0.1) 8px 8px,
    rgba(72, 61, 139, 0.05) 10px 10px;
}
button:hover {
  background-color: darksalmon;
}
button:active {
  box-shadow:
    rgba(72, 61, 139, 0.4) 0 0 2px 2px,
    rgba(72, 61, 139, 0.3) 0 0 4px 4px,
    rgba(72, 61, 139, 0.2) 0 0 6px 6px,
    rgba(72, 61, 139, 0.1) 0 0 8px 8px,
    rgba(72, 61, 139, 0.05) 0 0 10px 10px;
}
</style>
