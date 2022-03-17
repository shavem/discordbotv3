const {writeVars} = require("../modules/functions/writeVars");
exports.run = async (client, message, args, level) => {
    client.container.vars.targets.splice(0, client.container.vars.targets.length);
    writeVars(client);
    message.channel.send("Held a convention that cleared all targets");
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["convention", "cleanslate"],
    permLevel: "User"
};

exports.help = {
    name: "geneva",
    category: "Wartime",
    description: "Removes all users from the list of targets",
    usage: "geneva"
};