<template>
  <BaseInput :title="'Token'" v-model="form.token" />
  <BaseInput :title="'User ID'" v-model="form.userId" />
  <BaseButton @click="saveSettings">Запомнить</BaseButton>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import BaseInput from '@components/Base/BaseInput.vue';
import BaseButton from '../Base/BaseButton.vue';

const emit = defineEmits(['update-settings'])

const form = reactive({
  token: '',
  userId: '',
})

const saveSettings = () => {
  localStorage.setItem('token', form.token);
  localStorage.setItem('userId', form.userId);

  emit('update-settings');
}
</script>

<style module>

</style>
