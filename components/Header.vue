<script lang="ts" setup>
const menuList = [
  { title: "Profile", id: "profile" },
  { title: "Skills", id: "skills" },
  { title: "Experience", id: "experience" },
  { title: "Works", id: "works" },
  { title: "Contact", id: "contact" },
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
      <li class="duration-500 cursor-pointer hover:opacity-60" v-for="item in menuList" :key="item.id" @click="handleScroll(item.id)">
        {{ item.title }}
      </li>
    </ul>
    <ul class="flex items-center w-1/6 pl-10 ml-10 border-l border-gray-500">
      <li class="duration-500 cursor-pointer hover:opacity-60" v-for="item in linkList" :key="item.icon">
        <a class="text-2xl" :href="item.link" target="_blank"> 
            <Icon class="mr-4" :name="item.icon" />
        </a>
      </li>
    </ul>
  </header>
</template>
