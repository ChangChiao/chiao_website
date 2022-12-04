<script lang="ts" setup>
const menuList = [
  { title: "關於我", id: "about" },
  { title: "工作經歷", id: "experience" },
  { title: "作品集", id: "works" },
  { title: "聯絡我", id: "contact" },
];

const linkList = [
  { icon: "", link: "https://github.com/ChangChiao" },
  { icon: "", link: "https://medium.com/coding-hot-pot" },
];

const handleScroll = (id: string) => {
  const anchor = document.getElementById(id);
  anchor?.scrollIntoView();
};
</script>

<template>
  <header class="flex items-center justify-between h-20">
    <ul class="w-1/3">
      <li v-for="item in menuList" :key="item.id" @click="handleScroll(item.id)">
        {{ item.title }}
      </li>
    </ul>
    <ul class="w-1/6">
      <li v-for="item in linkList" :key="item.icon">
        <a :href="item.link" target="_blank"> </a>
      </li>
    </ul>
  </header>
</template>
