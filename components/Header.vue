<script lang="ts" setup>
const menuList = [
  { title: "Profile", id: "profile" },
  { title: "Experience", id: "experience" },
  { title: "Works", id: "works" },
  { title: "Contact", id: "contact" },
];



const handleScroll = (id: string) => {
  const anchor = document.getElementById(id);
  anchor?.scrollIntoView();
};
</script>

<template>
  <header class="fixed z-50 flex items-center w-full h-20">
    <div class="w-[90%] mx-auto">
        <ul class="flex items-center justify-between w-1/3 ">
          <li class="duration-500 cursor-pointer hover:opacity-60" v-for="item in menuList" :key="item.id" @click="handleScroll(item.id)">
            {{ item.title }}
          </li>
        </ul>
    </div>
  </header>
</template>
