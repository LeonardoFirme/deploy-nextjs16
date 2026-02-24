# Deploy NextJS 16+ | Leonardo Firme

Estrutura profissional (Scaffold) para desenvolvimento de SaaS e ERPs dinâmicos, utilizando NextJS 16+, React 19 e Tailwind CSS v4.

---

## 📂 Detalhamento da Estrutura

### 📁 Raiz (Root)
* **`package.json`**: Manifesto com dependências (Next 16.1.6, React 19.2.3, Tailwind v4). Define o binário `lf-init`.
* **`package-lock.json`**: Controle de integridade das dependências.
* **`postcss.config.mjs`**: Configuração de processamento de estilos para Tailwind v4.
* **`.npmrc`**: Configuração de acesso ao registro privado `@LeonardoFirme`.
* **`tsconfig.json`**: Regras de tipagem estática e caminhos (paths) do projeto.

### 📁 `src/app`
* **`layout.tsx`**: Layout raiz. Gerencia fontes, metadados e wrappers de contexto.
* **`page.tsx`**: Arquivo de visualização principal da rota raiz.
* **`globals.css`**: Configuração global do Tailwind v4 e variáveis de tema.
* **`favicon.ico`**: Ícone de navegação.

### 📁 `src/components/ui`
Biblioteca minimalista com suporte nativo a `dark:`.
* **`Alert.tsx`, `Badge.tsx`, `Breadcrumb.tsx`**: Componentes de sinalização e navegação.
* **`Button.tsx`**: Ação principal (bg-gray-800 light / bg-gray-50 dark).
* **`Card.tsx`, `Modal.tsx`, `Dropdown.tsx`**: Containers e componentes de sobreposição.
* **`Input.tsx`, `Select.tsx`, `Checkbox.tsx`, `Toggle.tsx`, `Textarea.tsx`**: Inputs de dados sem tratamento de `uppercase`.
* **`Table.tsx`**: Grid de dados profissional para sistemas ERP.
* **`StarfieldBackground.tsx` & `FireworksBackground.tsx`**: Backgrounds animados.
* **`ToggleDarkmode.tsx`**: Alternador de estado do tema.
* **`Provider.tsx`**: Centralizador de contextos de interface.
* **`Index.tsx`**: Exportador de componentes para otimização de imports.

### 📁 `src/core`
* **`animations.ts`**: Definições globais de Framer Motion.
* **`config.ts`**: Variáveis de ambiente e constantes de sistema.
* **`constants.ts`**: Valores fixos e Enums de negócio.
* **`legal.ts`**: Políticas e textos jurídicos padronizados.
* **`providers/node-resolver.tsx`**: Resolutor de hidratação para componentes de servidor.

### 📁 `src/hooks`
* **`use-theme.tsx`**: Gerenciamento lógico do tema Dark/Light.

### 📁 `src/layouts`
* **`default-layout.tsx`**: Template estrutural para páginas internas de plataforma.

### 📁 `src/proxy.ts`
* **`proxy.ts`**: Camada de interceptação e roteamento que substitui o middleware descontinuado.

### 📁 `src/types`
* **`index.ts` & `common.ts`**: Interfaces TypeScript para contratos de dados e componentes.

### 📁 `src/utils`
* **`cn.ts`**: Utilitário de mesclagem de classes (clsx + tailwind-merge).

---

## 🚀 Comandos

```bash
# Instalação
npm install

# Desenvolvimento
npm run dev

# Build
npm run build

```

---

## 📄 Licença

Desenvolvido por [Leonardo Firme](https://github.com/LeonardoFirme).

---