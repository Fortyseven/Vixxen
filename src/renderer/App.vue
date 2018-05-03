<template>
  <div id="app">
        <div id="app-menu">
            <VixxenMenu/>
        </div>
        <div id="app-content">
            <router-view></router-view>
        </div>
  </div>
</template>

<script>
    import VixxenMenu from "./components/UI/Menu";

  export default {
    name: 'Vixxen',
    components: {
        VixxenMenu
    }
  }
</script>

<style>

    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
    :root {
        --primary_color: #3300FF;
        --primary_accent: #7700FF;
        --secondary_color: #ccff00;
    }
    * {
        font-family: 'Source Sans Pro', sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    input {
        color: black;
    }

    body {
        /*background: #6600FF;*/
        width: 100vw;
        height: 100vh;
    }

    #app {
        width: 100%;
        height: 100%;
        color: white;
        background: radial-gradient(
            ellipse at top left,
            var(--primary_color) 40%,
            var(--primary_accent) 100%
        );        
        /* padding: 1em; */
        display: flex;
    }

    #app-menu {
        flex: 0 0 auto;
        background: rgba(0,0,0,0.25);        

    }

    #app-content {
        flex: 1 1 auto;
    }

</style>
