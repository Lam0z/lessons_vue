<template>
    <div class="page">
        <AppHeader />
        <main>
            <slot />
        </main>
    </div>
</template>

<style>
.page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
main {
    flex-grow: 1;
    padding: 20px;
    background-color: #f8f9fa; /* Light background for main content */
}
</style>
