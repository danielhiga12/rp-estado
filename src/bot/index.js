require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

console.log("INICIANDO BOT...");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log("BOT CONECTADO COM SUCESSO");
});

client.login(process.env.DISCORD_TOKEN);
