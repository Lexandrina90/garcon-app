<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

import {TEXT} from '../constants/call-page-text.ts';
import CustomInput from './UI/CustomInput.vue';
import CustomButton from './UI/CustomButton.vue';
import router from '@/router';
import CustomTabBar from './UI/CustomTabBar.vue';

const name = ref('');
const phone = ref('+7(...)...-..-..');
const location = ref('Piazetta');
const comment = ref('');

const handleFocus = () => {
    phone.value = "+7";
}

const callWaiter = async() => {
    const data = {
        name: name.value,
        phone: phone.value,
        location: location.value,
        comment: comment.value
    }

    try {
        await axios.post('https://webhook.site/994c8d78-82a5-4981-bc1a-3f00cfea293f', data);
        router.push('/');
    } catch (error) {
        console.error('Error Message:', error)
    }
}

</script>

<template>
    <div class="min-h-screen flex flex-col items-center justify-start pt-[15px]">
        <header class="py-6">
            <h1 class="text-[32px] uppercase tracking-widest leading-10">{{ TEXT.CALL_WAITER }}</h1>
        </header>
        <form @submit.prevent="callWaiter" class="w-full flex flex-col items-start gap-3 max-w-sm">
            <CustomInput 
                id="name"
                :label=TEXT.NAME
                v-model="name"
                required
            />
            <CustomInput 
                id="phone"
                :label=TEXT.PHONE
                type="tel"
                v-model="phone"
                required
                @focus="handleFocus"
            />
            <CustomInput 
                id="location"
                :label=TEXT.LOCATION
                v-model="location"
                required
            />
            <div class="flex flex-col items-start w-full gap-2">
                <label :for="comment" class="opacity-60">
                    {{ TEXT.COMMENT}}
                </label>
                <textarea
                    id="comment"
                    :label=TEXT.COMMENT
                    v-model="comment"
                    :placeholder=TEXT.ENTER_TEXT
                    class="outline-none text-lg bg-primary-gray border-b w-full border-primary-white border-opacity-20 pb-3"
                />
            </div>
            <CustomButton 
                type="submit"
                class="mt-2"
                bg-color="beige" 
            >
                {{ TEXT.CALL }}
            </CustomButton>
        </form>
        <CustomTabBar class="mt-auto"/>
    </div>
</template>