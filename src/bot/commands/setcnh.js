const fs = require("fs");
const path = "./src/data/cnhs.json";
let cnhs = {};
if (fs.existsSync(path)) cnhs = JSON.parse(fs.readFileSync(path));

module.exports = {
  name: "setcnh",
  description: "Cadastra CNH (apenas cargos permitidos)",
  async execute(interaction) {
    const cargoPermitido = ["Polícia Militar","Polícia Civil","PRF","PF","Polícia do Exército"];
    const userCargo = interaction.options.getString("cargo");
    if (!cargoPermitido.includes(userCargo)) return interaction.reply("Você não tem permissão para cadastrar CNH.");

    const categoria = interaction.options.getString("categoria");
    const emissao = interaction.options.getString("emissao");
    const validade = interaction.options.getString("validade");

    cnhs[interaction.user.id] = { categoria, emissao, validade, cargoPermitido: userCargo };
    fs.writeFileSync(path, JSON.stringify(cnhs, null, 2));

    interaction.reply(`CNH cadastrada!\nCategoria: ${categoria}\nEmissão: ${emissao}\nValidade: ${validade}\nCargo: ${userCargo}`);
  }
};

