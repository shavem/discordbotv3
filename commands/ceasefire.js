const {writeVars} = require("../modules/functions/writeVars");
exports.run = async (client, message, args, level) => {
    client.container.vars.openfire = false
    writeVars(client);
    message.channel.send("CEASE FIRE! CEASE FIRE!");
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["peace"],
    permLevel: "User"
};

exports.help = {
    name: "ceasefire",
    category: "Wartime",
    description: "Stops listening for targets",
    usage: "ceasefire"
};