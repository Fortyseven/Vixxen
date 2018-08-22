function hashify(title) {
    let stripped = title.trim().toLowerCase();
    stripped = stripped.replace(/\W/g, "");
    return `#${stripped}`;
};

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ':' + date.getSeconds() +' ' + ampm;
    return strTime;
}

export default function ($state, instring) {
    // Mapping values are either a string referencing the
    // store getter name, or a function returning a value.
    const MAPPINGS = {
        DESCRIPTION: "getStreamDescription",
        GAME: "getStreamGame",
        TWITCH_USER: "getTwitchUser",
        GAME_HASHTAG: () => {
            return hashify($state.getters['getStreamGame'])
        },
        TIME: () => {
            return formatAMPM(new Date());
        }
    }

    // Iterate over mappings and replace with data from
    // the store.

    for (let i in MAPPINGS) {
        let key = "$" + i;

        if (instring.indexOf(key) > -1) {
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