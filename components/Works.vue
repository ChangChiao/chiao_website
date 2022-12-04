<script lang="ts" setup>
const workList = [
  { title: "台灣公車", content: "", img: "", link: "" },
  { title: "任務看板", content: "", img: "", link: "" },
  { title: "快點簽", content: "", img: "", link: "" },
  { title: "", content: "", img: "", link: "" },
  { title: "", content: "", img: "", link: "" },
  { title: "", content: "", img: "", link: "" },
];
</script>

<template>
  <section>
    <ul>
      <li v-for="work in workList" :key="work.title">
        <img :src="work.img" alt="" />
        <h3>{{ work.title }}</h3>
        <p>{{ work.content }}</p>
      </li>
    </ul>
    <a>More</a>
  </section>
</template>
