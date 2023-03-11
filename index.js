const { Client, IntentsBitField, Partials } = require("discord.js");
const wok = require("wokcommands");
const path = require("path");
require("dotenv").config();
require("mongoose").set('strictQuery', false);

const { initializeApp } = require("firebase/app");
const firebaseConfig = {
  apiKey: "AIzaSyB-BB__LKBuF2Zir1xwfW1iYA4s-Xi_ckw",
  authDomain: "ksp-discord-bot.firebaseapp.com",
  projectId: "ksp-discord-bot",
  storageBucket: "ksp-discord-bot.appspot.com",
  messagingSenderId: "1007413065780",
  appId: "1:1007413065780:web:64eb5fdc48647ecc2ef261"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.DirectMessages,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.GuildMembers,
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

  require("./features/preventTalkingBump.js")(client);
  require("./features/buttonHandler.js")(client);
  require("./features/counting.js")(client);

  console.log("Bot is online")
});

client.login(process.env.TOKEN);