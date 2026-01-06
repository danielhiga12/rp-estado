require("dotenv").config();
const { Client, GatewayIntentBits, Collection } = require("discord.js");
const fs = require("fs");
const path = require("path");
const startApi = require("../api/server");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Coleção de comandos
client.commands = new Collection();
const commandFiles = fs.readdirSync(path.join(__dirname, "commands")).filter(f => f.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

// Evento de interação
client.on("interactionCreate", async interaction => {
  if (!interaction.isCommand()) return;
  const command = client.commands.get(interaction.commandName);
  if (!command) return;
  try { command.execute(interaction); } 
  catch (err) { console.error(err); interaction.reply("Erro ao executar comando."); }
});

// Evento ready
client.once("ready", () => {
  console.log(`Bot online: ${client.user.tag}`);
});

startApi(); // inicia site
client.login(process.env.DISCORD_TOKEN);
