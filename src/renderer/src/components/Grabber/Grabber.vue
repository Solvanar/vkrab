<template>
  <Transition
    name="fade"
    :enter-from-class="$style['slide-down-fade-enter-from']"
    :enter-active-class="$style['slide-down-fade-enter-active']"
    appear
  >
    <div :class="$style.container">
      <div
        v-if="areSettingsFilled"
        :class="$style['top-navigation']"
      >
        <BaseButton @click="areSettingsFilled = false">
          Я хочу сменить токен
        </BaseButton>
      </div>


      <div v-if="!areSettingsFilled">
        <BaseButton @click="areSettingsFilled = true">Потом</BaseButton>
        <p>Для доступа к чатам надо указать токен (потом будет описано, как получить) и ID пользователя</p>
        <AuthSettings @update-settings="fillSettings" />
      </div>
      <div v-else>
        <BaseButton v-if="!chats.length" @click="run">Grab convs</BaseButton>
        <div
          v-else
          :class="$style['chat-list']"
        >
          <div v-for="chat in chats" :class="$style['chat-item']">
            <img :src="chat.chatSettings?.photo?.photo_50" />
            <span>{{chat.chatSettings?.title || chat.peer?.id}}</span>
          </div>

        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const ipcRenderer = window.electron.ipcRenderer;
import AuthSettings from '@components/Grabber/AuthSettings.vue';
import BaseButton from '@components/Base/BaseButton.vue';
import { Conversation } from '@definitions/messages';

const getSettings = () => ({
  token: localStorage.getItem('token'),
  userId: localStorage.getItem('userId'),
});

let settings = getSettings();
let chats = ref<Conversation[]>([]);

if (settings.token && settings.userId) {
  ipcRenderer.send('saveSettings', settings);
}

const areSettingsFilled = ref<boolean>(!!settings?.token && !!settings?.userId);

const fillSettings = () => {
  settings = getSettings();

  areSettingsFilled.value = true;
}

const run = async () => {
  ipcRenderer.send('getData', { method: 'getConversations' });
};

ipcRenderer.on('returnData', (event, arg) => {
  chats.value = arg;
  console.log(arg)
})
</script>

<style module>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: rgba(0 0 0 / .9);
  margin: 50px;
  border-radius: 30px;
}

.top-navigation {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;
}

.chat-list {
  height: 200px;
  overflow-y: scroll;

  .chat-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    span {
      margin-left: 10px;
    }

    img {
      border-radius: 50px;
    }
  }
}

.slide-down-fade-enter-from {
  opacity: 0;
  transform: translateY(-30px)
}

.slide-down-fade-enter-active {
  transition: all 500ms ease
}
</style>
