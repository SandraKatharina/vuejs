<template>
  <button :disabled="isDisabled">SUBMIT</button>
</template>

<script>
export default {
  props: {
    isDisabled: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped></style>
