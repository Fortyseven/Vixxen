<template>
    <div class="labels container m-0">
        <h1><font-awesome-icon icon="file"/> Labels</h1>
        <div class="content row p-4">
            <div class="col">
                <label title="id" >ID</label>
            </div>
            <div class="col">
                <label title="value">Value</label>
            </div>
            <div class="col">
                <label title="output_file">Path</label>
            </div>
            <div class="col">
                <label title="interval">Interval (ms)</label>
            </div>
            <div class="col">
            </div>
        </div>
        <div class="content row entry m-0" v-for="(entry,id) in getLabels" :key="id">
            <div class="col">
                <input type="text" v-bind:value="id" readonly disabled>
            </div>
            <div class="col">
                <input type="text" v-model="entry.value">
            </div>
            <div class="col">
                <input type="text" v-model="entry.output_file">
            </div>
            <div class="col">
                <input type="text" v-model="entry.interval">
            </div>
            <div class="col">
                <button class="btn" @click="removeLabel(id)">&times;</button>
            </div>
        </div>
        <hr/>
        <div class="content row m-0">
            <div class="col">
                <input type="text" v-model="newEntry.id" placeholder="Unique identifier">
            </div>
            <div class="col">
                <input type="text" v-model="newEntry.value" placeholder="Template string">
            </div>
            <div class="col">
                <input type="text" v-model="newEntry.output_file" placeholder="File output path">
            </div>
            <div class="col">
                <input type="text" v-model="newEntry.interval" placeholder="Interval in milliseconds">
            </div>
            <div class="col">
                <button @click="addNewLabel" class="btn">Add</button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
export default {
    name: 'labels',
    data: function() {
            return {
                newEntry: {
                    id: null,
                    value: null,
                    output_file: null,
                    interval: null
                }
            }
    },
    computed: {
        ...mapGetters([
            'getLabels'
        ])
    },
    methods: {
        addNewLabel() {
            this.$store.commit('addLabel', this.newEntry);
            newEntry.id = null;
            newEntry.value = null;
            newEntry.output_file = null;
            newEntry.interval = null;
            this.$forceUpdate();
        },
        removeLabel( id ) {
            this.$store.commit('removeLabel', id);
            this.$forceUpdate();
        }
    }
};
</script>

<style lang="scss" scoped>
.labels {
    .entry {
        background: rgba(255,255,255,0.25);
        padding: 0.5em;
    }
    label {
        display: block;
        font-weight: bold;
        text-align: center;
    }
    input {
        width: 100%;
    }
    button {
        display: block;
    }
}
</style>
