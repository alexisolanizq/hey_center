<script setup>
import useTheme from '@/composables/layout/theme';
const {userTheme, toggleTheme} = useTheme()
</script>
<template>

<button @click="toggleTheme" class="theme">
    <v-icon v-if="userTheme === 'light-theme'" name="fa-sun" color="#fff" scale="1.4" />
    <v-icon v-else name="bi-moon-stars-fill" color="#fff" scale="1.4" />
</button>

</template>

<style lang="scss" scoped>
@import '@/assets/styles/components/theme.scss';
</style>