<script setup lang="ts">
import { useRouter } from 'vue-router';

import {TEXT} from '../constants/main-page-text';
import CustomButton from './UI/CustomButton.vue';
import CustomTabBar from './UI/CustomTabBar.vue';

const router = useRouter();

const callWaiter = () => {
    router.push('/call-waiter');
};

</script>

<template>
    <div class="min-h-screen flex flex-col items-center justify-between pt-[15px]">
        <header class="flex flex-col gap-5 py-6">
            <h1 class="text-[32px] uppercase tracking-widest leading-10">{{ TEXT.SERVICE }}</h1>
            <CustomButton 
                class="text-lg leading-6"
                @click="callWaiter"
            >
                {{ TEXT.CALL_WAITER }}
            </CustomButton>
        </header>
        <CustomTabBar />
    </div>
</template>