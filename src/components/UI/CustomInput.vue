<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    id: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    modelValue: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'text'
    },
    required: {
        type: Boolean,
        default: false
    }
});

const emits = defineEmits(['update:modelValue', 'focus']);

const updateValue = (event: Event) => {
  emits('update:modelValue', (event.target as HTMLInputElement).value);
};

const handleFocus = () => {
  emits('focus');
};
</script>

<template>
    <div class="flex flex-col items-start w-full gap-2">
        <label :for="props.id" class="opacity-60">
            {{ props.label }}
        </label>
        <input
            :id="props.id"
            :value="props.modelValue"
            :type="props.type"
            class="outline-none text-lg bg-primary-gray border-b w-full border-primary-white border-opacity-20 pb-3"
            :required="props.required"
            @input="updateValue"
            @focus="handleFocus"
        />
    </div>
</template>