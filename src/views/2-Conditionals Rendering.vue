<template>
  <div class="flex gap-4 justify-center text-left">
    <!-- v-if -->
    <div class="bg-yellow-100 p-3">
      <h2 class="header">v-if & v-else</h2>

      isShow status : {{ isShow }}
      <div v-if="isShow">
        <p class="text-purple-500">
          v-if = "isShow" =>
          <span class="text-blue-500">Show when isShow is true</span>
        </p>
      </div>
      <div v-else>
        <p class="text-purple-500">
          v-else =>
          <span class="text-blue-500"> Show when isShow is false</span>
        </p>
      </div>
      <h2 class="header">v-if & v-else-if</h2>
      type status : {{ type }}
      <div v-if="type === 'A'">
        <p class="text-purple-500">
          v-if="type === 'A'" =>
          <span class="text-blue-500"> A</span>
        </p>
      </div>
      <div v-else-if="type === 'B'">
        <p class="text-purple-500">
          v-else-if="type === 'B'" =>
          <span class="text-blue-500"> B</span>
        </p>
      </div>
      <div v-else-if="type === 'C'">
        <p class="text-purple-500">
          v-else-if="type === 'C'" =>
          <span class="text-blue-500">C</span>
        </p>
      </div>
      <div v-else>
        Not A/B/C
      </div> <br>
      <p>เป็นการกำหนดเงื่อนไขว่าอยาก render element หรือไม่</p>
      <p>Block ของ v-if v-else v-else-if ต้องติดกันงั้นไม่ทำงาน</p>
      <p>v-if has the advantage when it comes to initial(เริ่มต้น) render time</p>
    </div>
    <div class="bg-green-100 p-3">
      <h2 class="header">v-show</h2>
      ok status : {{ok}}
       <button @click="toggleBtn"  class="border-2 border-black">click</button>
      <div v-show="ok">
          <p class="text-purple-500">
          v-show="ok" =>
          <span class="text-blue-500"> OK</span>
        </p>
      </div>  <br>
      <p>Ctrl+Shift+C แล้วไปดู element นั้น</p>
      <p>จะ render ทุกอย่างออกมาก่อน แล้วใช้css (display:none, display:block)คุม</p>
      <p>ไม่สามารถใช้กับ v-else , v-else-if</p>
      <p>v-show has a performance advantage if the elements are switched on and off frequently</p>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      type: "B",
      ok:true,
    };
  },
  methods: {
      toggleBtn(){
          this.ok =! this.ok
      }
  },
};
</script>

