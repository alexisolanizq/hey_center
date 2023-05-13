<script setup>
import useLeftsidebar from '@/composables/chat/leftsidebar'
const { contacts, loadingContacts } = useLeftsidebar()

console.log(contacts.value);
</script>
<template>
    <div class="rightsidebar_container">
        <div class="leftsidebar_content">
            <div class="leftsidebar_content__header">
                <p>Alexis Olán</p>
                <p>9332007527</p>
            </div>
            <div class="leftsidebar_content__body">
                <div class="leftsidebar_content__body__image">
                    <img src="https://ashallendesign.ams3.cdn.digitaloceanspaces.com/rMbsGOyK6i1KjNkbXff8qLohzM1nWQA8HNGwHF0J.png" alt="Contact image">
                </div>

                <div class="leftsidebar_content__body__data">
                    Multimedia <span class="leftsidebar_content__body__data__counter">2</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/components/rightsidebar_content.scss";
</style>