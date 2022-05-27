# ESM Fórum
Sistema de demonstração do livro [Engenharia de Software Moderna](https://engsoftmoderna.info).

O objetivo é permitir que o aluno tenha um primeiro contato com os conceitos estudados no livro e tecnologias normalmente utilizadas em sistemas Web, como TypeScript, Node.js, REST API e React.

## Arquitetura

Frontend:

Interface em React para exibição de uma página inicial simplificada de um sistema de fórum. 
A estrutura contém: 
 - Forum: responsável pela organização geral e coleta de comentários da API.
 - Form: esquema para interação do usuário no fórum e chamada para alteração na base de dados.
 - ExhibitComment: esquema para exibição de árvore de comentários.

Backend:

Web REST API, para definir a interação entre os diferentes componentes de software, utilzando Node.js e Express para envio de requerimentos HTTP como POST, GET, PUT e DELETE.
A API conta com:
 - Models: modelos das tabelas comentário e usuário, definindo consultas para acesso e manipulação do banco de dados.
 - Controllers: manipula as solicitações e determina as ações sobre cada modelo.
 - Routes: estabelece as rotas para comunicação cliente-servidor.
 - Services: define chamadas para conexão e execução de consultas ao banco de dados.

Banco de Dados:

Banco de dados simples compatível com SQLite com tabelas básicas para usuário e comentário estruturadas em um modelo relacional.


## Executando o Sistema

Instalações necessárias (pule caso já tenha instalado):

- Nodejs: Instale a versão correspondente ao seu SO em [nodejs.org](https://nodejs.org/).
- Yarn:  ``` npm install --global yarn ```

Para executar o backend:

```
yarn
yarn dev
```
Caso alguma dependencia não tenha sido instalada ao rodar o comando anterior, execute "yarn add <dependencia> -D", exemplo: ``` yarn add ts-node-dev -D ```

Para executar o frontend:

```
cd frontend
npm install
npm start
```
