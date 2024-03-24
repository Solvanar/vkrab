<template>
  <div>
    <div
      :class="{
        [$style.sectionA]: true,
        [$style.hideBlockAnimation]: isGrab
      }"
      @click="goToSection('viewer')"
    >
      <div :class="[$style.sectionAContent, $style.menuItem, $style.outfitFont]">
        View
      </div>
    </div>
    <div :class="$style.sectionB"  @click="goToSection('grabber')">
      <div :class="{[$style.menuItem]: true, [$style.outfitFont]: true, [$style.hideTitleAnimation]: isGrab}">
        Grab
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import type { Router } from 'vue-router';
import { ref, type Ref } from 'vue';

const router: Router = useRouter();

const isGrab: Ref<boolean> = ref<boolean>(false);

const goToSection = (section: string): void => {
  isGrab.value = section === 'grabber';
  setTimeout(() => {
    console.log('route change')
    router.push(router.resolve(section));
  }, 500);
}
</script>

<style module>

  .sectionA {
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: top right;
    transform: skew(-20deg);

    width: 60%;
    height: 100%;
    text-align: left;
    /* todo цвета в конфиг */
    background: linear-gradient( 203deg, #fc6062 0%, #1c0053 60%, #1c0053 100% );
    z-index: 1;
    box-shadow: 10px 0 20px #000;
    color: #8a4fff;
    cursor: pointer;
  }

  .sectionAContent {
    transform: skew(20deg);
  }

  .sectionB {
    width: 50%;
    right: 0;
    position: absolute;
    height: 100%;
    z-index: 1;
    color: #fc6062;
    cursor: pointer;
  }

  .menuItem {
    position: relative;
    font-size: 72px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow:
      3px 3px 0 #000,
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
  }


.outfitFont {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
}

.hideBlockAnimation {
  animation-name: hideBlockAnimation;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
.hideTitleAnimation {
  animation-name: hideTitleAnimation;
  animation-delay: 0.2s;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

@keyframes hideBlockAnimation {
  0%   { left: 0; }
  100% { left: -2000px; }
}

@keyframes hideTitleAnimation {
  0%   { top: 0; }
  100% { top: -1000px; }
}
</style>
