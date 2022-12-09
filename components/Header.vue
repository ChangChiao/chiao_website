<script lang="ts" setup>
const menuList = [
  { title: "Profile", id: "profile" },
  { title: "Experience", id: "experience" },
  { title: "Works", id: "works" },
  { title: "Contact", id: "contact" },
];

const handleScroll = (id: string) => {
  const anchor = document.getElementById(id);
  anchor?.scrollIntoView({ behavior: "smooth" });
  const checkBox = document.getElementById("menu-toggle") as HTMLInputElement;
  checkBox.checked = false;
};
</script>

<template>
  <header class="fixed z-50 flex items-center w-full h-20 lg:absolute">
    <div class="w-[90%] mx-auto hidden lg:block">
      <ul class="flex items-center justify-between w-1/3">
        <li
          class="duration-500 cursor-pointer hover:opacity-60"
          v-for="item in menuList"
          :key="item.id"
          @click="handleScroll(item.id)"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
    <div class="fixed top-0 left-0 block lg:hidden">
      <input class="hidden peer" type="checkbox" id="menu-toggle" />
      <label id="trigger" for="menu-toggle"></label>
      <label id="burger" for="menu-toggle"></label>
      <ul id="menu">
        <li
          class="hidden pt-10 pl-10 first-of-type:pt-24"
          v-for="item in menuList"
          :key="item.id"
          @click="handleScroll(item.id)"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
  </header>
</template>


<style scoped>
#trigger, #burger, #burger:before, #burger:after {
    @apply absolute
    top-[25px]
    left-[25px]
    bg-[#ccc]
    w-[30px]
    h-[5px]
    duration-200
    cursor-pointer
    z-10;
}

#trigger {
    @apply h-[25px]
    bg-black/80;
}

#burger {
    @apply
    before:content-['']
    before:top-[10px]
    before:left-0
    after:content-['']
    after:top-[20px]
    after:left-0
    peer-checked:top-[35px]
    peer-checked:rotate-180
    duration-200
    peer-checked:before:w-[20px]
    peer-checked:before:-top-[6px]
    peer-checked:before:left-[18px]
    peer-checked:before:rotate-45
    peer-checked:before:-translate-x-[5px]
    peer-checked:before:duration-200
    peer-checked:after:w-[20px]
    peer-checked:after:top-[6px]
    peer-checked:after:left-[18px]
    peer-checked:after:-rotate-45
    peer-checked:after:-translate-x-[5px]
    peer-checked:after:duration-200
}

#menu {
    @apply absolute
    w-[90px]
    h-[90px]
    bg-black/80
    left-0
    top-0
    rounded-br-full
    shadow-light
    animate-not-checked-anim
    duration-200
    peer-checked:animate-checked-anim;
}

#menu-toggle:checked + #trigger ~ #menu > li{
    display: block;
}
</style>