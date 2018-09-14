<template>
    <b-form-row @change="validateLabel">
        <b-col cols="1">
            <b-form-input
                type="text"
                v-model="_id"
                :readonly="!is_new"
                :disabled="!is_new"
                placeholder="Unique identifier"/>
        </b-col>
        <b-col>
            <b-form-input
                type="text"
                v-model="_value"
                placeholder="Template string"/>
        </b-col>
        <b-col class="output_file">
            <b-row no-gutters>
                <b-col>
                    <b-form-input
                        type="text"
                        v-model="_output_file"
                        placeholder="File output path"/>
                </b-col>
                <b-col cols="2">
                    <b-button
                        @click="openFile"
                        class="open-file">⋯</b-button>
                </b-col>
            </b-row>
        </b-col>
        <b-col cols="1">
            <b-form-input
                type="text"
                v-model="_interval"
                :state="validateInterval()"
                placeholder="Interval in milliseconds"/>
            <b-form-invalid-feedback id="feedbackInterval">
                Interval  must be 250ms or longer.
            </b-form-invalid-feedback>
        </b-col>
        <b-col cols="1">
            <b-button
                v-if="!is_new"
                class="btn"
                @click="$emit('removeLabel', _id)">&times;</b-button>
            <b-button
                v-else
                class="btn"
                :disabled="!is_valid"
                @click="emitAddLabel">&plus;</b-button>
        </b-col>
    </b-form-row>
</template>

<!-- ---------------------  -->

<script>
const { dialog } = require("electron").remote;

export default {
    name: "LabelEntry",
    props: {
        id: {
            type: String,
            default: ""
        },
        value: {
            type: String,
            default: ""
        },
        output_file: {
            type: String,
            default: ""
        },
        interval: {
            default: null
        },
        is_new: {
            default: false
        }
    },
    data: function() {
        return {
            is_valid: false,
            _id: null,
            _value: null,
            _output_file: null,
            _interval: null
        };
    },
    methods: {
        validateInterval() {
            if (this._interval == null || this._interval >= 250) return true;
            return false;
        },
        emitAddLabel() {
            this.updateFieldsInStore();
            this.clearFields();
        },
        updateFieldsInStore() {
            this.$emit("addLabel", {
                id: this._id,
                output_file: this._output_file,
                value: this._value,
                interval: this._interval
            });
        },
        clearFields() {
            this._id = null;
            this._output_file = null;
            this._value = null;
            this._interval = null;
            this.$forceUpdate();
        },
        openFile() {
            var cur_path = this.$props.output_file.trim();

            dialog.showSaveDialog(
                {
                    properties: [
                        "openFile",
                        "promptToCreate",
                        "createDirectory"
                    ],
                    filters: [
                        { name: "Text Files", extensions: ["txt", "label"] },
                        { name: "All Files", extensions: ["*"] }
                    ],
                    defaultPath: cur_path,
                    title: "Label output file",
                    buttonLabel: "Use this file"
                },
                function(filename) {
                    if (filename !== undefined && cur_path != filename) {
                        this._output_file = filename;
                        this.$forceUpdate();
                        this.validateLabel();
                    }
                }.bind(this)
            );
        },
        validateLabel() {
            this.$forceUpdate();
            this.is_valid =
                this._id.trim().length > 0 &&
                this._value.trim().length > 0 &&
                this._output_file.trim().length > 0 &&
                !isNaN(this._interval) &&
                this._interval >= 250;

            if (this.is_valid && !this.is_new) {
                this.updateFieldsInStore();
            }
        }
    },
    created() {
        this._id = this.$props.id;
        this._output_file = this.$props.output_file;
        this._value = this.$props.value;
        this._interval = this.$props.interval;
    }
};
</script>

<!-- ---------------------  -->

<style lang="scss" scoped>
input {
    font-family: var(--mono-font);
}

button {
    width: 100%;
}
</style>

