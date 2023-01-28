const DiscordJS = require("discord.js");
const WOKCommands = require("wokcommands");
const path = require("path");
require("dotenv").config();

const { Intents } = DiscordJS;

const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
  ],
});

client.on("ready", () => {
  const dbOptions = {
    keepAlive: true,
  };

  const wok = new WOKCommands(client, {
    commandsDir: path.join(__dirname, "commands"),
    dbOptions,
    mongoUri: ``,
    testServers: ["749767042785083451"],
    botOwners: ["874730179468079159"],
  });

  const { commandHandler } = wok;

  require("./features/welcome.js")(client);
  require("./features/swearFilter.js")(client);
  require("./features/linkFilter.js")(client);
});

client.login(process.env.TOKEN);