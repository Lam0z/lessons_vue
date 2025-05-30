<script setup>
const route = useRoute();
const rout = route.path.split("/").pop();
const user = ref(null);
const message = ref(null);
const getUser = async () => {
    const r = $fetch(`https://jsonplaceholder.typicode.com/users/${rout}`);
    user.value = await r;
};
const getMessage = async () => {
    const r = $fetch(`https://jsonplaceholder.typicode.com/posts/${rout}`);
    message.value = await r;
};
getUser();
getMessage();
</script>
<template>
    <div v-if="user && message">
        <div>post 1 - {{ route.path }}</div>
        <div>Post</div>
        <span>{{ user.name }}</span>
        <div>
            Message:
            <p>{{ message.body }}</p>
        </div>
    </div>
    <div v-else>Loading...</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
