<script setup>
const isActive = ref(true);
const hasError = ref(false);

const classObject = reactive({
    active: true,
    "text-danger": true,
});

const activeClass = ref("active");
const errorClass = ref("text-danger");

const activeColor = ref("red");
const fontSize = ref(30);

const styleObject = reactive({
    color: "blue",
    fontSize: "20px",
    textDecoration: "underline",
});
</script>

<template>
    <!--  -->
    <LPart title="Привязка CSS-классов">
        <div :class="{ 'text-secondary': isActive }">text - secondary</div>
        <div :class="classObject">
            {{ classObject }}
        </div>
    </LPart>
    <!--  -->
    <!--  -->
    <LPart title="Синтаксис с массивом">
        <div :class="[activeClass, errorClass]">
            {{ activeClass }}
        </div>
    </LPart>
    <!--  -->
    <!--  -->
    <LPart title="Привязка инлайн-стилей">
        <div :style="styleObject">
            <pre>
                {{ activeColor }} - {{ fontSize }}
        </pre
            >
        </div>
    </LPart>
    <!--  -->
</template>

<style lang="scss" scoped></style>
