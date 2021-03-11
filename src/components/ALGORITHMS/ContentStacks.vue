<template>
 <section>
      <h2>Stacks</h2>
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
  display: grid;
  background-color: white;
  margin: 1rem 1rem 1rem 1rem;
}
h2 {
  display: flex;
  justify-self: left;
  font-size: 2rem;
}
p {
  
}
.code {
  display: flex;
  justify-self: flex-start;
  font-family: 'Courier New', Courier, monospace;
}
pre {
  width: 25rem;
  border-radius: 5px;
  color: white;

  background-color: black;
}

</style>