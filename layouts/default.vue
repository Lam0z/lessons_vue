<template>
    <div class="page">
        <AppHeader />
        <main>
            <slot />
        </main>
        <AppFooter />
    </div>
</template>

<style lang="scss">
.page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
main {
    flex-grow: 1;
}
</style>
