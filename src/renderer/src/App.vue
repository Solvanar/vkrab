<script lang="ts" setup>
import BaseNav from './components/Base/BaseNav.vue'
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.halftone"></div>
    <BaseNav/>
    <router-view/>
  </div>
</template>

<style module>
.container {
  background: linear-gradient(175deg, var(--color-red), rgb(255 100 100 / 0) 100%),
  linear-gradient(234deg, var(--color-blue), rgb(255 100 100 / 0) 100%),
  linear-gradient(340deg, var(--color-blue), rgb(100 255 100 / 0) 100%);
  display: flex;
  height: 100vh;
  width: 100vw;

  .halftone {
    --bgColor: #ffffff;
    --invert: 1;

    aspect-ratio: 1;
    background: var(--bgColor);
    filter: contrast(50) invert(var(--invert, 0));
    height: 100%;
    isolation: isolate;
    mix-blend-mode: multiply;
    position: absolute;
    width: 100%;
  }

  .halftone::after {
    --bgPosition: calc(var(--bgSize) / 2);
    --bgSize: 2rem;
    --mask: linear-gradient(rgb(0 0 0 / 0.5), rgb(0 0 0));
    --stop1: 0.1rem;
    --stop2: 0.9rem;

    /* non-variable black color for correct mask behavior */
    background-image: radial-gradient(circle at center, black var(--stop1), transparent var(--stop2)),
    radial-gradient(circle at center, black var(--stop1), transparent var(--stop2));
    background-position: 0 0, var(--bgPosition) var(--bgPosition);
    background-repeat: round;
    background-size: var(--bgSize) var(--bgSize);
    content: '';
    inset: 0;
    mask-image: var(--mask);
    position: absolute;
  }
}
</style>
