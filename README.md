# Quero App

Aplicativo responsivo Quero Bolsa

## Descrição

Esta aplicação tem como objetivo demonstrar os conhecimentos de HTML e CSS, no intuito de criar uma página responsiva

## Ferramentas utilizadas
- Node JS (8.11.1) - Criar um servidor
- NPM (5.6.0) - Rodar scripts
- Ruby Sass (3.5.7) - Pré processar CSS
- Gulp JS (3.9.1) - Gerenciar tarefas
- Yarn (1.3.2) - Instalar dependencias

## Instalações

Para que você possa inicializar a utilização desta aplicação você deve seguir os próximos passos

### Instalar Node JS
Siga as instruções no [site do Node JS](https://nodejs.org/en/download/)

### Instalar SASS
Rode o comando

```
npm i -g sass
```
Ou siga as instruções no [site do SASS](https://sass-lang.com/install)


### Instalar Yarn
Siga as instruções no [site do Yarn](https://yarnpkg.com/pt-BR/docs/install#debian-stable)

Escolha o sistema operacional do qual você está utilizando no momento.

### Instalar Dependências
```
yarn
```
Ou se preferir trabalhar somente com o NPM
```
npm i
```

## Ambiente de Desenvolvimento
Rode o comando
```
npm run start:dev
```

Este comando roda o gulp, do qual inicializa um servidor através do Browser Sync e abri-o no seu Browser padrão.
Pronto! Agora toda vez que for feita alguma alteração no código, o gulp tratará de processar o CSS através do SASS e automaticamente mostrar as mudanças no Browser.

## Ambiente de Produção
```
npm start
```

Este comando roda o gulp padrão, que tem como função aplicar as seguintes tarefas antes de inicializar o servidor:
- clean: Limpar a pasta dist
- copy: Copiar as imagens de src/img para dist
- sass: Processar os arquivos .scss para .css
- autoprefixer: Gerar autoprefixos de browsers antigos
- min-css: Minimificar os arquivos .css
- usemin: Minimificar os arquivos .html e .css e jogar em dist

## Tratamento de imagens

As imagens foram tratadas através do [Tiny PNG](https://tinypng.com/) para que fossem reduzidas o seu tamanho e pesassem menos na aplicação.
Para os ícones foram utilizados imagens SVG para que a qualidade do ícones não se perca.

## Observações

Pelo fato de não utilizar diretamente CSS, foi adicionado as pastas css e arquivos do tipo css no .gitignore para que seja padronizado o uso do SASS para realizar a estilização do site.
Foi também utilizado BEM para guia de estilização e padronização.
