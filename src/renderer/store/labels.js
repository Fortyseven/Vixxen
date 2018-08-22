export default {
    state: {
        labels_enabled: false,
        labels: {
            'date': {
                value: "$TIME",
                output_file: "D:\Home\Stream\_Apps\Snaz\TextFiles\Time.txt",
                interval: 1000
            }
        }
    },
    getters: {
        getLabels: state => {
            return state.labels;
        },
        getLabelState: state => {
            return state.labels_enabled;
        }
    },
    mutations: {
        addLabel(state, payload) {
            let obj = {
                value: payload.value.trim(),
                output_file: payload.output_file.trim(),
                interval: payload.interval
            };
            state.labels[payload.id] = obj;
        },
        removeLabel(state, id) {
            delete state.labels[id];
        },
        setLabelState(state, bool)  {
            state.labels_enabled = bool;
        }
    }
};