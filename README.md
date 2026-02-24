# Deploy NextJS 16+ | Leonardo Firme

Estrutura profissional (Scaffold) para desenvolvimento de SaaS e ERPs dinâmicos, utilizando NextJS 16+, React 19 e Tailwind CSS v4.

![Leonardo Firme](https://img.shields.io/badge/Leonardo_Firme-fff1f0?style=for-the-badge&logo=data:image/png;base64,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&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js_16+-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

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