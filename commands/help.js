const { toProperCase } = require('../modules/functions/toProperCase.js');
const { codeBlock } = require("@discordjs/builders");


exports.run = (client, message, args, level) => {
    // If no specific command is called, show all filtered commands.
    if (!args[0]) {
        // Filter the myCommands collection again to get the enabled commands.
        const enabledCommands = client.container.commands.filter(cmd => cmd.conf.enabled);

        // Here we have to get the command names only, and we use that array to get the longest name.
        const commandNames = [...enabledCommands.keys()];

        // This make the help commands "aligned" in the output.
        const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);

        let currentCategory = "";
        let output = `= Command List =\n[Use ${client.container.vars.prefix}help <commandname> for details]\n`;
        const sorted = enabledCommands.sort((p, c) => p.help.category > c.help.category ? 1 :
            p.help.name > c.help.name && p.help.category === c.help.category ? 1 : -1 );

        sorted.forEach( c => {
            const cat = toProperCase(c.help.category);
            if (currentCategory !== cat) {
                output += `\u200b\n== ${cat} ==\n`;
                currentCategory = cat;
            }
            output += `${client.container.vars.prefix}${c.help.name}${" ".repeat(longest - c.help.name.length)} :: ${c.help.description}\n`;
        });
        message.channel.send(codeBlock("asciidoc", output));

    } else {
        // Show individual command's help.
        let command = args[0];
        if (client.container.commands.has(command) || client.container.commands.has(client.container.aliases.get(command))) {
            command = client.container.commands.get(command) ?? client.container.commands.get(client.container.aliases.get(command));
            message.channel.send(codeBlock("asciidoc", `= ${command.help.name} = \n${command.help.description}\nusage:: ${command.help.usage}\naliases:: ${command.conf.aliases.join(", ")}`));
        } else return message.channel.send("No command with that name, or alias exists.");
    }};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["h", "halp"],
    permLevel: "User"
};

exports.help = {
    name: "help",
    category: "System",
    description: "Displays all the available commands.",
    usage: "help [command]"
};