<template>
        <form class="row m-0" @change="validateLabel">
            <div class="col col-lg-1">
                <input type="text"
                    :value="id"
                    :readonly="!is_new"
                    :disabled="!is_new"
                    placeholder="Unique identifier"/>
            </div>
            <div class="col col-lg-4">
                <input type="text"
                    :value="value"
                    placeholder="Template string"/>
            </div>
            <div class="col col-lg-5 output_file">
                <input type="text"
                    :value="output_file"
                    placeholder="File output path">
            </div>
            <div class="col col-lg-1">
                <input type="text"
                    :value="interval"
                    placeholder="Interval in milliseconds">
            </div>
            <div class="col">
                <button
                    v-if="!is_new"
                    class="btn"
                    @click="$emit('removeLabel')">&times;</button>
                <button
                    v-else
                    class="btn"
                    :disabled="!is_valid"
                    @click="addLabel(this.id)">+</button>
            </div>
        </form>
</template>

<script>
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
            is_valid: false
            // _id : null,
            // _value : null,
            // _output_file : null,
            // _interval : 0
        };
    },
    methods: {
        removeLabel(id) {
            debugger;
        },
        validateLabel() {
            this.is_valid = true;

            if (
                !this.$props.id.trim().length ||
                !this.$props.value.trim().length ||
                !this.$props.output_file.trim().length ||
                isNaN(this.$props.interval) ||
                this.$props.interval < 250
            ) {
                this.is_valid = false;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
form:hover {
    //
}
.col {
    padding: 0 0.5em;
}
input {
    width: 100%;
    height: 2rem;
    font-family: var(--mono-font);
    font-size: 0.8em;
    padding: 0 0.5em;
}

.output_file {
}

button {
    display: block;
    font-weight: bold;
    height: 2rem;
    line-height: 0;
}
</style>

