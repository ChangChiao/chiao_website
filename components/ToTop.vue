<script lang="ts" setup>
import { Ref } from 'vue';

 interface Props {
    isShowTop: boolean
}

const props = defineProps<Props>()

const scrollTop = () => {
    const target = document.getElementById("wrapper");
    target!.scrollTo({top: 0, behavior: 'smooth'});
}

</script>


<template>
    <div @click="scrollTop" v-show="props.isShowTop" class="fixed z-50 flex items-center justify-center w-16 h-16 text-2xl text-white rounded-full cursor-pointer bg-slate-700 bottom-16 right-10 hover:opacity-60">
        <Icon name="bi:arrow-up" />
    </div>
</template>