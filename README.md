# Curso de React JS: Do Básico ao Avançado

![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)

Bem-vindo ao repositório do curso de React JS! Este projeto tem como objetivo ensinar React JS desde os conceitos mais básicos até tópicos avançados, incluindo as principais features do React e arquiteturas de pastas para organizar seu código de maneira eficiente.

## Conteúdo

Este repositório está organizado em módulos, cada um cobrindo um conjunto específico de tópicos. Aqui está uma visão geral do que você encontrará:

### Módulo 1: Introdução ao React

- O que é React?
- Configurando o ambiente de desenvolvimento
- Criando o primeiro componente
- JSX e seus fundamentos

### Módulo 2: Fundamentos do React

- Componentes funcionais
- Props e estado
- Ciclo de vida dos componentes

### Módulo 3: Trabalhando com Listas e Formulários

- Renderização de listas
- Chaves (keys) no React
- Manipulação de formulários
- Validação de formulários

### Módulo 4: React Router

- Introdução ao React Router
- Roteamento básico
- Roteamento dinâmico
- Proteção de rotas

### Módulo 5: Gerenciamento de Estado

- Estado local e global
- Context API
- Zustand para gerenciamento de estado global

### Módulo 6: Hooks Avançados

- useEffect e gerenciamento de efeitos colaterais
- useContext para contexto global
- Custom Hooks
- Outros hooks úteis (useMemo, useCallback)

### Módulo 7: Arquitetura de Pastas

- Organização básica de pastas
- Arquitetura baseada em funcionalidades
- Arquitetura baseada em domínios
- Boas práticas para organizar projetos React

### Módulo 8: Ferramentas e Boas Práticas

- Linting e formatação de código
- Testes com Jest e React Testing Library
- Deploy de aplicações React
- Otimizações de performance

## Pré-requisitos

Antes de começar, você deve ter o Node.js e o npm instalados em sua máquina. Recomenda-se também ter conhecimento básico de JavaScript e HTML.

## Como Usar

1. **Clone o repositório:**

   ```bash
   git clone git@github.com:viniciusidacruz/studies-frontend-master.git
   cd studies-frontend-master

   ## Instalar o nvm para atualizar o node na versão correta da aplicação

   ## Use o curl para baixar e instalar o script do NVM Execute comando abaixo no terminal:
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

   ## Depois de instalar o NVM, você precisa adicionar os scripts necessários ao seu arquivo de perfil do shell para poder usar o NVM. Execute o comando abaixo para carregar o NVM no seu terminal:
   export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

   ## Para verificar se o NVM foi instalado corretamente, execute o seguinte comando:
   nvm --version

   ## Com nvm instalado basta mudar para versão do node
   nvm install Iron && nvm use

   ## Rodor a aplicação
   bun first-install
   ```

## Contribuições

Contribuições são bem-vindas! Se você deseja melhorar o conteúdo, corrigir erros ou adicionar novos tópicos, sinta-se à vontade para abrir uma issue ou enviar um pull request.
