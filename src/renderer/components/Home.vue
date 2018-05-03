<template>
  <div id="wrapper">
    <main>
      <div class="left-side">
        <span class="title">
            {{some_foo}}
        </span>
      </div>
    </main>
  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation';

  export default {
    name: 'landing-page',
    components: { SystemInformation },
    computed: {
        some_foo() {
            debugger;
            return this.$store.getters.Pants.some_foo;            
        }
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  };
</script>

<style>

</style>
