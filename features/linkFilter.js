const { EmbedBuilder } = require("discord.js");
module.exports = client => {
    client.on("messageCreate", (message) => checkMsg(message));
    client.on("messageUpdate", (oldMessage, newMessage) => checkMsg(newMessage));

    function checkMsg(msg) {
        if (msg.author.bot) return false;
        if (msg.author.id !== "874730179468079159") {
            const blocked = ["https://", "http://", "discord.gg/"];

            for (let i = 0; i < blocked.length; i++) {
                var checkWord = blocked[i];

                if (msg.content.toLowerCase().includes(checkWord)) {
                    msg.delete();
                    var embed = new EmbedBuilder()
                        .setColor("ff0000")
                        .setDescription(`<@${msg.author.id}> (${msg.author.username}#${msg.author.discriminator}), links aren't allowed in this server without special permission. Please keep this community fun and safe for everyone!`)
                    msg.channel.send({
                        content: `<@${msg.author.id}> (${msg.author.username}#${msg.author.discriminator})`,
                        embeds: [embed],
                    }).then((sentMsg) => {
                        setTimeout(() => {
                            sentMsg.delete();
                        }, 30 * 1000);
                    });
                }
            }
        }
    }
}