<template>
    <b-container fluid>
        <b-row class="status-bar">
            <b-col cols="2">
                <b-row style="white-space: nowrap">
                    <label>Twitch:</label>
                    <span @click="openExternal( 'https://twitch.tv/' + getTwitchUser )">{{ getTwitchUser }}</span>
                </b-row>
            </b-col>
            <b-col @click="toggleLabels" class="status-btn-labels">
                <label>Labels:</label>
                <span v-if="getLabelState">On</span><span v-else>Off</span>
                <b-alert
                    :show="label_countdown"
                    :variant="getLabelState?'success':'danger'"
                    @dismiss-count-down="label_alert_done">
                    Labels
                        <span v-if="getLabelState">enabled</span>
                        <span v-else>disabled</span>
                </b-alert>
            </b-col>
        </b-row>
    </b-container>
</template>
<!-- ----------------------------------- -->
<script>
import { mapGetters } from "vuex";
import EventBus from "../../EventBus";

export default {
    name: "StatusBar",
    data: function() {
        return {
            label_countdown: 0
        };
    },
    computed: {
        ...mapGetters(["getTwitchUser", "getLabelState"])
    },
    methods: {
        label_alert_done() {
            this.label_countdown = 0;
        },
        toggleLabels() {
            this.label_countdown = 1;

            if (this.getLabelState === true) {
                this.$labelManager.disable();
            } else {
                this.$labelManager.enable();
            }
            this.$forceUpdate();
        }
    }
};
</script>
<!-- ----------------------------------- -->
<style lang="scss" scoped>
.status-bar {
    width: 100%;
    background: lightgray;
    color: black;
    font-family: var(--mono-font);
    font-size: 0.8em;
    padding: 0 1em;
    width: 100%;
    line-height: 1.5em;
    height: 1.5em;

    .status-btn-labels > label,
    .status-btn-labels {
        cursor: pointer !important;
    }

    label {
        font-weight: bold;
        color: var(--accent-color);
        text-transform: uppercase;
        padding-right: 0.5em;
    }
}
</style>
