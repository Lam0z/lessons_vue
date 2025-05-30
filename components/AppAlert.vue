<script setup>
const color = ref(["red", "green", "blue", "yellow", "purple", "orange"]);
const randomColor = () => {
    return color.value[Math.floor(Math.random() * color.value.length)];
};
const getRandomColor = (one, two) => {
    if (one) {
        return randomColor();
    } else {
        return randomColor();
    }
};

const setColor = ref(getRandomColor(1));
const setColor2 = ref(getRandomColor(undefined, 2));
</script>
<template>
    <span>
        <slot />
    </span>
</template>
<style lang="scss" scoped>
@use "@/assets/scss/_vars.scss" as *;

span {
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    // font-size: 0.875rem;
    // font-weight: 500;
    // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    background-color: v-bind(setColor);
    color: v-bind(setColor2);
    /* color: *alert-text; */
}
</style>
