<script setup lang="ts">
import { useRoute } from 'vue-router';
import HomeIcon from '../Icons/HomeIcon.vue';
import OrderIcon from '../Icons/OrderIcon.vue';
import {TEXT} from '@/constants/main-page-text';

const route = useRoute();

</script>

<template>
    <nav class="pt-[15px] relative w-full after:content-[''] after:absolute after:top-0 after:bg-beige after:w-[calc(100%+30px)] after:-left-3.5 after:h-[1px] after:bg-opacity-20 after:pr-[15px]">
        <ul class="flex justify-around">
            <li class="cursor-pointer">
                <router-link 
                    to="/" 
                    :class="['flex flex-col justify-center items-center', {'active': route.path === '/'}]"
                >
                    <HomeIcon class="text-beige"/>
                    <span class="text-beige">{{ TEXT.MAIN }}</span>
                </router-link>
            </li>
            <li class="cursor-pointer">
                <router-link 
                    to="/"  
                    class="flex flex-col justify-center items-center"
                >
                    <OrderIcon class="text-primary-white"/>
                    <span class="text-nowrap text-primary-white">{{ TEXT.MY_ORDER }}</span>
                </router-link>
            </li>
        </ul>
    </nav>   
</template>