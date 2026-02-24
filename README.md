# Deploy NextJS 16+ | Leonardo Firme

Estrutura profissional (Scaffold) para desenvolvimento de SaaS e ERPs dinâmicos, utilizando NextJS 16+, React 19 e Tailwind CSS v4.

![Next.js](https://img.shields.io/badge/Next.js_16+-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
[![image-(1).png](https://i.postimg.cc/4xYCJkMz/image-(1).png)](https://postimg.cc/k2PYcZ74)

---

## 🚀 Instalação Rápida

Para iniciar um novo projeto utilizando este scaffold, execute o comando abaixo no seu terminal:

```bash
npx @LeonardoFirme/deploy-nextjs16 meu-novo-projeto

```

> **Nota:** Certifique-se de ter um arquivo `.npmrc` configurado com seu Token do GitHub para acessar os pacotes privados `@LeonardoFirme`.

---

## 📂 Detalhamento da Estrutura

### 📁 Raiz (Root) & Configurações

* **`bin/lf-init`**: Executável do scaffold para automação da cópia de arquivos e setup inicial.
* **`package.json`**: Manifesto com dependências (Next 16.1.6, React 19.2.3, Tailwind v4). Define o binário `lf-init`.
* **`package-lock.json`**: Controle de integridade e versões das dependências.
* **`postcss.config.mjs`**: Configuração do motor PostCSS para processamento do Tailwind v4.
* **`tsconfig.json`**: Regras de tipagem estática e aliases de caminhos (paths) do projeto.

### 📁 `src/app` (Rotas e Estilo Global)

* **`layout.tsx`**: Layout principal da aplicação. Gerencia fontes, metadados e wrappers de contexto.
* **`page.tsx`**: View principal da rota raiz (Home).
* **`globals.css`**: Configuração global do Tailwind v4 e variáveis de cores dinâmicas.

### 📁 `src/components/ui` (Biblioteca Minimalista)

Componentes atômicos com suporte nativo a `dark:`.

* **`Alert.tsx`, `Badge.tsx`, `Breadcrumb.tsx**`: Sinalização, status e navegação.
* **`Button.tsx`**: Ação principal (`bg-gray-800` light / `bg-gray-50` dark).
* **`Card.tsx`, `Modal.tsx`, `Dropdown.tsx**`: Containers de conteúdo e sobreposição.
* **`Input.tsx`, `Select.tsx`, `Checkbox.tsx`, `Toggle.tsx`, `Textarea.tsx**`: Elementos de formulário (sem manipulação de `uppercase`).
* **`Table.tsx`**: Grid de dados avançado para sistemas ERP.
* **`StarfieldBackground.tsx` & `FireworksBackground.tsx**`: Backgrounds animados profissionais.
* **`ToggleDarkmode.tsx`**: Controle de alternância de tema.
* **`Provider.tsx`**: Wrapper centralizador de contextos de interface.
* **`Index.tsx`**: Ponto central de exportação dos componentes.

### 📁 `src/core` (Lógica e Regras)

* **`animations.ts`**: Configurações centralizadas de Framer Motion.
* **`config.ts`**: Variáveis de ambiente e constantes globais do sistema.
* **`constants.ts`**: Valores estáticos e Enums de negócio.
* **`legal.ts`**: Textos jurídicos e termos padronizados.
* **`providers/node-resolver.tsx`**: Gerenciador de hidratação para componentes Client/Server.

### 📁 `src/hooks` & `src/layouts`

* **`use-theme.tsx`**: Hook para controle lógico do estado Dark/Light.
* **`default-layout.tsx`**: Template base estrutural para dashboards e plataformas.

### 📁 `src/proxy.ts` (Segurança e Roteamento)

* **`proxy.ts`**: Camada de interceptação que substitui o middleware, controlando headers e redirecionamentos.

### 📁 `src/utils` & `src/types`

* **`cn.ts`**: Utilitário para mesclagem condicional de classes Tailwind.
* **`index.ts` & `common.ts**`: Contratos de interfaces e tipos globais do TypeScript.

---

## 🛠️ Comandos de Desenvolvimento

```bash
# Instalar dependências localmente
npm install

# Iniciar ambiente de desenvolvimento
npm run dev

# Gerar build de produção
npm run build

```

---

## 📄 Licença

Este projeto é de uso restrito para o ecossistema de plataformas desenvolvidas por [Leonardo Firme](https://github.com/LeonardoFirme).

---