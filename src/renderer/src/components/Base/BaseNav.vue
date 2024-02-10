<template>
  <div :class="$style.nav">
    <BaseButton v-if="route.name !== 'root'" :size="'lg'" :is-rounded="true" :href="'/'" type="'link'">
      <-
    </BaseButton>
  </div>
</template>

<script lang="ts" setup>
import BaseButton from '@components/Base/BaseButton.vue'
import { useRoute } from 'vue-router';
import type { RouteLocationNormalizedLoaded } from 'vue-router';

const route: RouteLocationNormalizedLoaded = useRoute();
</script>

<style module>
.nav {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
</style>
