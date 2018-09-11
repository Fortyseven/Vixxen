import EventBus from "./EventBus";
var fs = require("fs");

var labelManager = {
    _store: null,
    _labels: [],
    _vue: null,
    _is_running: false,

    /******************************/
    reload() {
        const was_running = this._is_running;

        this.disable(false);
        this._labels = [];

        var label_entries = this._store.getters.getLabels;

        for (var i in label_entries) {
            this._labels[i] = {
                entry: label_entries[i],
                timer: null
            };
        }

        // If we didn't start off paused, then resume
        // the service
        if (was_running) {
            this.enable(false);
        }

        console.info("reloaded labels", this._labels);
    },
    /******************************/
    enable(savestate = true) {
        for (var i in this._labels) {
            this._labels[i].timer = setInterval(
                function() {
                    this._processLabel(this._labels[i].entry);
                }.bind(this),
                this._labels[i].entry.interval
            );
        }
        this._is_running = true;
        if (savestate) {
            this._vue.$store.commit("setLabelState", true);
        }
    },
    /******************************/
    disable(savestate = true) {
        for (var i in this._labels) {
            clearInterval(this._labels[i].timer);
        }
        this._is_running = false;
        if (savestate) {
            this._vue.$store.commit("setLabelState", false);
        }
    },
    /******************************/
    _processLabel(entry) {
        fs.writeFile(
            entry.output_file,
            this._vue.interpolateString(entry.value),
            function(err) {
                EventBus.$emit("error-log", err);
            }
        );
    }
};

export default {
    install(Vue, options) {
        labelManager._store = options.store;
        labelManager._vue = options.app_instance;
        labelManager._is_running =
            labelManager._vue.$store.getters.getLabelState;

        Vue.prototype.$labelManager = labelManager;

        labelManager.reload();
    }
};
