# Deploy NextJS 16+ | Leonardo Firme

Estrutura profissional (Scaffold) para desenvolvimento de SaaS e ERPs dinâmicos, utilizando NextJS 16+, React 19 e Tailwind CSS v4.

![Leonardo Firme](https://img.shields.io/badge/Leonardo_Firme-fff1f0?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDI2LTAyLTI0PC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkRhdGE+eyZxdW90O2RvYyZxdW90OzomcXVvdDtEQUhDUDFxOFZJbyZxdW90OywmcXVvdDt1c2VyJnF1b3Q7OiZxdW90O1VBRGVpdFlhb0RJJnF1b3Q7LCZxdW90O2JyYW5kJnF1b3Q7OiZxdW90O0VRVUlQRSBQUklNRSAyLjAmcXVvdDt9PC9BdHRyaWI6RGF0YT4KICAgICA8QXR0cmliOkV4dElkPjUwMWZmNDA3LTQwMjItNDc2NS04NDUxLThmY2EzNWI0MzJiNjwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6ZGM9J2h0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvJz4KICA8ZGM6dGl0bGU+CiAgIDxyZGY6QWx0PgogICAgPHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5sb2dvXzQweDQwIC0gMTwvcmRmOmxpPgogICA8L3JkZjpBbHQ+CiAgPC9kYzp0aXRsZT4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICA8cGRmOkF1dGhvcj5MZW9uYXJkbyBGaXJtZTwvcGRmOkF1dGhvcj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wPSdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvJz4KICA8eG1wOkNyZWF0b3JUb29sPkNhbnZhIGRvYz1EQUhDUDFxOFZJbyB1c2VyPVVBRGVpdFlhb0RJIGJyYW5kPUVRVUlQRSBQUklNRSAyLjA8L3htcDpDcmVhdG9yVG9vbD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSdyJz8+R8L9ogAAAY5JREFUOBFjYBgFoyEw6mJiSstYv77p/8+fTP8ZGP4zMPz99u3f79+/mP79+cP098cPpt8fPzL9YmS8C9S8EizFw8KSuX79+qbvX78y/f3zB8Rj+PfvL9A7TP8ZGP79ZWD4++0b09/v3xl+MDC8Adp9CizNx8KSuX7D+qbvX74w/f3zG8Rj+PfvD9A7TP8ZGP79ZWD49+c309/v3xl+MDC8Adp9CizNx8KSuX7D+qbvX74w/f3zG8Rj+PfvD9A7TP8ZGP79ZWD49+c309/v3xl+MDC8Adp9CizNx8KSuX7D+qbvX74w/f3zG8Rj+PfvD9A7TP8ZGP79ZWD49+c309/v3xl+MDC8Adp9CizNx8KSuX7D+qbvX74w/f3zG8Rj+PfvD9A7TP8ZGP79ZWD49+c309/v3xl+MDC8Adp9CizNx8KSuX7D+qbvX74w/f3zG8Rj+PfvD9A7TP8ZGP79ZWD49+c309/v3xl+MDC8Adp9CizNx8KSuX7D+qbvX74w/f3zG8Rj+PfvD9A7TP8ZGP79ZWD49+c309/v3xl+MDC8Adp9CizNx8KSuX7D+qbvX74w/f3zG8Rj+PfvD9A7TP8ZGP79ZWD49+c309/v3xl+MDC8Adp9CizNx8KSuX7D+qbvX74w/f3zG8Rj+PfvD9A7TP8ZGP79ZWD49+c309/v3xl+MDC8Adp9CiyNisIIDR8FoyEw6mIAC+Iu+iW3U6MAAAAASUVORK5CYII=&logoColor=white)
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