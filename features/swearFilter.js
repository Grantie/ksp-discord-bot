const { EmbedBuilder } = require("discord.js");
module.exports = client => {
    client.on("messageCreate", (message) => checkMsg(message));
    client.on("messageUpdate", (oldMessage, newMessage) => checkMsg(newMessage));

    function checkMsg(msg) {
        const blockedWords = ["fuck", "bitch", "nigg", "shit", "dick"];

        for (let i = 0; i < blockedWords.length; i++) {
            var checkSwearWord = blockedWords[i];

            if (msg.content.toLowerCase().includes(checkSwearWord)) {
                msg.delete();
                var embed = new EmbedBuilder()
                    .setColor("ff0000")
                    .setDescription(`<@${msg.author.id}> (${msg.author.username}#${msg.author.discriminator}), do not send swear words or try to bypass swearing filters. Please try to keep this community fun and safe for everyone!`)
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