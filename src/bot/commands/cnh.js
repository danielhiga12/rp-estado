const fs = require("fs");
const path = "./src/data/cnhs.json";
let cnhs = {};
if (fs.existsSync(path)) cnhs = JSON.parse(fs.readFileSync(path));

module.exports = {
  name: "cnh",
  description: "Mostra CNH do usuário",
  async execute(interaction) {
    const userId = interaction.options.getUser("usuario")?.id || interaction.user.id;
    const cnh = cnhs[userId];
    if (!cnh) return interaction.reply("Usuário não possui CNH cadastrada.");
    interaction.reply(`Categoria: ${cnh.categoria}\nEmissão: ${cnh.emissao}\nValidade: ${cnh.validade}\nCargo: ${cnh.cargoPermitido}`);
  }
};

