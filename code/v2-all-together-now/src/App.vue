<template>
  <h1>HELLO, YOU ARE IN VUE</h1>
  <FruitsList />
  <OnOffButtons />
  <RadioStations />
</template>

<script>
import OnOffButtons from "./components/OnOffButtons.vue";
import FruitsList from "./components/FruitsList.vue";
import RadioStations from "./components/RadioStations.vue";
export default {
  components: { OnOffButtons, FruitsList, RadioStations },
};
</script>
<style></style>
