/*
  GET VARS

  Parse and return the vars from vars.json

*/

const fs = require("fs");
const logger = require("../logger");

function getVars() {
    logger.log(process.cwd())
    return JSON.parse(fs.readFileSync(`${process.cwd()}/vars.json`, 'utf-8').toString())
}

module.exports = {getVars};