function hashify(title) {
    let stripped = title.trim().toLowerCase();
    stripped = stripped.replace(/\W/g, "");
    return `#${stripped}`;
}

export default function($state, instring) {
    // Mapping values are either a string referencing the
    // store getter name, or a function returning a value.
    const MAPPINGS = {
        DESCRIPTION: "getStreamDescription",
        GAME: "getStreamGame",
        TWITCH_USER: "getTwitchUser",
        GAME_HASHTAG: () => {
            return hashify($state.getters["getStreamGame"]);
        },
        HOUR_24: () => {
            return (new Date().getHours() + "").padStart(2, "0");
        },
        HOUR_12: () => {
            return ((new Date().getHours() % 12) + "").padStart(2, "0");
        },
        AMPM: () => {
            return new Date().getHours() >= 12 ? "PM" : "AM";
        },
        ampm: () => {
            return new Date().getHours() >= 12 ? "pm" : "am";
        },
        MIN: () => {
            return (new Date().getMinutes() + "").padStart(2, "0");
        },
        SEC: () => {
            return (new Date().getSeconds() + "").padStart(2, "0");
        },
        YEAR: () => {
            return new Date().getFullYear();
        },
        MON: () => {
            return (new Date().getMonth() + "").padStart(2, "0");
        },
        DATE: () => {
            return (new Date().getDate() + "").padStart(2, "0");
        },
        DOW_3: () => {
            return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
                new Date().getDay()
            ];
        },
        DOW: () => {
            return [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ][new Date().getDay()];
        }
    };

    // Iterate over mappings and replace with data from
    // the store.

    for (let i in MAPPINGS) {
        let key = "$" + i;

        if (instring.indexOf(key) > -1) {
            let getter_name = MAPPINGS[i];
            let value = "";

            if (typeof getter_name === "function") {
                value = getter_name();
            } else {
                value = $state.getters[getter_name];
            }

            instring = instring.replace(key, value);
        }
    }

    return instring;
}
