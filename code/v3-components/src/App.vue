<template>
  <HeaderBar />
  <ContentSpace />
  <FooterBar />
</template>
<script>
import HeaderBar from "./components/HeaderBar.vue";
import ContentSpace from "./components/ContentSpace.vue";
import FooterBar from "./components/FooterBar.vue";

export default {
  components: { HeaderBar, ContentSpace, FooterBar },
};
</script>
