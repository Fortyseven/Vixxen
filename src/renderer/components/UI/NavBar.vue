<template>
    <b-navbar toggleable="md" type="dark" variant="info" style="width:100%">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand to="/">Vixxen</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
                <b-nav-item to="stream"><font-awesome-icon icon="podcast"/> Stream</b-nav-item>
                <b-nav-item to="chat"><font-awesome-icon icon="comments"/> Chat</b-nav-item>
                <b-nav-item to="social"><font-awesome-icon icon="bullhorn"/> Social</b-nav-item>
                <b-nav-item to="labels"><font-awesome-icon icon="file"/> Labels</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item to="config"><font-awesome-icon icon="cog"/> Config</router-link></b-nav-item>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>
<!-- ----------------------------------- -->
<script>
</script>
<!-- ----------------------------------- -->
<style lang="scss" scoped>
</style>
