// bin/cli.js
/**
 * @file cli.js
 * @description Script de inicialização de estruturas Leonardo Firme.
 * @author Leonardo Firme
 */

const { execSync } = require('child_process');
const path = require('path');

function run() {
    const projectName = process.argv[2] || 'my-professional-app';
    const repo = "LeonardoFirme/deploy-nextjs16";

    console.log("\x1b[34m%s\x1b[0m", "--- Estruturas Leonardo Firme: Inicializando ---");

    try {
        // Usando degit para baixar a estrutura de pastas sem o .git
        console.log(`Clonando estrutura de ${repo}...`);
        execSync(`npx degit ${repo} ${projectName}`, { stdio: 'inherit' });

        console.log("\x1b[32m%s\x1b[0m", `Sucesso! Estrutura instalada em: ./${projectName}`);
        console.log("\nPróximos passos:");
        console.log(`  cd ${projectName}`);
        console.log(`  npm install`);
        console.log(`  npm run dev`);
    } catch (error) {
        console.error("Erro ao clonar estrutura. Verifique sua conexão ou o nome do repositório.");
        process.exit(1);
    }
}

run();