<template>
    <div class="col">
        <div class="row no-gutters">
            <div class="menu-wrapper col">
                <div class="row"><router-link class="col" to="/"><font-awesome-icon icon="home"/> Home</router-link></div>
                <div class="row"><router-link class="col" to="stream"><font-awesome-icon icon="podcast"/> Stream</router-link></div>
                <div class="row"><router-link class="col" to="chat"><font-awesome-icon icon="comments"/> Chat</router-link></div>
                <div class="row"><router-link class="col" to="social"><font-awesome-icon icon="bullhorn"/> Social</router-link></div>
                <div class="row"><router-link class="col" to="labels"><font-awesome-icon icon="file"/> Labels</router-link></div>
                <!-- <div class="row"><router-link class="col-12" to="extensions"><font-awesome-icon icon="puzzle-piece"/> Extensions</router-link></div> -->
                <div class="row"><router-link class="col" to="config"><font-awesome-icon icon="cog"/> Config</router-link></div>
            </div>
        </div>
    </div>
</template>
<!-- ----------------------------------- -->
<script>
export default {
    name: "vixxen-menu",
    methods: {
        open(link) {
            this.$electron.shell.openExternal(link);
        }
    }
};
</script>
<!-- ----------------------------------- -->
<style lang="scss">
.menu-wrapper {
    /* display: flex; */
    /* flex-direction: column; */
    /* width: 100%; */
}
a {
    color: white;
    text-decoration: none;
    padding: 1em;
    padding-left: 1em;
    padding-right: 1em;
    background: rgba(255, 255, 255, 0.2);
    text-transform: uppercase;
}

a svg {
    margin-right: 0.5em;
}

a:hover {
    color: white;
    background: rgba(255, 0, 255, 0.2);
    text-decoration: none;
}
a.router-link-exact-active {
    color: violet;
    background: rgba(255, 0, 255, 0.2);
}

.menu-wrapper div {
    white-space: nowrap;
    overflow: hidden;
}
</style>
