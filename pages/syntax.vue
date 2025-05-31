<script setup>
const msg = "Mustache message";
const vHtml = `<ul><li>v-html</li></ul>`;
const id = "alert alert-success";
const isDisabled = ref(false);

const objectOfAttrs = {
    id: "container",
    class: "wrapper",
    style: "background-color:green",
};
</script>
<template>
    <LPart title="Текстовые интерполяции">
        <div>{{ msg }}</div>
    </LPart>
    <!--  -->
    <LPart title="Сырой HTML">
        <div>{{ vHtml }}</div>
        <div v-html="vHtml"></div>
    </LPart>
    <!--  -->
    <LPart title="Атрибуты">
        <div :id>{{ id }}</div>
        <!-- <div v-html="vHtml"></div> -->
        <button
            class="btn btn-primary"
            :disabled="isDisabled"
            @click="isDisabled = !isDisabled"
        >
            {{ isDisabled ? "disabled" : "enabled" }}
        </button>
    </LPart>
    <!--  -->
    <LPart title="Динамическая привязка нескольких атрибутов">
        <div v-bind="objectOfAttrs">{{ objectOfAttrs }}</div>
    </LPart>
    <!--  -->
    <LPart title="Визуализация полного синтаксиса директивы">
        <img
            class="img-fluid"
            src="/public/img/directive.D2LCjoeH.png"
            alt=""
        />
    </LPart>
</template>

<style lang="scss" scoped></style>
