﻿# Projeto: Controle de Doações

## O problema

A gestão de doações e campanhas de arrecadação pode ser ineficiente e custosa, especialmente quando feita manualmente. A Rotary Club São Carlos enfrenta um grande desafio quanto ao tempo perdido no registro e catalogação dos itens recebidos.

## Solução

Propomos uma solução simples, eficiente e de baixo custo, utilizando o Google Sheets, personalizado para uma interface mais intuitiva e amigável, para a gestão de doações e campanhas. Com a integração de leitura de códigos de barras, nossa plataforma automatiza o registro e a catalogação de produtos, associando cada doação a campanhas específicas. O sistema funciona diretamente na nuvem, eliminando a necessidade de servidores próprios e permitindo a colaboração em tempo real entre equipes.

## Manual de uso

Acesse o manual de uso em: https://icmc.usp.br/e/ea20a.

## Requisitos

- [Git](https://git-scm.com/downloads);
- [Node.js](https://nodejs.org/en/download/package-manager);
- [clasp](https://developers.google.com/apps-script/guides/clasp?hl=pt-br);
- [Controle de doações](https://docs.google.com/spreadsheets/d/1-_1EUBceP15vFmP0LRWt6hTmv54Z80NY0FseuV4RHMc);
- [Apps Script](https://script.google.com/u/1/home/projects/1rlZMzGyCVh6BnSUl49eF-xXbJpSTR86kH8QqabeFrv7uBFNTl4CX8l2p);

## Configuração do ambiente de desenvolvimento (Windows)

- 1 - Clone este repositório com o seguinte comando:

```bash
git clone https://github.com/amandajoioso/Projeto_Controle_de_Doacoes.git
```

- 2 - Instale o Clasp globalmente por meio do comando abaixo:

```bash
npm install @google/clasp -g
```

- 3 - Faça login na sua conta Google com acesso ao projeto pelo comando abaixo:

```bash
clasp login
```

- 4 - Sincronize o repositório do Apps Script com o repositório local por meio do comando:

```bash
clasp clone 1IT0kuXpcwDSk5BDMk1ewrBg6MwuBx10y-R59ks_T0lfatn-bHWsMikWC
```

- 5 - Após realizar as alterações no repositório execute o seguinte comando:

```bash
clasp push
```
