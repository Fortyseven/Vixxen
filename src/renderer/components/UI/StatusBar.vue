<template>
    <div class="status-bar">
        <label class="twitch-purple">Twitch:</label> <span @click="openExternal( 'https://twitch.tv/' + getTwitchUser )">{{ getTwitchUser }}</span>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'StatusBar',
    computed: mapGetters([
        'getTwitchUser'
    ])
    // computed: {
    //      twitch_user() { return this.$store.state.twitch_user; }
    // }
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
