<template>
  <div class="card">
    <img :src="amazingPerson.image" alt="Goofy head in black and white" />
    <div class="text-column">
      <h2>{{ amazingPerson.name }}</h2>
      <h3>{{ amazingPerson.role }}</h3>
      <p class="paragraph">
        {{ amazingPerson.intro }}
      </p>
      <ReadMoreLink />
    </div>
  </div>
</template>

<script>
import ReadMoreLink from './ReadMoreLink.vue'
export default {
  props: {
    amazingPerson: Object
  },

  components: {
    ReadMoreLink
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

h2 {
  margin: 0;
  font-size: 1.4rem;
}
h3 {
  margin: 0;
  font-size: 1rem;
}
p {
  line-clamp: 2;
  font-size: 12px;
}
.card {
  --shadowColor: 187 60% 40%;
  max-width: 550px;
  max-height: 200px;
  display: flex;
  background: hsl(187 70% 85%);
  box-shadow: 0.65rem 0.65rem 0 hsl(var(--shadowColor) / 1);
  border-radius: 0.8rem;
  overflow: hidden;
  border: 0.5rem solid;
}

.card img {
  aspect-ratio: 3 / 2;
  height: 200px;
  width: 200px;
  object-fit: cover;
  outline: 0.5rem solid;
}

.text-column {
  padding: min(0.5rem, 2vw) min(0.5rem, 2vw) min(0.5rem, 2vw) min(1rem, 2vw);
  flex: 1 0 50%;
}
</style>
