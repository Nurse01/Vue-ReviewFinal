<template>
  <div class="hello">
    <div class="my-5">
      <h1 class="text-2xl">{{ msg }}</h1>
    </div>
  </div>
   
</template>
<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a:hover {
  color: #42b983;
}
</style>
