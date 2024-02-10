<template>
  <div :class="$style.container">
    <BaseButton @click="run">Grab chat</BaseButton>
  </div>
</template>

<script lang="ts" setup>
const ipcRenderer = window.electron.ipcRenderer;
import BaseButton from '@components/Base/BaseButton.vue';

ipcRenderer.on('submit', (event, data) => {
  console.log('received event', event)
  console.log('received data', data)
})

const run = async () => {
  ipcRenderer.send('grab', 333859541)
};

</script>

<style module>
.container {
  display: flex;
  width: 500px;
  margin: auto;
  top: 200px;
  position: relative;
  justify-content: center;
}
</style>
