# ESM Fórum

Sistema de demonstração do livro [Engenharia de Software Moderna](https://engsoftmoderna.info). O objetivo é permitir que o aluno tenha um primeiro contato prático com os conceitos estudados no livro.

Do ponto de vista funcional, o sistema é um fórum simples de perguntas e respostas, conforme ilustrado a seguir:

Screenshot

Do ponto de vista tecnológico, o sistema é implementado em TypeScript, usando Node.js, React e SQLite.

Informações para instalação e configuração do sistema, podem ser encontradas [aqui](https://github.com/aserg-ufmg/esmforum/blob/main/install-info.md).

## Histórias de Usuário

Sendo um fórum de perguntas e respostas, as histórias de usuário -- que fazem parte do **backlog do produto** -- podem ser as seguintes:

* Como usuário, eu gostaria de criar uma pergunta
* Como usuário, eu gostaria de responder uma pergunta
* Como usuário, eu gostaria de editar uma das minhas perguntas ou respostas
* Como usuário, eu gostaria de deletar uma das minhas perguntas ou respostas
* Como usuário, eu gostaria de favoritar uma pergunta ou resposta
* Como usuário, eu gostaria de me cadastrar no sistema
* Como usuário, eu gostaria de adicionar tags nas minhas perguntas
* Como usuário, eu gostaria de remover tags das minhas perguntas
* Como usuário, eu gostaria de pesquisar por perguntas ou respostas

* Como administrador, eu gostaria de editar ou remover perguntas ou respostas de qualquer usuário
* Como administrador, eu gostaria de adicionar ou remover tags de qualquer pergunta ou resposta

Neste momento, apenas o primeiro sprint foi concluído e implementado. Seguem as histórias implementadas neste primeiro sprint -- ou seja, as histórias que fazem parte do **backlog do sprint**:

* xx
* xx
* xx

Ou seja, o código contido neste repositório, corresponde à implementação das histórias acima.

No backlog do sprint, para cada história também existe uma lista de tarefas (que são necessárias para implementar a história). Por exemplo, as tarefas associadas à história xx são as seguintes:

* xx
* xx
* xx


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


