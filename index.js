const { Client, IntentsBitField, Partials } = require("discord.js");
const wok = require("wokcommands");
const path = require("path");
require("dotenv").config();
require("mongoose").set('strictQuery', false);

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.DirectMessages,
    IntentsBitField.Flags.MessageContent,
  ],
  partials: [Partials.Channel],
});

client.on("ready", () => {
  const dbOptions = {
    keepAlive: true,
  };

  new wok({
    client,
    commandsDir: path.join(__dirname, "commands"),
    dbOptions,
    mongoUri: `mongodb+srv://kspDiscordBot:${process.env.PASS}@bot.haumy.mongodb.net/kspBot?retryWrites=true&w=majority`,
    testServers: ["749767042785083451"],
    botOwners: ["874730179468079159"],
  });

  require("./features/welcome.js")(client);
  require("./features/swearFilter.js")(client);
  require("./features/linkFilter.js")(client);
  require("./features/preventTalkingBump.js")(client);

  console.log("Bot is online")
});

client.login(process.env.TOKEN);