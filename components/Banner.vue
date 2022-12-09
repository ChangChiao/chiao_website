<script lang="ts" setup>
const linkList = [
  { icon: "bi:github", link: "https://github.com/ChangChiao" },
  { icon: "bi:medium", link: "https://medium.com/coding-hot-pot" },
];
</script>

<template>
  <section class="relative flex flex-col-reverse items-center justify-between lg:flex-row">
    <div class="relative w-full top-1/2 lg:w-1/2">
      <h1 class="text-4xl">
        My name is <br />
        <span class="text-6xl font-bold"> Joe Chang</span>
      </h1>
      <p class="py-4 text-2xl">I'm a front-end engineer</p>
      <div class="p-2 text-center bg-yellow-600 w-60 rounded-3xl">
        {{ new Date().getFullYear() - 2018 }}+ years experience
      </div>
      <ul class="flex items-center justify-between w-24 pt-10">
        <li
          class="duration-500 cursor-pointer hover:opacity-60"
          v-for="item in linkList"
          :key="item.icon"
        >
          <a class="flex items-center text-2xl" :href="item.link" target="_blank">
            <Icon class="mr-4" :name="item.icon" />
          </a>
        </li>
      </ul>
      <div class="flex flex-col w-1/3 pt-20">
        <div class="bg-teal-800 hash-tag">
          Vue <span class="hash-tag-year">/ 4 years</span>
        </div>
        <div class="hash-tag bg-cyan-800">
          React <span class="hash-tag-year">/ 1 years</span>
        </div>
        <div class="hash-tag bg-sky-800">
          Node.js <span class="hash-tag-year">/ 0.5 years</span>
        </div>
      </div>
    </div>
    <div
      class="max-w-[1000px] w-full lg:w-1/2 flex flex-col lg:h-screen -top-10 relative -right-10 lg:-right-60"
    >
      <img src="~/assets/images/joe.png" alt="" />
    </div>
  </section>
</template>
