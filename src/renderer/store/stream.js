export default {
    state: {
        stream_game_name: "Far Cry 5",
        stream_description: "This is a game stream.",
        social_twitter_template:
            "$DESCRIPTION\n🔴LIVE 👉👉 '$GAME' @ https://twitch.tv/$TWITCH_USER #twitch $GAME_HASHTAG"
    },
    getters: {
        getStreamGame: state => {
            return state.stream_game_name;
        },
        getStreamDescription: state => {
            return state.stream_description;
        },
        getTwitterTemplate: state => {
            return state.social_twitter_template;
        }
    },
    mutations: {
        setStreamGame: (state, payload) => {
            state.stream_game_name = payload;
        },
        setStreamDescription: (state, payload) => {
            state.stream_description = payload;
        },
        setTwitterTemplate: (state, payload) => {
            state.social_twitter_template = payload;
        }
    }
};
