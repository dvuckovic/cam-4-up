<template>
    <footer class="flex-grow-1 mt-auto p-3 bg-dark text-center text-muted">
        &copy; {{ year }}
    </footer>
</template>

<script>
export default {
    name: 'Footer',

    computed: {
        year () {
            return new Date().getUTCFullYear();
        },
    },
};
</script>

<style lang="scss">

</style>