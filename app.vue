<script lang="ts" setup>
const isShowTop = ref(false);
// const throttle = (callback: Function, wait = 1000) => {
//   let timeStamp = 0;
//   return function(...args: any[]){
//     if(Date.now() - timeStamp > wait){
//       callback.apply(this, args)
//       timeStamp = Date.now();
//     }
//   }
// }
const throttle = (fn: Function, wait: number = 300) => {
  let inThrottle: boolean,
    lastFn: ReturnType<typeof setTimeout>,
    lastTime: number;
  return function (this: any) {
    const context = this
    const args = arguments;
    if (!inThrottle) {
      fn.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(() => {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};
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
      class="fixed w-4/5 -z-10 -top-40 opacity-30"
      src="~/assets/svg/JC.svg"
      alt=""
    />
    <ToTop :isShowTop="isShowTop" />
    <!-- <NuxtWelcome /> -->
    <Header />
    <Banner />
    <About />
    <Works />
    <Footer />
  </div>
</template>
