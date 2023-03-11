const { EmbedBuilder } = require("discord.js");

module.exports = client => {
    client.on("interactionCreate", async (interaction) => {
        if (interaction.isButton()) {
            var id = interaction.customId;

            if (id === "howToSlay") {
                var howToSlayEmbed = new EmbedBuilder()
                    .setColor("ff73fa")
                    .setDescription("Don't worry, you aren't left out. You can slay by simply using the </slay:1071484135882899476> command. There is a catch though! You need to have the <@&1065776474285690961> role and you have to use the command in the <#1036344931721154680> channel. There is also a cooldown for each member on this command, the time may vary.")
                interaction.reply({
                    embeds: [howToSlayEmbed],
                    ephemeral: true,
                });
            }

            if (id === "openTicket") {
                let channel = message.guild.channels.cache.find(channel => channel.name === 'support');
                const thread = await channel.threads.create({
                    name: 'ticket-' + Math.floor(Math.random() * 9000000000000) + 1000000000000,
                    type: ChannelType.PrivateThread,
                    reason: 'Support Ticket',
                });
            }
        }
    });
};