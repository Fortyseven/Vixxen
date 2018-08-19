<template>
    <div class="labels container-fluid d-flex flex-column">
        <h1><font-awesome-icon icon="file"/> Labels</h1>
        <div class="content">
            <ul>
                <li v-for="(value,id) in getLabels">
                    {{ value }} ## {{id}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
export default {
    name: 'labels',
    computed: {
        ...mapGetters([
            'getLabels'
        ]),
        ...mapMutations([
            'addLabel',
            'removeLabel'
        ])
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
