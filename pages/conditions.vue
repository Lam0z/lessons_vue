<script setup>
const awesome = ref(true);
const switchAwesome = () => (awesome.value = !awesome.value);
</script>

<template>
    <!--  -->
    <LPart title="v-if / v-else">
        <h1 v-if="awesome">Vue восхитителен!</h1>
        <h1 v-else>О, нет 😢</h1>
        <button type="button" class="btn btn-primary" @click="switchAwesome">
            Switch
        </button>
    </LPart>
    <!--  -->
</template>

<style lang="scss" scoped></style>
