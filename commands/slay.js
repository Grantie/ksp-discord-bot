const { EmbedBuilder, Embed } = require('discord.js');
const { CooldownTypes } = require("wokcommands");
module.exports = {
    description: "Allows you to slay the day away!",
    category: "Fun",

    slash: true,
    testOnly: true,

    // cooldowns: {
    //     type: CooldownTypes.perUserPerGuild,
    //     duration: "2 h",
    // },

    callback: ({ interaction, client }) => {
        const member = interaction.guild.members.cache.get(interaction.user.id);
        const timestamp = member.guild.joinedTimestamp;
        const date = new Date(timestamp);
        const currentDate = new Date();
        const difference = new Date(date.getTime() - currentDate.getTime());
        const daysDifference = Math.ceil(difference / (1000 * (60 * 60) * 24));
        if (!daysDifference >= -14) {
            const notOldEnoughEmbed = new EmbedBuilder()
                .setColor("ff0000")
                .setDescription(`**Not A Slay!**\nYour account can't slay yet. You must be in this server for at least 2 weeks without leaving to slay. This is to make sure your account isn't spam. **Try again in ${Math.abs(-14 - daysDifference)} days.**`)
            return interaction.reply({
                embeds: [notOldEnoughEmbed],
                ephemeral: true,
            });
        }
        const embed = new EmbedBuilder()
            .setColor("ff73fa")
            .setDescription(`**Slay!**\n<@${interaction.user.id}> (${interaction.user.username}#${interaction.user.discriminator}) has slayed the day away!\nYou can slay the day away by using </${interaction.commandName}:${interaction.commandId}>!\n\n*Psst!* You can only use this command every 2 hours. You are need to have the <@&1065776474285690961> role found in <#908404862356709446>`)

        interaction.reply({
            embeds: [embed],
        });
    },
}