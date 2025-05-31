<script setup>
const links = [
    { name: "Синтаксис шаблонов", path: "/syntax" },
    { name: "Основы реактивности", path: "/reactive" },
    { name: "Вычисляемые свойства", path: "/computed" },
    // { name: "Contact", path: "/contact" },
];
</script>

<template>
    <header class="">
        <nav>
            <nuxt-link v-for="link in links" :to="link.path" class="nav-link">{{
                link.name
            }}</nuxt-link>
            <!-- <nuxt-link to="/" class="nav-link">Home</nuxt-link> -->
        </nav>
    </header>
</template>

<script setup></script>

<style lang="scss" scoped>
header {
    min-height: 40px;
    margin-bottom: 40px;
    margin: 10px 0;
    padding: 0 10px;
    display: flex;
    // justify-content: center;
    align-items: center;
}
nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>
