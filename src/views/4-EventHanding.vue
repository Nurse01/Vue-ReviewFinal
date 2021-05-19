<template>
  <div class="flex gap-4 justify-center text-left">
    <div>

      <button v-on:click="clickMe">(v-on:click) clickMe</button>

      <button @click="clickMe">(@click) clickMe</button>

      <ol>
        <li>Props เป็นการสื่อสารระหว่าง Parent > Child</li>
        
        <li>Events เป็นการสื่อสารระหว่าง Child > Parent</li>
      </ol>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    clickMe() {
      alert("Hi");
    },
  },
};
</script>
