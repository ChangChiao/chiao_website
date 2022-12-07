<script lang="ts" setup>
const expList = [
  {
    position: "前端工程師",
    company: "前思資訊",
    icon: "chance.jpg",
    year: "2018/4 ~ 2022/12",
    description: [
      {
        title: "重構舊有的平台",
        content:
          "網站原採用jQuery開發，改用vue重構，使用vuex管理數據，並且利用scss來撰寫RWD以及控管多個網頁模板樣式，降低維護成本。 ",
      },
      {
        title: "開發平台管理後台",
        content:
          "串接RESTful API，實作活動公告圖片上傳功能，報表資料分段載入避免影響網頁渲染速度，使用Chart.js繪製圖表。",
      },
      {
        title: "開發聊天室",
        content:
          "與後端工程師討論api規格，使用者可以發送文字訊息、圖片、emoji等等，採用polling的方式實作，管理員可刪除訊息，將成員黑名單或是移出群組。",
      },
      {
        title: "開發網頁遊戲",
        content:
          "使用egret遊戲引擎搭配typescript開發2d遊戲，搭配Object Pool提升網頁效能。",
      },
      {
        title: "擔任助理工程師的mentor",
        content:
          "領導助理工程師實作專案，釐清開發需求或是討論可行性，協助解決在開發上遇到的問題。",
      },
      {
        title: "製作公司官網",
        content:
          "實作多語系功能，並且依照UIUX提供的動態表現，討論實作可能性後，實作多個網頁動畫效果。",
      },
      {
        title: "開發活動網頁",
        content:
          "利用jQuery開發節日活動網頁(端午節、中秋節等等)並且結合小遊戲讓使用者抽獎。",
      },
    ],
  },
  {
    position: "前端工程師",
    company: "博發科技",
    icon: "gameFortune.png",
    year: "2017/4 ~ 2018/4",
    description: [
      {
        title: "製作公司形象官網",
        content:
          "使用Angular 1開發，利用Angular本身提供i18n方法撰寫多語系功能，並且串接後台活動api。",
      },
      {
        title: "客製化新模板",
        content:
          "根據客戶提出的需求客製化網站，切版並且寫出動畫效果，使用jQuery開發。",
      },
    ],
  },
];

const genURL = (name: string) =>
  new URL(`../assets/images/company/${name}`, import.meta.url).href;
</script>

<template>
  <section id="experience">
    <h2 class="title">Experience</h2>
    <div class="flex justify-between">
      <div v-for="(item, i) in expList" class="w-2/5" :key="i">
        <div class="flex">
          <div class="w-[140px] h-[140px] overflow-hidden">
            <img :src="genURL(item.icon)" alt="" />
          </div>
          <div class="pl-4">
            <h3 class="text-xl font-bold">{{ item.position }}</h3>
            <h4 class="text-yellow-500 ">{{ item.company }}</h4>
            <h5 class=" text-slate-400">{{ item.year }}</h5>
          </div>
        </div>
        <ul class="pt-4">
          <li v-for="(desc, j) in item.description" class="pb-4" :key="`desc_${j}`">
            <h5 class="pb-2 text-lg">{{ desc.title }}</h5>
            <p class=" text-slate-400">{{ desc.content }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
