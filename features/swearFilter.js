module.exports = client => {
    client.on("messageCreate", (message) => checkMsg(message));
    client.on("messageEdit", (oldMessage, newMessage) => checkMsg(newMessage));

    function checkMsg(message) {
        const blockedWords = ["fuck", "bitch", "nigg", "shit", "dick"];

        for (let i = 0; i < blockedWords.length; i++) {
            var checkSwearWord = blockedWords[i];

            if (message.content.toLowerCase().includes(checkSwearWord)) {
                message.delete();
                message.channel.send({
                    content: `<@${message.author.id}> (${message.author.username}#${message.author.discriminator})`,
                    embeds: [{
                        color: "ff0000",
                        description: `<@${message.author.id}> (${message.author.username}#${message.author.discriminator}), do not send swear words or try to bypass swearing filters. Please try to keep this community fun and safe for everyone!`,
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