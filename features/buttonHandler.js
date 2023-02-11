const { EmbedBuilder } = require("discord.js");

module.exports = client => {
    client.on("interactionCreate", (interaction) => {
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
        }
    });
};