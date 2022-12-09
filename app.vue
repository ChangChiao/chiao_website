<script lang="ts" setup>
const isShowTop = ref(false);
const throttle = (fun: Function, delay = 0) => {
  let timeStamp = 0;
  return function (this: Function, ...args: unknown[]) {
    const now = Date.now();
    if (now - timeStamp < delay) return;

    fun.apply(this, args);
    timeStamp = now;
  }
}
onMounted(()=>{
  const target = document.getElementById("wrapper");
  target!.addEventListener('scroll', throttle(() => {
    isShowTop.value = target!.scrollTop > window!.innerHeight;
  }))
})
</script>

<template>
  <div id="wrapper" class="relative w-full h-screen overflow-x-hidden">
    <img
      class="fixed w-4/5 -z-10 top-20 lg:-top-40 opacity-30"
      src="~/assets/svg/JC.svg"
      alt=""
    />
    <ToTop :isShowTop="isShowTop" />
    <!-- <NuxtWelcome /> -->
    <Header />
    <Banner />
    <About />
    <Experience />
    <Works />
    <Footer />
  </div>
</template>
