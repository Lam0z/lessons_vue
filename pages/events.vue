<script setup>
const warn = (e) => console.log(e);
const eLog = ref("alt + enter");
const inputE = () => (eLog.value = "Input event triggered");
</script>

<template>
    <!--  -->
    <LPart title="Доступ к событию через аргумент в инлайн-обработчиках">
        <button class="btn btn-success" @click="warn($event.target)">
            {{ eLog }}
        </button>
    </LPart>
    <!--  -->
    <!--  -->
    <LPart title="Модификаторы клавиш">
        <input
            type="text"
            class="form-control"
            @keyup.alt.enter="inputE"
            v-model="eLog"
        />
    </LPart>
    <!--  -->
</template>

<style lang="scss" scoped></style>
