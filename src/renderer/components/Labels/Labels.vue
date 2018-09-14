<template>
    <b-container class="labels container m-0">
        <h1><font-awesome-icon icon="file"/> Labels</h1>
        <b-container fluid>
            <b-row>
                <b-col cols="1">
                    <label title="id" >ID</label>
                </b-col>
                <b-col>
                    <label title="value">Value</label>
                </b-col>
                <b-col>
                    <label title="output_file">Path</label>
                </b-col>
                <b-col cols="1">
                    <label title="interval">Interval <small>(ms)</small></label>
                </b-col>
                <b-col cols="1">
                </b-col>
            </b-row>
        </b-container>
        <LabelEntry
            class='entry'
            v-for="(entry,id) in getLabels"
            :key="id"
            :id="id"
            :value="entry.value"
            :output_file="entry.output_file"
            :interval="entry.interval"
            v-on:addLabel="addLabel"
            v-on:removeLabel="removeLabel"
            />
        <hr/>
        <LabelEntry
            v-on:addLabel="addLabel"
            class='entry'
            is_new='true' />
    </b-container>
</template>
<!-- ----------------------------------- -->
<script>
import { mapGetters, mapMutations } from "vuex";
import LabelEntry from "./LabelEntry";

export default {
    name: "labels",
    components: {
        LabelEntry
    },
    data: function() {
        return {
            newEntry: {
                id: null,
                value: null,
                output_file: null,
                interval: null
            }
        };
    },
    computed: {
        ...mapGetters(["getLabels"])
    },
    methods: {
        addNewLabel() {
            var err = isLabelValid(this, this.$data.newEntry);

            if (!err) {
                this.$store.commit("addLabel", this.newEntry);
                this.newEntry.id = null;
                this.newEntry.value = null;
                this.newEntry.output_file = null;
                this.newEntry.interval = null;
                this.$forceUpdate();
            } else {
                console.error(err);
            }
        },
        addLabel(new_label) {
            console.log("new_label", new_label);
            this.$store.commit("addLabel", new_label);
            this.$forceUpdate();
        },
        removeLabel(id) {
            this.$store.commit("removeLabel", id);
            this.$forceUpdate();
        }
    }
};
</script>
<!-- ----------------------------------- -->
<style lang="scss" scoped>
.labels {
    .entry {
        background-color: rgba(255, 255, 255, 0.15);
        padding: 0.5em 0;
        width: 100%;
        transition: background-color 500ms;
        &:hover {
            background-color: rgba(255, 255, 255, 0.25);
        }
    }
    label {
        display: block;
        font-weight: bold;
        text-align: center;
    }
}
</style>
