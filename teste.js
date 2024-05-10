const readline = require("readline");

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let nome

function teste() {
    return new Promise((resolve) => {
        leitor.question("Digite o NOME do seu personagem: ", async (answer) => {        
            nome = answer.trim();
            if (answer === '' || !/^(?=.*[a-zA-Z])[a-zA-Z0-9]+$/.test(answer)) { 
                console.log('NOME INVÁLIDO...');               
                await teste()                
            }
            leitor.close();
            resolve()
            
        });
    });
}

async function main() {
    await teste();
    console.log('Nome definido:', nome);
}

main()
