const fs = require("fs");
const path = "./src/data/rgs.json";
const { gerarCPF, calcularIdade } = require("../../services/utils");

let rgs = {};
if (fs.existsSync(path)) rgs = JSON.parse(fs.readFileSync(path));

module.exports = {
  name: "setrg",
  description: "Cadastra seu RG",
  async execute(interaction) {
    const nome = interaction.options.getString("nome");
    const dob = interaction.options.getString("nascimento");
    const genero = interaction.options.getString("genero");
    const estadoCivil = interaction.options.getString("estadocivil");

    const idade = calcularIdade(dob);
    const cpf = gerarCPF();

    rgs[interaction.user.id] = { nome, dob, idade, genero, estadoCivil, cpf };
    fs.writeFileSync(path, JSON.stringify(rgs, null, 2));

    interaction.reply(`RG cadastrado!\nNome: ${nome}\nIdade: ${idade}\nCPF: ${cpf}`);
  }
};

