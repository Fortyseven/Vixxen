export default {
    state: {
        twitch_user: "XXX"
    },
    getters: {
        getTwitchUser: state => {
            return state.twitch_user;
        }
    },
    mutations: {
        setTwitchUser: (state, payload) => {
            state.twitch_user = payload;
        }
    }
};