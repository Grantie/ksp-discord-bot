const { EmbedBuilder, ChannelType } = require("discord.js");

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
                let channel = interaction.message.guild.channels.cache.find(channel => channel.name === 'support');
                const id = require("shortid").generate();
                const thread = await channel.threads.create({
                    name: `t•${id}`,
                    type: ChannelType.PrivateThread,
                    reason: 'Support Ticket',
                }).then(async (thread) => {
                    await thread.members.add("874730179468079159");
                    await thread.members.add(interaction.user.id);
                    var supportTicketWelcomeEmbed = new EmbedBuilder()
                        .setColor("2b2d31")
                        .setDescription("**Welcome To Your Ticket!** *Ticket ID: `" + id + "`*\nPlease explain why you created this ticket, and the owner will be able to respond shortly. You may mention any member in this server to add them to this ticket. Thank you!\n\n**:warning: Please do not ping the owner.** Pinging the owner will not allow him to get to your ticket any faster.")
                    thread.send({
                        embeds: [supportTicketWelcomeEmbed],
                    });
                });
            }
        }
    });
};