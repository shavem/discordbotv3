/*
  WRITE VARS

  Update vars.json

*/

const fs = require("fs");
const logger = require("../logger.js");

function writeVars(client) {
    fs.writeFile('./vars.json', JSON.stringify(client.container.vars, null, 4), (err) => {
        if (err) {
            throw err;
        }
        logger.log("Vars are saved.");
    });
}


module.exports = {writeVars};