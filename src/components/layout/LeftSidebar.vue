<script setup>
defineProps(["chats"]);
</script>
<template>
  <div class="leftsidebar_container">
    <div class="leftsidebar_content">
      <div class="leftsidebar_content__header">
        <p class="leftsidebar_content__header__title">
          Chats {{ chats.length }}
        </p>
        <p class="leftsidebar_content__header__button">
          <button>
            <v-icon name="md-search" color="#7e7e7e" />
          </button>
        </p>
      </div>
      <div class="leftsidebar_content__body">
        <p class="leftsidebar_content__body__title">
          <v-icon name="bi-chat-text" /> Todas las conversaciones
        </p>
        <div class="leftsidebar_content__body__content">
          <div
            v-for="item in chats"
            :key="item.id"
            class="leftsidebar_content__body__content__items"
          >
            <div class="leftsidebar_content__body__content__item__image">
              <img
                :src="item.image"
                alt="User image"
              />
            </div>
            <div class="leftsidebar_content__body__content__items__message">
              <div class="leftsidebar_content__body__content__item__message">
                <p>{{ item.name }}</p>
                <p>{{ item.preview }}</p>
              </div>
              <div class="leftsidebar_content__body__content__item__extra">
                <p>2:20 p.m</p>
                <span>2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/components/leftsidebar_content.scss";
</style>
