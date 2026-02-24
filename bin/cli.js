#!/usr/bin/env node

/**
 * @file cli.js
 * @description Script de automação para deploy de estruturas NextJS 16
 * @author Leonardo Firme
 */

const { execSync } = require('child_process');
const path = require('path');

function run() {
    // Pegamos o nome do projeto ou definimos o diretório atual
    const projectName = process.argv[2] || '.';
    const repo = "LeonardoFirme/deploy-nextjs16";

    console.log("\x1b[34m%s\x1b[0m", "--- Estruturas Leonardo Firme: Inicializando ---");

    try {
        console.log(`Clonando estrutura de ${repo}...`);
        // Usando degit para baixar a estrutura sem o histórico do git
        execSync(`npx degit ${repo} ${projectName}`, { stdio: 'inherit' });

        console.log("\x1b[32m%s\x1b[0m", `\nSucesso! Estrutura instalada.`);
        console.log("\nPróximos passos:");
        if (projectName !== '.') console.log(`  cd ${projectName}`);
        console.log(`  npm install`);
        console.log(`  npm run dev`);
    } catch (error) {
        console.error("Erro ao clonar estrutura. Verifique se o diretório está vazio.");
        process.exit(1);
    }
}

run();