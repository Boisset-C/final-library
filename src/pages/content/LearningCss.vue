<template>
  <h2>Learning CSS</h2>
    <article>
      <content-grid></content-grid>
    </article>
    <article>
      <content-grid></content-grid>
    </article>
    <article>
      <content-grid></content-grid>
    </article>
</template>

<script>
import ContentGrid from '../../components/CSS/ContentGrid.vue';

export default {
components: {
  ContentGrid,
}
}
</script>


<style scoped>
h2 {
  color: gray;
  margin: 2vw 0vw 0vw 8vw;
  font-size: 1rem;
}
p {
  text-align: left;
}
article {
 grid-area: content;
}
</style>