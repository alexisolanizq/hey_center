<script setup>
import { ref } from "vue";
import Navbar from "@/components/layout/Navbar.vue";
import LeftSidebar from "@/components/layout/LeftSidebar.vue";
import MainContent from "@/components/layout/MainContent.vue";
import RightSidebar from "@/components/layout/RightSidebar.vue";
import chat from "@/assets/animations/chat.json";
import Theme from "@/components/layout/Theme.vue";
import useLeftsidebar from '@/composables/chat/leftsidebar';
const hasChat = ref(true);

const { contacts } = useLeftsidebar()

</script>
<template>
  <div class="main_layout">
    <Navbar />
    <div class="main_layout__content">
      <LeftSidebar :chats="contacts" />
      <template v-if="hasChat">
        <MainContent />
        <RightSidebar />
      </template>
      <template v-else>
        <div class="flex flex-col flex-1">
            <Vue3Lottie :animationData="chat" :height="500" :width="500" />
            <p class="text-center font-bold">Haz click en un contacto para iniciar una conversación</p>
        </div>
      </template>
    </div>

    <Theme />
  </div>
</template>
