<script setup>
const items = ref([{ message: "Foo" }, { message: "Bar" }]);

const myObject = reactive({
    title: "How to do lists in Vue",
    author: "Jane Doe",
    publishedAt: "2016-04-10",
});

const sets = ref([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
]);

const filter = (item) => {
    return item.filter((number) => number % 2 === 0);
};
</script>

<template>
    <!--  -->
    <LPart title="Отображение элементов массива через v-for">
        <li v-for="({ message }, index) in items">{{ message }} {{ index }}</li>
    </LPart>
    <!--  -->
    <!--  -->
    <LPart title="Отображение свойств объекта через v-for">
        <ul>
            <li v-for="value in myObject">
                {{ value }}
            </li>
        </ul>
        <ul>
            <li v-for="(value, index, key) in myObject">
                {{ index }} : {{ value }}: {{ key }}
            </li>
        </ul>
    </LPart>
    <!--  -->
    <!--  -->
    <LPart title="v-for и диапазоны">
        <ul>
            <li v-for="item in 10">
                {{ item }}
            </li>
        </ul>
    </LPart>
    <!--  -->
    <!--  -->
    <LPart title="v-for и диапазоны" v-for="item in myObject">
        {{ item }}
    </LPart>
    <!--  -->
    <!--  -->
    <LPart title="Sort">
        <ul v-for="item in sets" :key="item">
            <li v-for="sortItem in filter(item)">{{ sortItem }}</li>
        </ul>
    </LPart>
    <!--  -->
</template>

<style lang="scss" scoped></style>
