/*
  GET VARS

  Parse and return the vars from vars.json

*/

const fs = require("fs");

function getVars() {
    return JSON.parse(fs.readFileSync('./vars.json', 'utf-8').toString())
}

module.exports = {getVars};