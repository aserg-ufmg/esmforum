# ESM Fórum

## Rotas

Para testar as rotas implementadas no backend, pode-se usar um sistema como o
[Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client), 
que é um plugin para o VS Code que permite submeter facilmente requisições para uma
API REST e ver os resultados retornados. Outra opção de sistema, também muito usado,
é o [Postman](https://www.postman.com/).

Qualquer que seja o sistema que usar (Thunder, Postman, etc), tente acessar as
seguintes rotas:

### Lista completa de usuários castrados no ESM Fórum

GET localhost:3000/api/user

### Dados do usuário com ID = 1

GET localhost:3000/api/user/1

### Lista completa de comentários

GET  localhost:3000/api/comment


POST localhost:3000/api/comment
{
    "commentid": 128,
    "parentid": 0,
    "userid": 3,
    "text": "Quanto é 2 * 3",
    "createdAt": "2022-08-10T20:44:29.438Z"
  }
