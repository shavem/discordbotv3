/*
  GET EMOTE MESSAGE

  This is a function that will convert a message into a message composed of emotes
  (primarily regional_indicators), represented by an array.

*/

const letters = {
    a: "🇦",
    b: "🇧",
    c: "🇨",
    d: "🇩",
    e: "🇪",
    f: "🇫",
    g: "🇬",
    h: "🇭",
    i: "🇮",
    j: "🇯",
    k: "🇰",
    l: "🇱",
    m: "🇲",
    n: "🇳",
    o: "🇴",
    p: "🇵",
    q: "🇶",
    r: "🇷",
    s: "🇸",
    t: "🇹",
    u: "🇺",
    v: "🇻",
    w: "🇼",
    x: "🇽",
    y: "🇾",
    z: "🇿",
}

const letters2 = {
    a: "🅰️",
    b: "🅱️",
    m: "Ⓜ",
    o: "🅾️",
    p: "🅿️",
    x: "❌",
}

function getEmoteMessage(message) {
    let emoteMessage = [];
    [...message].forEach(letter => {
        if (letter !== " ") {
            if (emoteMessage.includes(letters[letter.toLowerCase()])) {

                if (Object.keys(letters2).includes(letter.toLowerCase())) {
                    emoteMessage.push(letters2[letter.toLowerCase()]);
                } else {
                    console.log(`Unable to find second emote for letter ${letter}`);
                }
            } else {
                if (Object.keys(letters).includes(letter.toLowerCase())) {
                    emoteMessage.push(letters[letter.toLowerCase()]);
                } else {
                    console.log(`Unable to find emote for letter ${letter}`);
                }
            }
        }
    });
    return emoteMessage;
}

module.exports = {getEmoteMessage};