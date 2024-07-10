<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps<{
    bgColor?: string;
}>();

const baseClass = 'text-primary-gray w-[363px] rounded-xl py-[17.5px]';

const computedClass = computed(() => {
    return props.bgColor ? ` ${baseClass} bg-${props.bgColor}` : `${baseClass} bg-light-gray`;
})

</script>

<template>
    <button  :class="computedClass">
      <slot/>
    </button>
  </template>