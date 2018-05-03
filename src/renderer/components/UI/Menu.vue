<template>
  <div id="wrapper">
        <div class="menu-wrapper">
            <router-link to="/"><font-awesome-icon icon="home"/> Home</router-link>
            <router-link to="social-test"><font-awesome-icon icon="podcast"/> Stream</router-link>
            <router-link to="social-test"><font-awesome-icon icon="bullhorn"/> Social</router-link>
            <router-link to="social-test"><font-awesome-icon icon="file"/> Labels</router-link>
            <router-link to="social-test"><font-awesome-icon icon="puzzle-piece"/> Extensions</router-link>
            <router-link to="social-test"><font-awesome-icon icon="cog"/> Config</router-link>
        </div>
  </div>
</template>


<script>
  export default {
    name: 'vixxen-menu',
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  };
</script>


<style>
    .menu-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
   }
    a {
        color: white;
        text-decoration: none;
        padding:1em;
        padding-left: 1em;
        padding-right: 1em;
        background: rgba(255,255,255,0.2);
        text-transform: uppercase;
    }

    a svg {
        margin-right: 0.5em;
    }


    a.router-link-exact-active {
        color: violet;
        background: rgba(255,0,255,0.2);
    }

</style>
