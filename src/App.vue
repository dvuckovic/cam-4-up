<template>
    <div class="d-flex flex-column min-vh-100">
        <Header />
        <Main />
        <Footer />
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

// import 'bootstrap';

export default {
    name: 'App',
    components: {
        Header: defineAsyncComponent(() => import('@/components/Header')),
        Main: defineAsyncComponent(() => import('@/components/Main')),
        Footer: defineAsyncComponent(() => import('@/components/Footer')),
    },
};
</script>

<style lang="scss">
// Bootstrap colors.
//   https://coolors.co/ec0b43-42484c-c8ccd0-212529-f0f0f0
$primary: #ec0b43;
$secondary: #42484c;
$light: #c8ccd0;
$dark: #212529;
$white: #f0f0f0;

@import '~bootstrap/scss/bootstrap';
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css');
</style>
