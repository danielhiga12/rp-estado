const fs = require("fs");
const path = "./src/data/rgs.json";

let rgs = {};
if (fs.existsSync(path)) rgs = JSON.parse(fs.readFileSync(path));

module.exports = {
  name: "rg",
  description: "Mostra seu RG",
  async execute(interaction) {
    const userId = interaction.options.getUser("usuario")?.id || interaction.user.id;
    const rg = rgs[userId];
    if (!rg) return interaction.reply("Usuário não possui RG cadastrado.");
    interaction.reply(`Nome: ${rg.nome}\nIdade: ${rg.idade}\nCPF: ${rg.cpf}\nGênero: ${rg.genero}\nEstado Civil: ${rg.estadoCivil}`);
  }
};

