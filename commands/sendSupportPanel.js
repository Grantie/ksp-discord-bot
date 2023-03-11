const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { CommandType } = require("wokcommands");
module.exports = {
    description: "Send the support panel message.",
    category: "Utility",

    type: CommandType.SLASH,

    callback: ({ interaction, client }) => {
        const embed = new EmbedBuilder()
            .setColor("2b2d31")
            .setDescription(`**Support!**\nHello! If you would like to talk to the owner privatly. Please open a ticket!`)
        const row = new ActionRowBuilder().setComponents(
            new ButtonBuilder()
                .setCustomId("openTicket")
                .setLabel("Open Ticket")
                .setStyle("Secondary")
        );
        client.channels.cache.get(interaction.channelId).send({
            embeds: [embed],
            components: [row],
        });
        interaction.reply({
            content: "Message sent!",
            ephemeral: true,
        });
    },
}