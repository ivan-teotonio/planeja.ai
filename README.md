# Planej.ai: Desenvolvendo um Educador Financeiro com React e IA Generativa

O **Planej.ai** é uma aplicação web de planejamento financeiro pessoal. O usuário preenche um formulário com informações sobre sua renda, gastos e uma meta financeira (como uma viagem ou a compra de um bem), e a aplicação usa inteligência artificial para gerar um diagnóstico personalizado com sugestões práticas, ideias de renda extra e um plano de ação.

Tudo funciona diretamente no navegador: sem backend, sem banco de dados remoto. Os dados são salvos no `localStorage` e as análises são geradas em tempo real pela API do Google Gemini.

---

## Stacks do Projeto

### Dependências de produção

| Pacote                   | Versão  | Finalidade                   |
| ------------------------ | ------- | ---------------------------- |
| `react`                  | ^19.2.4 | Biblioteca principal de UI   |
| `react-dom`              | ^19.2.4 | Renderização React no DOM    |
| `react-router-dom`       | ^7.13.2 | Roteamento client-side (SPA) |
| `tailwindcss`            | ^4.2.2  | Framework de CSS utilitário  |
| `@tailwindcss/vite`      | ^4.2.2  | Plugin Tailwind para Vite    |
| `@fontsource/inter`      | ^5.2.8  | Fonte Inter auto-hospedada   |
| `lucide-react`           | ^1.5.0  | Biblioteca de ícones SVG     |
| `react-loading-skeleton` | ^3.5.0  | Skeletons de carregamento    |

### Dependências de desenvolvimento

| Pacote                             | Versão  | Finalidade                               |
| ---------------------------------- | ------- | ---------------------------------------- |
| `vite`                             | ^8.0.1  | Build tool e dev server                  |
| `typescript`                       | ~5.9.3  | Tipagem estática                         |
| `@vitejs/plugin-react`             | ^6.0.1  | Suporte a React no Vite (Fast Refresh)   |
| `eslint`                           | ^9.39.4 | Linter de código                         |
| `prettier`                         | ^3.8.1  | Formatação de código                     |
| `eslint-plugin-simple-import-sort` | ^12.1.1 | Ordenação automática de imports          |
| `eslint-plugin-unused-imports`     | ^4.4.1  | Remove imports não utilizados            |
| `prettier-plugin-tailwindcss`      | ^0.7.2  | Ordenação automática de classes Tailwind |

---

## Estrutura de Pastas

```
planejai/
├── public/
│   ├── favicon.svg           # Ícone da aba do navegador
│   └── icons.svg             # Sprite de ícones SVG
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── piggy-bank.png  # Imagem ilustrativa (hero)
│   ├── components/
│   │   ├── features/
│   │   │   ├── Insights/       # Componentes de exibição dos insights da IA
│   │   │   │   ├── Content.tsx
│   │   │   │   └── Error.tsx
│   │   │   ├── Simulation/     # Componentes do formulário multi-step
│   │   │   │   ├── Form.tsx
│   │   │   │   ├── FormStep.tsx
│   │   │   │   ├── Hero.tsx
│   │   │   │   └── Progress.tsx
│   │   │   └── SimulationResults/  # Componentes da página de resultados
│   │   │       ├── AIInsightCardProps.tsx
│   │   │       └── Card.tsx
│   │   ├── layout/
│   │   │   └── RootLayout.tsx  # Layout raiz com Header
│   │   └── shared/             # Componentes reutilizáveis
│   │       ├── Button.tsx
│   │       ├── Divider.tsx
│   │       ├── Header.tsx
│   │       ├── Input.tsx
│   │       └── PageHero.tsx
│   ├── context/
│   │   └── theme/
│   │       ├── ThemeContext.tsx   # Contexto de tema (claro/escuro)
│   │       └── ThemeProvider.tsx  # Provider do contexto de tema
│   ├── data/
│   │   ├── aiPrompt.ts       # Montagem do prompt para o Gemini
│   │   └── simulation.ts     # Dados e configuração do formulário
│   ├── hooks/
│   │   ├── useInsight.tsx         # Hook de chamada à API do Gemini
│   │   ├── useSimulationStorage.tsx  # Hook de leitura/escrita no localStorage
│   │   └── useTheme.tsx           # Hook de acesso ao contexto de tema
│   ├── pages/
│   │   ├── SimulationFormPage.tsx    # Página do formulário
│   │   └── SimulationResultsPage.tsx # Página de resultados
│   ├── services/
│   │   └── aiService.ts      # Chamada HTTP à API do Google Gemini
│   ├── styles/
│   │   └── theme.css         # Variáveis CSS de tema (claro/escuro)
│   ├── utils/
│   │   ├── currency.ts       # Máscara e formatação de moeda
│   │   └── simulation.ts     # Utilitários de simulação
│   ├── App.tsx               # Componente raiz
│   ├── index.css             # Estilos globais e imports
│   ├── main.tsx              # Entry point da aplicação
│   └── router.tsx            # Definição das rotas
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Estilos Iniciais

### `src/index.css`

Cole este conteúdo no arquivo `src/index.css` após instalar as dependências:

```css
@import 'tailwindcss';
@import '@fontsource/inter/400.css';
@import '@fontsource/inter/600.css';
@import '@fontsource/inter/700.css';
@import '@fontsource/inter/800.css';
@import './styles/theme.css';

@layer base {
  body {
    @apply bg-background text-foreground;
    width: 100%;
    height: 100%;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
  }
}

.lucide {
  stroke-width: 1.5;
}
```

### `src/styles/theme.css`

Crie o arquivo `src/styles/theme.css` e cole o conteúdo abaixo. Ele define as variáveis CSS de cor para os temas claro e escuro, e as registra no sistema de tokens do Tailwind v4:

```css
@layer base {
  :root,
  [data-theme='light'] {
    --background: #f8fafc;
    --foreground: #0f1729;
    --primary: #925cf0;
    --primary-foreground: #f8fafc;
    --card: #fcfcfe;
    --border: rgba(9, 9, 11, 0.08);
    --muted-primary: rgba(146, 92, 240, 0.5);
    --muted-foreground: #64749a;
    --secondary-button: #f1f5f9;
    --input: #fcfcfe;
    --skeleton-base-color: #e1e1f1;
    --skeleton-highlight-color: #c5c5df;
  }

  [data-theme='dark'] {
    --background: #0f0d16;
    --foreground: #fcfcfe;
    --primary: #925cf0;
    --primary-foreground: #fcfcfc;
    --card: #181622;
    --border: rgba(248, 250, 252, 0.4);
    --muted-primary: rgba(146, 92, 240, 0.2);
    --muted-foreground: #ad9fc8;
    --secondary-button: #27272a;
    --input: #232131;
    --skeleton-base-color: #3e3e42;
    --skeleton-highlight-color: #434052;
  }
}

@theme {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-card: var(--card);
  --color-border: var(--border);
  --color-muted-primary: var(--muted-primary);
  --color-muted-foreground: var(--muted-foreground);
  --color-secondary-button: var(--secondary-button);
  --color-input: var(--input);
  --color-red-500: #ef4444;
  --font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --color-skeleton-base: var(--skeleton-base-color);
  --color-skeleton-highlight: var(--skeleton-highlight-color);
}
```

---

