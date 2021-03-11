<template>
  <h2>Learning Vue</h2>
  <content-data-binding></content-data-binding>
</template>

<script>
import ContentDataBinding from '../../components/VUE/ContentDataBinding.vue';

export default {
  components: {
    ContentDataBinding,
  },
}
</script>

<style scoped>
h2 {
  justify-content: center;
  font-size: 1rem;
}
p {
  text-align: left;
}
.content {
 grid-area: content;
}
</style>