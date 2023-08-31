<template>
  <div class="movie-card">
    <div>episode</div>
    <div class="episode-number">{{ intToRoman(movieObject.episode_id) }}</div>
    <div>{{ movieObject.title }}</div>
    <button @click="clickSelectHandler">SELECT</button>
  </div>
</template>

<script>
export default {
  props: {
    movieObject: {
      typ: Object,
      required: true
    }
  },
  emits: ['movieSelect'],
  methods: {
    clickSelectHandler() {
      this.$emit('movieSelect', this.movieObject)
    },
    intToRoman(num) {
      const romanNumerals = [
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
      ]

      let result = ''

      for (const numeral of romanNumerals) {
        while (num >= numeral.value) {
          result += numeral.numeral
          num -= numeral.value
        }
      }

      return result
    }
  }
}
</script>

<style scoped>
.movie-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  min-height: 50px;
  background-color: white;
  border-radius: 2px;
  padding: 2px;
  margin: 5px;
}
.episode-number {
  font-weight: bold;
  font-size: 40px;
  color: khaki;
}
button {
  margin: 5px;
}
</style>
