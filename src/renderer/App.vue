<template>
    <div id="app" class="container-fluid h-100">
        <div class="row col-12 p-0 no-gutters">
            <NavBar/>
        </div>

        <div class="row col-12 p-0 no-gutters">
            <StatusBar/>
        </div>

        <div class="primary-container row col-12 p-0 no-gutters">
            <div id="app-content" class="col">
                <div class="content-area row no-gutters">
                    <router-view class="col-12 h-100"></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<!-- ----------------------------------- -->
<script>
import VixxenMenu from "./components/UI/Menu";
import StatusBar from "./components/UI/StatusBar";
import NavBar from "./components/UI/NavBar";

export default {
    name: "Vixxen",
    components: {
        VixxenMenu,
        StatusBar,
        NavBar
    }
};
</script>
<!-- ----------------------------------- -->
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700");
@import url("https://fonts.googleapis.com/css?family=Oxygen+Mono");

:root {
    // --primary_color: #3300ff;
    // --primary_accent: #7700ff;
    // --secondary_color: #ccff00;

    --primary_color: #aaa;
    --primary_accent: #fff;

    --primary_foreground_color: black;

    --accent-color: #6441a4;

    --base-font: "Roboto Condensed", sans-serif;
    --mono-font: "Oxygen Mono";
}

input {
    color: black;
}

textarea {
    font-family: var(--mono-font);
}

body {
    width: 100vw;
    height: 100%;
    font-family: var(--base-font);
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 12pt;
}

hr {
    border: 1px dashed black;
    width: 100%;
}

.bg-info {
    background-color: var(--accent-color) !important;
}

#app {
    /* height: 100%; */
    color: var(--primary_foreground_color);
    padding: 0;
    background: radial-gradient(
        ellipse at top left,
        var(--primary_color) 40%,
        var(--primary_accent) 100%
    );

    h1 {
        color: var(--accent-color);
        font-weight: bold;
    }
    h1 > svg {
        color: black;
    }

    .input-group-text {
        font-weight: bold;
        min-width: 7em;
        color: var(--accent-color);
    }
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
    background: rgba(0, 0, 0, 0.25);
}

#app-content {
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
    max-width: 1920px;
    margin-left: auto;
    margin-right: auto;
}

.content-area {
    flex: 1 1 auto;
}

.primary-container {
    @media (min-width: 767px) {
        height: 100%;
    }
}

input[type="text"] {
    border: 0;
}

input::placeholder {
    font-family: sans-serif;
    font-style: italic;
    font-size: 0.8rem;
    opacity: 0.5;
}
input:disabled {
    background: lightgray;
}
</style>
