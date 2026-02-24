### 1. Push da v1.1.3 Estável

Execute os comandos abaixo para consolidar a versão limpa no repositório:

```bash
# Adiciona as mudanças (package.json atualizado e lock limpo)
git add .
git commit -m "release: v1.1.3 - full dependency cleanup and latest updates"

# Sobe para o main
git push origin main

# Cria e sobe a tag oficial
git tag v1.1.3
git push origin v1.1.3

```

---

### 2. Atualização do Projeto Padrão (Deploy)

Agora que o pacote está no ar, vamos atualizar o projeto que os usuários vão baixar.

```bash
cd /var/www/html/deploy-nextjs16

# Limpa para garantir a nova versão
rm -rf node_modules package-lock.json

# Instala a v1.1.3 limpa
npm install @LeonardoFirme/package-npm@1.1.3

```

---

### 3. README.md do Projeto `deploy-nextjs16`

Conforme você pediu, aqui está o README profissional focado nos usuários que vão editar o seu projeto padrão.

```markdown
// README.md
# Deploy NextJS 16+ | Leonardo Firme

### Fala Dev!
Criei esse projeto padrão NextJs 16+ com **Typescript**, **Tailwindcss v4** e o meu **package-npm**.
Você pode baixar e explorar o projeto criando o que você quiser, desde Landing Pages até SaaS profissionais.

---

## 🚀 Como Começar

Este projeto utiliza um pacote privado hospedado no GitHub Packages. Para rodar localmente, siga estes passos:

### 1. Autenticação do Pacote
Crie um arquivo `.npmrc` na raiz do seu projeto (se não existir) e adicione seu Token do GitHub:

```text
@LeonardoFirme:registry=[https://npm.pkg.github.com](https://npm.pkg.github.com)
//[npm.pkg.github.com/:_authToken=SEU_GITHUB_PAT_AQUI](https://npm.pkg.github.com/:_authToken=SEU_GITHUB_PAT_AQUI)

```

### 2. Instalação

```bash
npm install

```

### 3. Desenvolvimento

```bash
npm run dev

```

---

## 🛠️ O que está incluso?

* **Next.js 16+**: Utilizando o novo padrão de rotas e performance.
* **Tailwind CSS v4**: Otimizado para o motor de estilização mais rápido do mercado.
* **Proxy Layer**: Implementação profissional em `src/proxy.ts` (Substituindo o middleware).
* **Package NPM**: Acesso aos componentes exclusivos da biblioteca `@LeonardoFirme/package-npm`.

## 🎨 Layout e Estilo

O projeto já vem configurado com:

* Suporte nativo a **Dark Mode** (`dark:`).
* Cores padrão: `text-gray-800` (Light) / `text-gray-50` (Dark).
* Backgrounds: `bg-white` / `bg-gray-950`.

---

## 📄 Licença

Este projeto é de uso livre para estudos e implementações de projetos pessoais e comerciais.
Desenvolvido por [Leonardo Firme](https://github.com/LeonardoFirme).

---