<script lang="ts" setup></script>

<template>
  <section class="relative flex items-center justify-center">
    <div class="w-1/3">
      <h1 class="text-4xl">My name is <br /> <span class="text-6xl font-bold"> Joe Chang</span></h1>
      <p class="py-4 text-2xl">I'm a front-end engineer</p>
      <div class="p-2 text-center bg-yellow-600 w-60 rounded-3xl">
        5+ years experience
      </div>
    </div>
    <div class="relative flex flex-col h-[calc(100vh-128px)] justify-end w-1/2 max-w-[1000px]">
      <img src="~/assets/images/joe.png" alt="" />
    </div>
    <div class="flex flex-col w-1/3">
        <div class="bg-teal-800 hash-tag">Vue <span class="hash-tag-year">/ 4 years</span></div>
        <div class="hash-tag bg-cyan-800">React <span class="hash-tag-year">/ 1 years</span> </div>
        <div class="hash-tag bg-sky-800">Node.js <span class="hash-tag-year">/ 0.5 years</span></div>
    </div>
  </section>
</template>
