/* let nome;
let xp; */

const readline = require("readline");

const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getNome() {
  return new Promise((resolve) => {
    leitor.question("Digite o NOME do seu personagem: ", async (answer) => {
      let nome = answer.trim();
      if (answer === '' || !/^(?=.*[a-zA-Z])[a-zA-Z0-9]+$/.test(answer)) {
        console.log('NOME INVÁLIDO...');
        await getNome();
      }
      resolve(nome);
    });
    
  });
}

function getXp() {
  return new Promise((resolve) => {
    leitor.question("Digite a XP do seu personagem: ", (answer) => {
      let xp = parseInt(answer.trim());
      if (isNaN(xp) || xp < 0) {
        console.log("XP inválida. Por favor, digite novamente.");
        getXp().then(resolve);
      } else {
        resolve(xp);
      }
    });
    
  });
}

function setNivel(xp) {
  if (xp < 1000) return "Ferro";
  else if (xp >= 1001 && xp <= 2000) return "Bronze";
  else if (xp >= 2001 && xp <= 5000) return "Prata";
  else if (xp >= 5001 && xp <= 7000) return "Ouro";
  else if (xp >= 7001 && xp <= 8000) return "Platina";
  else if (xp >= 8001 && xp <= 9000) return "Ascendente";
  else if (xp >= 9001 && xp <= 10000) return "Imortal";
  else if (xp >= 10001) return "Radiante";
}



function getInfo(nome, nivel) {
  console.log();
  console.log("---------------------------------------------------");
  console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
  console.log("---------------------------------------------------");
  console.log();
}


async function setFicha () {
  let nome = await getNome();
  let xp = await getXp();  
  let nivel = setNivel(xp);  
  leitor.close();
  getInfo(nome, nivel);
}
function main() {
  let ficha = true
  // ARRUMAR
  while(ficha){
    console.log('DESEJA PREENCHER OUTRO PERSONAGEM E DESCARTAR O ATUAL?');
  }
}

main();
