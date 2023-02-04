module.exports = {
  category: "Testing",
  description: "Pong!",

  slash: true,
  testOnly: true,

  callback: ({ interaction, client }) => {
    interaction.reply({
      content: "Pong!",
      ephemeral: true,
    });
  },
};
