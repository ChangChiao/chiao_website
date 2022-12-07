<script lang="ts" setup>
import { Ref } from 'vue';

 interface Props {
    isShowTop: boolean
}

const props = defineProps<Props>()

</script>


<template>
    <div v-show="props.isShowTop" class="fixed flex items-center justify-center w-16 h-16 text-2xl text-white rounded-full cursor-pointer bg-slate-700 bottom-16 right-10 hover:opacity-60">
        <Icon name="bi:arrow-up" />
    </div>
</template>