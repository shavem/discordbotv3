const fs = require("fs");
const logger = require("../modules/logger");
const {writeVars} = require("../modules/functions/writeVars");
const {getVars} = require("../modules/functions/getVars");


exports.run = async (client, message, args, level) => {
    if (args.length < 1) {
        message.channel.send("You must specify a number between 0 and 1");
        return;
    }
    if (args[0] < 0) {
        message.channel.send("You need faster trigger fingers, a number between 0-1 please");
        return;
    }
    if (args[0] > 1) {
        message.channel.send("We couldn't afford the full-auto, a number between 0-1 please");
        return;
    }
    client.container.vars.rateoffire = args[0];
    writeVars(client);
    message.channel.send(`Rate of fire set to ${client.container.vars.rateoffire}`);
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["rof", "firerate"],
    permLevel: "User"
};

exports.help = {
    name: "rateoffire",
    category: "War Prep",
    description: "Sets the percentage of times the bot replies/reacts, default = 0.05",
    usage: "rateoffire <0-1>"
};