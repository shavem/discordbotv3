// The MESSAGE event runs anytime a message is received
// Note that due to the binding of client to every event, every event
// goes `client, other, args` when this function is run.

const fs = require("fs");



module.exports = async (client, message) => {
    // Grab the container from the client to reduce line length.
    if (message.author.bot) return;

    if (message.content.indexOf(client.container.vars.prefix) === 0) {
        const args = message.content.slice(client.container.vars.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        let cmd = undefined;
        if (client.container.commands.has(command)) {
            cmd = client.container.commands.get(command);
        } else if (client.container.aliases.has(command)) {
            cmd = client.container.commands.get(client.container.aliases.get(command));
        } else {
            return;
        }

        try {
            await cmd.run(client, message, args);
            client.container.logger.log(`${message.author.username} ran command ${cmd.help.name}`, "cmd");
        } catch (e) {
            console.error(e);
            message.channel.send({content: `There was a problem with your request.\n\`\`\`${e.message}\`\`\``})
                .catch(e => console.error("An error occurred replying on an error", e));
        }
    } else if (client.container.vars.openfire) {
        for (const target of client.container.vars.targets) {
            if (message.author.id === target.user.match(/\d+/g)[0]) {
                if (Math.random() < client.container.vars.rateoffire) {
                    if (Math.random() < 0.25) {
                        for (const letter of target.emoteMessage) {
                            await message.react(letter);
                        }
                    } else {
                        await message.reply(target.message);
                    }
                }
            }
        }
    }

};