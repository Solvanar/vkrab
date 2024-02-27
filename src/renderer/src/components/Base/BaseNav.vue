<template>
  <div :class="[$style.nav, $style.top]">
    <slot name="top"></slot>
  </div>
  <div :class="[$style.nav, $style.bottom]">
    <slot name="bottom">
      <BaseButton v-if="route.name !== 'root'" :size="'lg'" :is-rounded="true" :href="'/'" type="'link'">
        <-
      </BaseButton>
    </slot>
  </div>
</template>

<script lang="ts" setup>
// TODO: временное втф с кнопками, сделать шапку или сайдбар с кнопками для навигации и настройками

import BaseButton from '@components/Base/BaseButton.vue'
import { useRoute } from 'vue-router';
import type { RouteLocationNormalizedLoaded } from 'vue-router';

const route: RouteLocationNormalizedLoaded = useRoute();
</script>

<style module>
.nav {
  position: fixed;

  &.top {
     top: 20px;
     right: 20px;
  }

  &.bottom {
     bottom: 20px;
     right: 20px;
  }
}
</style>
