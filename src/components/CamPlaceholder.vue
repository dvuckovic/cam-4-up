<template>
    <div
        v-bind:style="{
            backgroundColor,
            cursor: identifier ? 'pointer' : 'unset',
        }"
        v-bind:class="cssClasses"
        class="position-relative CamPlaceholder"
        v-on:click="onClick">
        <div class="position-absolute top-0 start-0 end-0 bottom-0 text-center text-white">
            {{ title }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'CamPlaceholder',

    emits: [
        'placeholderClick',
    ],

    props: {
        identifier: {
            type: Number,
        },

        title: {
            type: String,
            required: true,
        },

        backgroundColor: {
            type: String,
            default: 'rgb(0, 0, 0)',
        },
    },

    computed: {
        cssClasses () {
            if (!this.identifier) return [];
            return [
                `CamPlaceholder--Identifier${this.identifier}`,
            ];
        },
    },

    methods: {
        onClick () {
            if (!this.identifier) return;
            this.$emit('placeholderClick', this.identifier);
        },
    },
};
</script>

<style lang="scss">
.CamPlaceholder {
    width: 100%;
    padding-top: 56.25%; // AR: 16:9
}
</style>