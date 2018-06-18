function  hashify( title ) {
    let stripped = title.trim().toLowerCase();
    stripped = stripped.replace(/\W/g, "");
    return `#${stripped}`;
};

export default function( $state, instring ) {
    // Mapping values are either a string referencing the
    // store getter name, or a function returning a value.
    const MAPPINGS = {
        DESCRIPTION: "getStreamDescription",
        GAME: "getStreamGame",
        TWITCH_USER: "getTwitchUser",
        GAME_HASHTAG: () => {
            return hashify($state.getters['getStreamGame'])
        }
    }

    // Iterate over mappings and replace with data from
    // the store.

    for(let i in MAPPINGS ) {
        let key = "$" + i;

        if ( instring.indexOf( key ) > -1 ) {
            let getter_name = MAPPINGS[i];
            let value = "";

            if (typeof getter_name === 'function') {
                value = getter_name();
            } else {
                value = $state.getters[getter_name];
            }

            instring = instring.replace(key, value);
        }
    }

    return instring;
}