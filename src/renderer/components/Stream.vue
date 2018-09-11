<template>
    <div id="ComponentContainer">
        <h1><font-awesome-icon icon="podcast"/> Stream</h1>
        <main>
            <div class="left-side">
                <input type="">
            </div>
        </main>
    </div>
</template>
<!-- ----------------------------------- -->
<script>
var shell = require("electron").shell;

export default {
    name: "home",
    //   components: {
    //     SystemInformation
    //   },
    data: () => {
        return {
            isOpen: false
        };
    },
    computed: {
        favorites() {
            return this.$store.getters.getFavorites;
        }
    },
    methods: {
        openLink(link) {
            this.$electron.shell.openExternal(link);
        },
        dialog() {
            return {
                isOpen() {
                    return isOpen;
                },
                open() {
                    this.data().isOpen = true;
                    console.log("Fuck");
                }
            };
        }
    }
};
</script>
<!-- ----------------------------------- -->
<style>
.dlgNewEntry {
    background: red;
}
</style>
