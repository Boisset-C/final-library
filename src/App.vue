<template>
<body>
  <div class="sidebar"> 
    <the-sidebar></the-sidebar>
  </div>
    <div class="content">
  <router-view></router-view>
    </div>
</body>
</template>

<script>
import TheSidebar from './components/Layout/TheSidebar.vue';

export default {
  components: {
    TheSidebar,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
  display: grid;
  grid-template-columns: 1fr auto;

  grid-template-areas: 
  "sidebar content"
  "sidebar content"
  "sidebar content"
  "sidebar content"
  "sidebar content"
  "sidebar content"
}
.sidebar {
 display: grid;
 grid-area: sidebar;
 
}
.content {
  grid-area: content;
  width: 80vw;
}
</style>