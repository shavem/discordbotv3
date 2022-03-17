/*
  TO PROPER CASE

  Returns a proper-cased string such as:
  toProperCase("Mary had a little lamb") returns "Mary Had A Little Lamb"

*/

function toProperCase(string) {
    return string.replace(/([^\W_]+[^\s-]*) */g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

module.exports = {toProperCase};