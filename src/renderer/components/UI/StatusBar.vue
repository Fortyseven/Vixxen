<template>
    <div class="status-bar">
        <label class="twitch-purple">Twitch:</label> <span @click="openExternal( 'https://twitch.tv/' + getTwitchUser )">{{ getTwitchUser }}</span>
        <label @click="toggleLabels" class="twitch-purple">Labels:</label> <span v-if="getLabelState">On</span><span v-else>Off</span></label>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import EventBus from '../../EventBus';

export default {
    name: 'StatusBar',
    computed: {
        ...mapGetters([
            'getTwitchUser',
            'getLabelState'
        ]),
    },
    methods: {
        toggleLabels() {
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


<style lang="scss" scoped>
    .status-bar {
        color: red;
        width: 100%;
        background: lightgray;
        color: black;
        font-family: 'VT323', monospace;
        font-size: 1.2rem;
        padding: 0.2rem;
        width: 100%;
        line-height: 1rem;
        height: 1.5rem;

        label {
            font-weight: bold;
            color: black;
            text-transform: uppercase;
        }

        .twitch-purple {
            color: var(--twitch-purple);
        }
    }
</style>
