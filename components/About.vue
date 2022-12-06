<script lang="ts" setup></script>

<template>
  <section id="profile" class="pt-10">
    <h2 class="title">About me</h2>

    <div class="flex justify-between">
      <div class="w-1/3 leading-8 text-slate-300">
        <p>
            我是Joe，2016年中壢資策會結訓後，踏上了前端工程師之旅，目前已經累積四年以上的前端開發經驗，面對推陳出新的前端技術與框架，除了保持學習的熱忱，也會利用下班和假日時間持續進修，
            會把在工作上遇到的一些問題以及踩雷的過程寫成筆記，堅信每個被解決的bug都是壯大自己的養分，樂於和團隊分享發掘到的新知識點或是工具，期許自己能夠在前端趨勢中，不斷成長。
        </p>
        <ul class="pt-10">
          <li><Icon name="ic:baseline-school" /> 輔仁大學</li>
          <li><Icon name="ic:round-location-on" /> Taipei, Taiwan</li>
          <li class="flex pt-10">
            <img class="mr-4" src="~/assets/images/self.png" alt="" />
            <img src="~/assets/images/self_2.png" alt="" />
          </li>
        </ul>
      </div>
      <ul class="w-1/3 text-slate-300">
        <li class="pb-4">
          <h3 class="sub-title">前端框架</h3>
          Vue2 (vuex)、 Vue3(pinia)、 React、 Redux
        </li>
        <li class="pb-4">
          <h3 class="sub-title">前端開發</h3>
          JavaScript、 typeScript、jQuery
        </li>
        <li class="pb-4">
          <h3 class="sub-title">樣式處理</h3>
          SASS(SCSS)、Tailwind css、Bootstrap
        </li>
        <li class="pb-4">
          <h3 class="sub-title">後端開發</h3>
          Node.js、Express、MongoDB
        </li>
        <li class="pb-4">
          <h3 class="sub-title">打包工具</h3>
          webpack、gulp、vite
        </li>
        <li class="pb-4">
          <h3 class="sub-title">其他</h3>
          git、svn
        </li>
      </ul>
    </div>
  </section>
</template>
