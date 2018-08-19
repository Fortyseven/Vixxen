<template>
    <div id="app" class="container-fluid h-100">
        <div class="row col-12 p-0 no-gutters">
            <StatusBar></StatusBar>
        </div>
        <div class="row col-12 p-0 no-gutters h-100">
            <div id="app-menu" class="col-12 col-md-2 col-lg-1">
                <VixxenMenu/>
            </div>
            <div id="app-content" class="col">
                <div class="content-area container row no-gutters">
                    <router-view class="col-12 h-100"></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VixxenMenu from "./components/UI/Menu";
import StatusBar from "./components/UI/StatusBar";

export default {
    name: 'Vixxen',
    components: {
        VixxenMenu,
        StatusBar
    }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
    :root {
        --primary_color: #3300FF;
        --primary_accent: #7700FF;
        --secondary_color: #ccff00;
        --twitch-purple: #6441A4;
    }

    input {
        color: black;
    }

    body {
        width: 100vw;
        height: 100%;
        font-family: 'Source Sans Pro', sans-serif;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-size: 12pt;
    }

    #app {
        /* height: 100%; */
        color: white;
        padding: 0;
        background: radial-gradient(
            ellipse at top left,
            var(--primary_color) 40%,
            var(--primary_accent) 100%
        );
    }

    #app > .row {
        /* height: 100%; */
    }

    #ComponentContainer {
        /* margin: 0.75rem; */
    }

    #app-menu {
        /* flex: 0 0 auto; */
        /* height: 100%; */
        background: rgba(0,0,0,0.25);

    }

    #app-content {
        padding:0.75rem;
        display: flex;
        flex-direction: column;
    }

    .content-area {
        flex: 1 1 auto;
    }

</style>
