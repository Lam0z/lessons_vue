<script setup>
const count = ref(0);
const increment = () => count.value++;

const obj = ref({
    nested: { count: 0 },
    arr: ["foo", "bar"],
});
const mutate = () => {
    obj.value.nested.count++;
    obj.value.arr.push(Math.random() * 100);
};
</script>

<template>
    <!--  -->
    <LPart title="Объявление реактивного состояния">
        <button class="btn btn-info" v-on:click="increment">
            {{ count ? count : `increase: ${count}` }}
        </button>
    </LPart>
    <!--  -->
    <!--  -->
    <LPart title="Глубокая реактивность">
        <div>
            <button class="btn btn-info" v-on:click="mutate">
                {{
                    obj.nested.count
                        ? obj.nested.count
                        : `increase: ${obj.nested.count}`
                }}
            </button>
            <ul>
                <li v-for="(item, index) in obj.arr" :key="index">
                    {{ item }}
                </li>
            </ul>
        </div>
    </LPart>
    <!--  -->
</template>

<style lang="scss" scoped></style>
