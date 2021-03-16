<template>
  <nav class="grid-container">
    <ul>
      <li>
        <base-button link mode="nav-link" to="/home">home</base-button>
      </li>
       <li>
        <base-button link mode="nav-link" to="/css">css</base-button>
      </li>
       <li>
        <base-button link mode="nav-link" to="/vue">vue</base-button>
      </li>
       <li>
        <base-button link mode="nav-link" to="/data">data science</base-button>
      </li>
       <li>
        <base-button link mode="nav-link" to="/about">about me</base-button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
* {
  display: grid;
  background-color: navy;
  color: white;
  margin: 0;
  padding: 0;
  height: 5vh;
}
nav {
  position: fixed;
  grid-template-columns: minmax(130px, 15vw) 1fr;
  height: 100vh;
}
li {
}
</style>

