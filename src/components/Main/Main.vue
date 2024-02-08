<template>
  <div :class=$style.container>
    <div :class="$style['section-a']">Grab</div>
    <div :class="$style['section-b']">Show</div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Main"
}
</script>

<style module>
.container {
  width: 200px;
  height: 20px;
  background-color: #1a1a1a;
  color: #ffffff;

  .section-a {
    background-color: #646cff;
  }

  .section-b {
    background-color: coral;
  }
}
</style>