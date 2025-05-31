<script setup>
const author = reactive({
    name: "John Doe",
    books: [
        "Vue 2 - Advanced Guide",
        "Vue 3 - Basic Guide",
        "Vue 4 - The Mystery",
    ],
});
const isBooksListEmppty = computed(() =>
    author.books.length === 0 ? true : false
);
const authorStatus = computed(() => {
    return author.books.length >= 3 ? "good author" : "bad author";
});
const addBook = () => {
    author.books.push(`New Book ${Math.floor(Math.random() * 100)}`);
};
const removerandombook = () => {
    if (author.books.length > 0) {
        const index = Math.floor(Math.random() * author.books.length);
        author.books.splice(index, 1);
    }
};
</script>

<template>
    <LPart title="Простой пример">
        <button class="btn btn-primary" @click="addBook">Add some book</button>
        <button
            class="btn btn-danger"
            @click="removerandombook"
            :disabled="isBooksListEmppty"
        >
            {{
                isBooksListEmppty ? "No books to remove" : "Remove random book"
            }}
        </button>
        <div>
            <pre>{{ author }}</pre>
        </div>
        <div>
            <label
                >Author status: <mark>{{ authorStatus }}</mark></label
            >
        </div>
    </LPart>
</template>

<style lang="scss" scoped></style>
