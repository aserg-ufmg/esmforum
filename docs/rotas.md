# ESM Fórum

## Rotas

Para testar as rotas implementadas no backend, pode-se usar uma ferramenta como o
[Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client), 
que é um plugin para o VS Code que permite submeter facilmente requisições para uma
API REST e ver os resultados retornados. 

Outra opção de ferramenta, também muito usada, é o [Postman](https://www.postman.com/).

Qualquer que seja a ferramenta que usar, tente acessar as seguintes rotas (mas antes
se certifique que o backend está rodando, conforme explicado 
[aqui](https://github.com/aserg-ufmg/esmforum/blob/main/docs/install-info.md)):

* Lista de usuários castrados no sistema

  GET localhost:3000/api/user

* Dados do usuário com ID = 1

  GET localhost:3000/api/user/1

* Lista atual de perguntas e respostas: 

  GET  localhost:3000/api/comment

* Para postar uma pergunta:
 
  POST localhost:3000/api/comment
  
  Como agora precisamos enviar dados para a API, vá na aba "Body" da ferramenta de testes e informe 
  o seguinte documento JSON, com os dados da pergunta que será postada
  
  ```
  {
    "commentid": 128,
    "parentid": 0,
    "userid": 3,
    "text": "Quanto é 2 * 3",
    "createdAt": "2022-08-10T20:44:29.438Z"
  }
  ```
