<template>
  <div :class=$style.container>
    <div :class="$style['section-a']" @click="goToSection('grabber')">
      <div :class="$style['menu-item']">
        <div :class="[$style.title, $style.left]">Grab</div>
      </div>
    </div>
    <div :class="$style['section-b']"  @click="goToSection('viewer')">
      <div :class="$style['menu-item']">
        <div :class="[$style.title, $style.right]">Show</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import type { Router } from 'vue-router';

const router: Router = useRouter();

const goToSection = (section: string) => {
  router.push(router.resolve(section));
}
</script>

<style module>
.container {
  width: 100vw;
  height: 100vh;
  background-color: var(--color-blue);
  color: var(--color-white);
  display: flex;
  /* #646cff;*/

  .section-a {
    width: calc(50% - 100px);
    height: 0;
    border-bottom: 100vh solid var(--color-red);
    border-left: 0 solid transparent;
    border-right: 200px solid transparent;
    /*background: linear-gradient(to top left, transparent 0%, transparent 50%, #FF715B 50%, #FF715B 60%);*/
    text-align: left;
  }

  .section-b {
    width: 50%;
    height: 100%;
    text-align: right;
  }

  .title {
    font-size: 40px;
    position: absolute;
  }
  .right {
    right: 20px;
    top: 50%;
  }
  .left {
    left: 20px;
    top: 50%;
  }
}
</style>
