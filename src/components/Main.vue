<template>
    <main class="container-fluid">
        <div class="row my-2">
            <aside class="col-md-3 order-2 order-md-1">
                <div class="row">
                    <div
                        v-for="camera in sidebarCameras"
                        v-bind:key="camera.identifier"
                        class="col-6 col-md-12 my-2">
                        <CamPlaceholder
                            v-bind:identifier="camera.identifier"
                            v-bind:title="camera.title"
                            v-bind:background-color="camera.backgroundColor"
                            v-on:placeholder-click="switchMainCamera" />
                    </div>
                </div>
            </aside>
            <section class="col my-2 order-1 order-md-2">
                <CamPlaceholder
                    v-bind:key="mainCamera.identifier"
                    v-bind:title="mainCamera.title"
                    v-bind:background-color="mainCamera.backgroundColor" />
            </section>
        </div>
    </main>
</template>

<script>
import CamPlaceholder from './CamPlaceholder';

export default {
    name: 'Main',

    components: {
        CamPlaceholder,
    },

    data () {
        return {
            allCameras: [
                {
                    identifier: 1,
                    title: 'CAM 1',
                    backgroundColor: 'var(--bs-danger)',
                },
                {
                    identifier: 2,
                    title: 'CAM 2',
                    backgroundColor: 'var(--bs-warning)',
                },
                {
                    identifier: 3,
                    title: 'CAM 3',
                    backgroundColor: 'var(--bs-success)',
                },
                {
                    identifier: 4,
                    title: 'CAM 4',
                    backgroundColor: 'var(--bs-info)',
                },
            ],
            mainCameraIdentifier: 4,
        };
    },

    computed: {
        sidebarCameras () {
            return this.allCameras.filter((camera) => camera.identifier !== this.mainCameraIdentifier);
        },

        mainCamera () {
            return this.allCameras.find((camera) => camera.identifier === this.mainCameraIdentifier);
        },
    },

    methods: {
        switchMainCamera (identifier) {
            this.mainCameraIdentifier = identifier;
        },
    },
};
</script>
