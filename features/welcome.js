const { EmbedBuilder } = require("discord.js");
module.exports = (client) => {
  const chatChannel = "1036344931721154680";
  const welcomeChannel = "1036344394414039141";

  client.on("guildMemberAdd", (member) => {
    var embed = new EmbedBuilder()
      .setColor("ff73fa")
      .setDescription(
        `<@${member.user.id}> (${member.user.username}#${member.user.discriminator}) has joined ${member.guild.name}. Give them a warm welcome! <a:t_love:904146480305152031>`
      );
    var content = `<@${member.user.id}> (${member.user.username}#${member.user.discriminator})`;
    member.guild.channels.cache.get(chatChannel).send({
      content: content,
      embeds: [embed],
    });

    member.guild.channels.cache.get(welcomeChannel).send({
      content: content,
      embeds: [embed],
    });
  });
};
