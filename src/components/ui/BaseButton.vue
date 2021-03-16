<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link  v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: '/'
    }
  }
}
</script>

<style scoped>

.nav-link {
  background-color: navy;
  border-radius: 5px;
  border: none;
  color: orange;
  text-align: left;
  font-size: 16px;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  padding: 1vh;
}
.nav-link:hover {
opacity: 1;
  }
.nav-link {
text-decoration: none;
}
.nav-link:active,
.nav-link:hover,
.nav-link.base-button-active {
  font-weight: bold;
  font-size: 22px;
  border-radius: 3px;
}

</style>
