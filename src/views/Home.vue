<template>
  <div class="p-5 ">
    <div class="grid grid-cols-3 gap-x-8 gap-y-8">
      <div class=" p-6 border-4 hover:bg-gray-200 ">
        <router-link to="/topic1"> 1-Class and Style binding </router-link>
      </div>
      <div class=" p-6 border-4 hover:bg-gray-200 ">
        <router-link to="/topic2"> 2-Conditional Rendering</router-link>
      </div>
      <div class=" p-6 border-4 hover:bg-gray-200 ">
        <router-link to="topic3">3-List Rendering</router-link>
      </div>
      <div class=" p-6 border-4 hover:bg-gray-200 ">
        <router-link to="/topic4">4-Event Handling</router-link>
      </div>
      <div class=" p-6 border-4 hover:bg-gray-200 ">
        <router-link to="/topic5"> 5-Form Input Binding</router-link>
      </div>
      <div class=" p-6 border-4 hover:bg-gray-200 ">
        <router-link to="/topic6">6-Vue Multiple Components</router-link>
      </div>
      <div class=" p-6 border-4 hover:bg-gray-200 ">
        <router-link to="/topic7">7-Vue CLI</router-link>
      </div>
      <div class=" p-6 border-4 hover:bg-gray-200 ">
        <router-link to="/topic8">8-Vue Router</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
