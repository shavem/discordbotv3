const {writeVars} = require("../modules/functions/writeVars");
exports.run = async (client, message, args, level) => {
    if (args.length < 1) {
        message.channel.send("You must specify a user");
        return;
    } else if (args.length < 2) {
        for (let i = 0; i < client.container.vars.targets.length; i++) {
            if (client.container.vars.targets[i].user === args[0]) {
                client.container.vars.targets.splice(i, 1);
                i--;
            }
        }
        message.channel.send(`Neutralized ${args[0]}`);
    }
    else {
    //    Remove a specific target message
        try {
            client.container.vars.targets.splice(client.container.vars.targets.findIndex(target => target.user === args[0] && target.message === args[1]), 1);
            writeVars(client);
            message.channel.send(`Neutralized ${args[0]} - ${args[1]}`);
        } catch (e) {

            message.channel.send(`Could not find ${args[0]} - ${args[1]}`);
            return;
        }
    }
    writeVars(client);
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "neutralize",
    category: "Wartime",
    description: "Neutralizes a threat and removes a message from a target (if specified)",
    usage: "neutralize <user> [message]"
};