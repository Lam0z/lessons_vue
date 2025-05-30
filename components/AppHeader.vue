<script setup>
const showNavbar = ref(false);
const userLinks = ref([]);
const getUsersLinks = async () => {
    const r = await $fetch(`https://jsonplaceholder.typicode.com/users`);
    userLinks.value = await r;
};
getUsersLinks();
// onMounted(() => {
//     window.innerWidth < 992
//         ? (showNavbar.value = true)
//         : (showNavbar.value = false);
// });
</script>
<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <nuxt-link class="navbar-brand" to="/">Home</nuxt-link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    @click="showNavbar = !showNavbar"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    :style="{ display: showNavbar ? 'block' : 'none' }"
                    id="navbarNav"
                >
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <nuxt-link
                                class="nav-link active"
                                aria-current="page"
                                to="/about"
                                >About</nuxt-link
                            >
                        </li>
                        <nuxt-link
                            v-for="user in userLinks"
                            :key="user.id"
                            :to="`/posts/${user.id}`"
                            class="nav-link"
                        >
                            {{ user.name }}
                        </nuxt-link>
                        <li class="nav-item">
                            <nuxt-link
                                class="nav-link active"
                                aria-current="page"
                                to="/posts/1"
                                >Posts
                            </nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link
                                class="nav-link active"
                                aria-current="page"
                                to="/posts/2"
                                >Posts
                            </nuxt-link>
                        </li>
                        <!-- <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li> -->
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup></script>

<style lang="scss" scoped>
.navbar-nav {
    @media (max-width: 991px) {
        display: grid;
        grid-template-columns: repeat(3, auto);
        flex-direction: row;
        flex-wrap: wrap;
    }
    @media (max-width: 576px) {
        grid-template-columns: repeat(2, auto);
    }
}
.nav-item {
    width: 100%;
    flex-basis: 30%;
}
</style>
