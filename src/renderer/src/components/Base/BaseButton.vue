<template>
  <div
    v-if="!href"
    :class="[
      $style.button,
      {[$style.rounded]: props.isRounded},
      $style[`size-${props.size}`],
    ]"
    @click="handler"
  >
    <span :class="$style.content">
        <slot />
    </span>
  </div>

  <router-link
    v-else
    :class="[
      $style.button,
      {[$style.rounded]: props.isRounded},
      $style[`size-${props.size}`],
    ]"
    :to="href"
  >
    <slot />
  </router-link>
</template>

<script lang="ts" setup>
import { withDefaults } from 'vue';
const emit = defineEmits(['click']);

interface Props {
  size?: 'sm' | 'md' | 'lg',
  isRounded?: boolean,
  color?: string,
  href?: string,
  callback?: () => void,
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  isRounded: false,
});

const handler = (event: any): void => {
  emit('click', event);
};
</script>

<style module>
.button {
  align-items: center;
  justify-content: center;
  display: flex;
  box-sizing: border-box;
  text-align: center;
  width: fit-content;
  background-color: var(--color-white);
  border: 2px solid var(--color-red);
  color: var(--color-red);
  font-weight: var(--button-font-weight);
  border-radius: var(--button-radius);
  outline: none;
  padding: 0;
  white-space: nowrap;
  cursor: pointer;
  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
  text-decoration: none;

  .content {
    line-height: 1.5;
    display: inline-block;
    vertical-align: middle;
  }
}

.rounded {
  aspect-ratio: 1 / 1;
}

.size-sm {
  line-height: var(--button-sm-size);
  height: var(--button-sm-size);
  padding: 2px calc(var(--button-sm-size) / 2 - 4px) 4px calc(var(--button-sm-size) / 2 - 4px);
}
.size-md {
  line-height: calc(var(--button-md-size) - 4px);
  height: var(--button-md-size);
  padding: 2px calc(var(--button-md-size) / 2 - 4px) 4px calc(var(--button-md-size) / 2 - 4px);
}
.size-lg {
  line-height: calc(var(--button-lg-size) - 4px);
  height: var(--button-lg-size);
  padding: 2px calc(var(--button-lg-size) / 2 - 4px) 4px calc(var(--button-lg-size) / 2 - 4px);
}
</style>
