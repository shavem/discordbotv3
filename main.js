// Discord requirements
const { Client, Intents, Collection} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });

// Environment variables
require("dotenv").config();

// Load logger
const logger = require("./modules/logger.js");

// Support for multi-file command-handler structure
const fs = require("fs");
const {getVars} = require("./modules/functions/getVars");
const commandsCollection = new Collection();
const aliasesCollection = new Collection();


vars = getVars();


client.container = {
    vars: vars,
    commands: commandsCollection,
    logger: logger,
    aliases: aliasesCollection,
}


const init = async () => {

    // Load all commands
    const commands = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"));
    for (const file of commands) {
        const props = require(`./commands/${file}`);
        client.container.logger.log(`Loading Command: ${props.help.name}`, "log");
        client.container.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.container.aliases.set(alias, props.help.name);
        });
    }

    // Load all events
    const eventFiles = fs.readdirSync("./events/").filter(file => file.endsWith(".js"));
    for (const file of eventFiles) {
        const eventName = file.split(".")[0];
        client.container.logger.log(`Loading Event: ${eventName}`, "log");
        const event = require(`./events/${file}`);
        client.on(eventName, event.bind(null, client));
    }

    // Threads are currently in BETA.
    // This event will fire when a thread is created, if you want to expand
    // the logic, throw this in it's own event file like the rest.
    client.on("threadCreate", (thread) => thread.join());

    // Here we login the client.
    await client.login(process.env.DISCORD_TOKEN);

// End top-level async/await function.
};

init();