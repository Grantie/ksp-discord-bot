module.exports = client => {
    client.on("messageCreate", (message) => checkMsg(message));
    client.on("messageEdit", (oldMessage, newMessage) => checkMsg(newMessage));

    function checkMsg(message) {
        if (message.author.bot) return false;
        if (message.author.id !== "874730179468079159") {
            const blocked = ["https://", "http://", "discord.gg/"];

            for (let i = 0; i < blocked.length; i++) {
                var checkWord = blocked[i];

                if (message.content.toLowerCase().includes(checkWord)) {
                    message.delete();
                    message.channel.send({
                        content: `<@${message.author.id}> (${message.author.username}#${message.author.discriminator})`,
                        embeds: [{
                            color: "ff0000",
                            description: `<@${message.author.id}> (${message.author.username}#${message.author.discriminator}), links aren't allowed in this server without special permission. Please keep this community fun and safe for everyone!`,
                        }],
                        components: [{
                            type: 1,
                            components: [
                                {
                                    style: 5,
                                    label: `Read The Rules`,
                                    url: "https://discord.com/channels/749767042785083451/853327138375598100",
                                    type: 2,
                                    disabled: false,
                                }
                            ]
                        }],
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