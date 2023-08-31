<template>
  <div class="movie-card">
    <div>episode</div>
    <div class="episode-number">{{ result }}</div>
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
    }
  },
  intToRoman(num) {
    num = this.movieObject.episode_id

    const romanNumerals = {
      10: 'X',
      9: 'IX',
      5: 'V',
      4: 'IV',
      1: 'I'
    }

    let result = ''

    for (let value in romanNumerals) {
      while (num >= value) {
        result += romanNumerals[value]
        num -= value
      }
    }
    return result
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
