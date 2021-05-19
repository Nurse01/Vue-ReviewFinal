<template>
  <div id="app" class="m-10 ">
    <HelloWorld msg="INT203 Final" />
  </div>
  <router-view />
</template>
<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.header {
  text-align: center;
  font-weight: 700;
}
</style>
