const {getEmoteMessage} = require("../modules/functions/getEmoteMessage");
const {writeVars} = require("../modules/functions/writeVars");


exports.run = async (client, message, args, level) => {
    if (args.length < 2) {
        message.channel.send("You must specify a user and a message");
        return;
    }
    if (client.container.vars.targets.includes(args[0])) {
        let words = "";
        if (args.length > 2){
            words = args.length > 2 ? args.slice(1).join(" ") : args.slice(1);
        } else {
            words = args[1];
        }
        message.channel.send(`Targeting ${message.mentions.users.first().username} with new message: ${words}`);
        client.container.vars.targets[client.container.vars.targets.indexOf(args[0])] = {
            name: message.mentions.users.first().username,
            user: args[0],
            message: words,
            emoteMessage: getEmoteMessage(words),
        };
        return
    }
    let words = "";
    if (args.length > 2){
        words = args.length > 2 ? args.slice(1).join(" ") : args.slice(1);
    } else {
        words = args[1];
    }
    message.channel.send(`Targeting ${args[0]} with message: ${words}`);
    client.container.vars.targets.push({
        name: message.mentions.users.first().username,
        user: args[0],
        message: words,
        emoteMessage: getEmoteMessage(words),
    });
    writeVars(client);
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "target",
    category: "War Prep",
    description: "Adds a user to the list of targets with a target message",
    usage: "target <user> <message>"
};