<template>
  <div class="grid-container">
<h2 class="title">Table of Contents</h2>
  </div>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue';

export default {
BaseButton,
}
</script>

<style scoped>
.grid-container {
    background: navy none repeat scroll 0 0;
    border:thick double orange;
    display: grid;
    font-size: 2rem;
    margin-bottom: 1em;
    padding: 20px;
    height: 100vh;
    
   
}

.title {
    color:orange;
    font-weight: 700;
    text-align: center;
    border:thick double orange;
}

.grid-container li, .grid-container ul, .grid-container ul li{
    list-style: outside none none !important;
}

</style>