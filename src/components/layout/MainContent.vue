<script setup></script>
<template>
    <div class="flex-1">
        <div class="main_content flex flex-col p-1">
            <div class="main_content__header">
                <p class="main_content__header__title">whatsapp</p>
                <p class="main_content__header__subtitle">+52-333-333-44-55</p>
            </div>
            <div class="main_content__body">
            </div>
            <div class="main_content__footer">
                <input placeholder="Escribe un mensaje" class="main_content__footer__input" type="text">
                <div class="main_content__footer__buttons">
                    <button class="main_content__footer__buttons__icons">
                        <v-icon name="fa-microphone" />
                    </button>
                    <button class="main_content__footer__buttons__icons">
                        <v-icon name="ri-attachment-2" />
                    </button>
                    <button class="main_content__footer__buttons__send">Enviar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/components/main_content.scss';
</style>