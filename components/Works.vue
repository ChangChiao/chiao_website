<script lang="ts" setup>
const workList = [
  {
    title: "機智公車族",
    content: "以行動裝置的設計為優先，串接TDX運輸資料流通服務，讓使用者可以查詢公車班次及路線資訊",
    skill: "vue2、vuex、tailwindcss、leaflet",
    img: "bus",
    link: "https://changchiao.github.io/bus_timetable/#/",
  },
  {
    title: "快點簽",
    content: "使用者可以上傳pdf檔案，線上簽署並且下載檔案",
    skill: "react、chakra-ui、fabric、jspdf",
    img: "pdf",
    link: "https://f2e-2022-sign.vercel.app/",
  },
  {
    title: "任務看板",
    content: "零感來自ptt part-time job版，上面會很多臨時的打工需求，種類千奇百怪，使用者可以在這個看板上面刊登任務，也可以認領任務",
    skill: "前端：next、recoil、socket-io、tailwindcss，後端: express、mongoDB、socket-io、passport",
    img: "task",
    link: "https://task-board-theta.vercel.app/",
  },
  {
    title: "台灣走走·Tai Walk",
    content: "提供使用者查詢台灣地區的景點、餐廳、活動",
    skill: "React、Reduxjs/toolki、styled-component",
    img: "spot",
    link: "https://changchiao.github.io/react_attractions/#/",
  },
  {
    title: "CD播放器",
    content: "有別於以往傳統的音樂播放器，採用較為活潑的黑膠唱片機設計稿來實作音樂播放",
    skill: "vue、howler js、canvas",
    img: "cd",
    link: "https://changchiao.github.io/music_player/#/",
  },
  {
    title: "視差滾動",
    content: "使用視差滾動技巧製作第四屆f2e活動官網 ",
    skill: "vue3、vite、tailwindcss、gsap",
    img: "scroll",
    link: "https://f2-e-2022.vercel.app/",
  },
];

const genURL = (name: string) => (new URL(`../assets/images/works/${name}.png`, import.meta.url).href)
</script>

<template>
  <section id="works">
    <h2 class="title">works</h2>
    <ul class="grid grid-cols-3 gap-6">
      <li v-for="work in workList" :key="work.title" class="mb-10 duration-300 cursor-pointer hover:translate-x-1 hover:translate-y-1">
        <a :href="work.link" target="_blank">
            <img :src="genURL(work.img)" alt="" />
            <h3 class="pt-4 pb-2 text-xl">{{ work.title }}</h3>
            <p>{{ work.content }}</p>
            <p class=" text-slate-400">使用技術：{{ work.skill}}</p>
        </a>
      </li>
    </ul>
  </section>
</template>
