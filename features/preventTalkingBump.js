module.exports = (client) => {
  const bumpChannel = "1051694989677166622";
  client.on("messageCreate", (message) => {
    if (message.author.bot) return false;
    if (message.channel.id === bumpChannel) {
      message.delete();
    }
  });
};
