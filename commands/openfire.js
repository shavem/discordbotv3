const {writeVars} = require("../modules/functions/writeVars");
exports.run = async (client, message, args, level) => {
    client.container.vars.openfire = true
    writeVars(client);
    message.channel.send("OPENING FIRE!!!");
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["shoot"],
    permLevel: "User"
};

exports.help = {
    name: "openfire",
    category: "Wartime",
    description: "Starts listening for targets",
    usage: "openfire"
};