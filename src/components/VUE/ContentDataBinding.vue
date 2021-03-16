<template>
 <section>
      <h2>Data Binding</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue volutpat mauris nec vestibulum. Quisque pretium, metus sit amet pulvinar lacinia, risus leo. 
      </p>
     <pre> 
          <code>recursiveFunction(num) {
            return recursiveFunction(num) - 1;
          if (num  0 ) {
            return "hello";
          }
          }
          </code>
     </pre>
  </section>
</template>

<script>
export default {
  
}
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  grid-template-columns: 1fr;
  margin: 2vw 0vw 0vw 8vw;

  background-color: white;
}
h2 {
  display: inline-flex;
  font-size: 2rem;
  height: 2rem;
}
.code { 
  display: flex;
  flex-direction: column;
  font-family: 'Courier New', Courier, monospace;
  height: 20vh;

}
pre {
  width: 35rem;
  border-radius: 5px;
  color: white;

  background-color: black;
}

</style>