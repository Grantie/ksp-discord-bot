const { EmbedBuilder, Embed } = require('discord.js');
const { CooldownTypes } = require("wokcommands");
module.exports = {
    description: "Allows you to slay the day away!",
    category: "Fun",

    slash: true,
    testOnly: true,

    cooldowns: {
        type: CooldownTypes.perUserPerGuild,
        duration: "2 h",
    },

    callback: ({ interaction, client }) => {
        const embed = new EmbedBuilder()
            .setColor("ff73fa")
            .setDescription(`**Slay!**\n<@${interaction.user.id}> (${interaction.user.username}#${interaction.user.discriminator}) has slayed the day away!\nYou can slay the day away by using </${interaction.commandName}:${interaction.commandId}>!\n\n*Psst!* You can only use this command every 2 hours. You are need to have the <@&1065776474285690961> role found in <#908404862356709446>`)

        interaction.reply({
            embeds: [embed],
        });
    },
}