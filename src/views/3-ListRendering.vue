<template>
  <div class="flex gap-4 justify-center text-left">
    <div class="bg-purple-100 p-3">
      <h2 class="header">v-for</h2>
      <p class="text-purple-500">
        v-for="item in colors" :key="item.name" <br />
        { {item.name} } | { {item.rating} }
      </p>
      <ul v-for="item in colors" :key="item.name" class="text-blue-500 my-5">
        <li>
          {{ item.name }} | <span class="text-gray-500">{{ item.rating }}</span>
        </li>
      </ul>
      <p class="text-purple-500">
        v-for="(value, name, index) in object" :key="index"<br />
        { { index } }. { { name } }: { { value } }
      </p>
      <div v-for="(value, name, index) in object" :key="index">
       <span class="text-blue-500">{{ index }}. {{ name }}: {{ value }} </span> 
      </div>

      <p>ใช้กับ item ที่เป็น array</p>
      <p>
        syntax : item(แทน array แต่ละช่อง และสามารถมี 2 ตัวได้เช่น(item,index))
        in colors(ชื่อของ array)
      </p>
      <p>เวลาเรียกก็เรียกตามชื่อที่ตั้งไว้ใน array</p>
      <p>key ก็เอาอันที่ข้อมูลข้างในไม่ซ้ำแน่ๆมาใส่ ex. id</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      colors: [
        { name: "purple", rating: 5 },
        { name: "pink", rating: 4 },
        { name: "grey", rating: 3 },
        { name: "blue", rating: 2 },
      ],
      object: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10",
      },
    };
  },
};
</script>
