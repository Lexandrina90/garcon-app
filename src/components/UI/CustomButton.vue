<script setup lang="ts">
const baseClass = `text-primary-gray w-[363px] rounded-xl py-[17.5px] bg-light-gray`;
</script>

<template>
    <button  :class="baseClass">
      <slot/>
    </button>
  </template>