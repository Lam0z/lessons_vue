<template>
    <div class="container">
        <div class="alert alert-info">
            <h5 class="alert alert-success">{{ title }}</h5>
            <slot />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: "Title",
    },
});
</script>

<style lang="scss" scoped></style>
