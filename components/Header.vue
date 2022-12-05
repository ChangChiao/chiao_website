<script lang="ts" setup>
const menuList = [
  { title: "關於我", id: "about" },
  { title: "工作經歷", id: "experience" },
  { title: "作品集", id: "works" },
  { title: "聯絡我", id: "contact" },
];

const linkList = [
  { icon: "bi:github", link: "https://github.com/ChangChiao" },
  { icon: "bi:medium", link: "https://medium.com/coding-hot-pot" },
];

const handleScroll = (id: string) => {
  const anchor = document.getElementById(id);
  anchor?.scrollIntoView();
};
</script>

<template>
  <header class="flex items-center justify-end h-20 px-10">
    <ul class="flex items-center justify-between w-1/3 ">
      <li class="cursor-pointer" v-for="item in menuList" :key="item.id" @click="handleScroll(item.id)">
        {{ item.title }}
      </li>
    </ul>
    <ul class="flex items-center w-1/6 pl-10 ml-10 border-l border-gray-500">
      <li class="cursor-pointer" v-for="item in linkList" :key="item.icon">
        <a class="text-2xl" :href="item.link" target="_blank"> 
            <Icon class="mr-4" :name="item.icon" />
        </a>
      </li>
    </ul>
  </header>
</template>
