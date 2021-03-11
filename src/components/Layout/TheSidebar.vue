<template>
    <nav class="grid-container">
    <ul>
      <li class="nav-link">
        <router-link to="/home">home</router-link>
      </li>
       <li class="nav-link">
        <router-link to="/css">css</router-link>
      </li>
       <li class="nav-link">
        <router-link to="/vue">vue</router-link>
      </li>
       <li class="nav-link">
        <router-link to="/algorithms">algorithms</router-link>
      </li>
       <li class="nav-link">
        <router-link to="/about">about me</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
* {
  display: grid;
  background-color: navy;
  color: white;
}
nav {
  position: fixed;
  grid-template-columns: minmax(100px, 15vw) 1fr;
}
ul {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-top: 0;
  height: 100vh;
}
.nav-link {
  display: flex;
  list-style: none;
  justify-content: left;
  padding: 1rem 1rem 1rem 2rem; 
}
a {
text-decoration: none;
}
a:active,
a:hover,
a.router-link-active {
 
  font-weight: bold;
  border: 2px solid gold;
  border-radius: 3px;
}

</style>

