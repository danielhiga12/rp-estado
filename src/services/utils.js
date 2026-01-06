function gerarCPF() {
  let n = [];
  for (let i = 0; i < 9; i++) n.push(Math.floor(Math.random()*10));
  let d1 = (n[0]*10+n[1]*9+n[2]*8+n[3]*7+n[4]*6+n[5]*5+n[6]*4+n[7]*3+n[8]*2) % 11;
  d1 = d1 < 2 ? 0 : 11 - d1;
  let d2 = (n[0]*11+n[1]*10+n[2]*9+n[3]*8+n[4]*7+n[5]*6+n[6]*5+n[7]*4+n[8]*3+d1*2) % 11;
  d2 = d2 < 2 ? 0 : 11 - d2;
  return `${n.join("")}${d1}${d2}`;
}

function calcularIdade(dob) {
  const hoje = new Date();
  const nasc = new Date(dob);
  let idade = hoje.getFullYear() - nasc.getFullYear();
  const m = hoje.getMonth() - nasc.getMonth();
  if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;
  return idade;
}

module.exports = { gerarCPF, calcularIdade };

