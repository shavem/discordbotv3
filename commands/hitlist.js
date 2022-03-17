const { pickThumbnail } = require("../modules/functions/pickThumbnail.js")
const { getHitlistFields } = require("../modules/functions/getHitlistFields.js")

exports.run = async (client, message, args, level) => {
    message.channel.send({ embeds: [{
            color: "FF5733",
            author: {
                name: "Hitlist request issued by " + message.author.username,
                icon_url: message.author.avatarURL()
            },
            thumbnail: {
                url: pickThumbnail()
            },
            title: "DA PLAN",
            description: "Herein follow the attack targets",
            fields: getHitlistFields(client.container),
            footer: {
                text: `ROF (rate-of-fire): ${client.container.vars.rateoffire}`
            }
        }]});
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["list", "histlist"],
    permLevel: "User"
};

exports.help = {
    name: "hitlist",
    category: "War Prep",
    description: "Prints the hitlist of all targets and their messages.",
    usage: "hitlist"
};