<template>
    <div class="labels container-fluid d-flex flex-column">
        <h1><font-awesome-icon icon="file"/> Labels</h1>
        <div class="content">
            xxx
        </div>
    </div>
</template>

<script>
export default {
    name: 'labels',
    data() { return {
        // description: "This is a thing that's happening.",
        // game: "Far Cry 5"
    }},
    computed: {
    },
    methods: {
    }
};
</script>

<style lang="scss" scoped>
.labels {
    label {
        display: block;
        font-weight: bold;
    }
    button {
        display: block;
    }
    textarea {
    }
    textarea.output {
    }
}
</style>
