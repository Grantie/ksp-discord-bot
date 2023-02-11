const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { CooldownTypes } = require("wokcommands");
module.exports = {
    description: "Allows you to slay the day away!",
    category: "Fun",

    slash: true,
    testOnly: true,

    cooldowns: {
        type: CooldownTypes.perUserPerGuild,
        duration: "4 h",
    },

    callback: ({ interaction, client }) => {
        const embed = new EmbedBuilder()
            .setColor("ff73fa")
            .setDescription(`**Slay!**\n<@${interaction.user.id}> (${interaction.user.username}#${interaction.user.discriminator}) has slayed the day away!`)
        const row = new ActionRowBuilder().setComponents(
            new ButtonBuilder()
                .setCustomId("howToSlay")
                .setLabel("How Can I Slay?")
                .setEmoji("🥺")
                .setStyle("Danger")
        );
        interaction.reply({
            embeds: [embed],
            components: [row],
        });
    },
}