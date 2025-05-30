<script setup>
definePageMeta({
    pageTransition: {
        name: "rotate",
    },
});
</script>
<template>
    <h2>Flex-basis + flex-wrap</h2>
    <p>
        Изменяй ширину окна — элементы адаптивно меняют размер и переходят на
        новую строку.
    </p>

    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
    </div>
</template>

<style>
.container {
    display: flex;
    flex-wrap: wrap;
    border: 2px solid #333;
    padding: 10px;
    justify-content: flex-start;
}

.item {
    flex: 0 1 calc(33.33% - 10px); /* flex-grow: 1; flex-shrink: 1; flex-basis: 200px */
    background-color: lightblue;
    margin: 5px;
    padding: 20px;
    text-align: center;
    font-size: 18px;
}

.item:nth-child(even) {
    background-color: lightcoral;
}
</style>
