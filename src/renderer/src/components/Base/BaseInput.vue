<template>
  <div :class="$style['input-wrapper']">
    <input
      :class="className"
      :name="title"
      :value="modelValue"
      @input="(event) => $emit('update:modelValue', event.target.value)"
    />
    <label :for="title">{{title}}</label>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, useCssModule, computed } from 'vue';
const emit = defineEmits(['click']);
const $style = useCssModule();

interface Props {
  size?: 'sm' | 'md' | 'lg',
  modelValue: string,
  title: string,
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  modelValue: '',
  title: '',
});

const className = computed(() => ({
  [$style.filled]: props.modelValue !== '',
}));
</script>

<style module>
:root {
  --padding: 0.8em;
}

.input-wrapper {
  position: relative;
  height: 70px;

  input {
    width: 100%;
    box-sizing: border-box;
    color: var(--color-white);
    padding: var(--padding);
    outline: none;
    border-radius: 10px;
    transition: all 0.5s;
    border: 2px solid transparent;
    background-color: var(--color-dark-gray);
  }

  input:hover,
  input:focus,
  input.filled {
    border: 2px solid var(--color-blue);
    background-color: var(--color-dark-gray);
  }

  label {
    position: absolute;
    left: 0;
    top: 0;
    margin-left: 0.5em;
    pointer-events: none;
    transition: all 0.3s ease;
    color: var(--color-gray);
    padding: calc(var(--padding) - 4px);
    font-size: 100%;
  }

  input:focus ~ label, input.filled ~ label {
    padding: 0 0.4em 0 0.4em;
    margin-top: calc(0em - var(--padding) - 8px);
    margin-left: 0.5em;
    color: var(--color-gray);
    font-size: 90%;
  }
}
</style>
