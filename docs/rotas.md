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

##### Lista de usuários castrados no sistema: #####

`GET localhost:3000/api/user`
  
##### Dados do usuário com ID = 1: #####

 `GET localhost:3000/api/user/1`

##### Lista atual de perguntas e respostas: #####

`GET  localhost:3000/api/comment`

##### Para postar uma pergunta: #####
 
`POST localhost:3000/api/comment`
  
Como precisamos enviar dados para a API, vá na aba "Body" da ferramenta de testes e informe 
o seguinte documento JSON:
  
 ```
  {
    "parentid": 0,
    "userid": 3,
    "text": "Quanto é 2 + 2?",
    "createdAt": "2022-08-10T20:44:29.438Z"
  }
  ```
  
##### Para postar uma resposta para a pergunta anterior: #####
  
`POST localhost:3000/api/comment`
  
e use o seguinte "Body": 

```
  {
    "parentid": xx,  
    "userid": 3,
    "text": "2 + 2 = 4",
    "createdAt": "2022-08-10T20:44:29.438Z"
  }
```
  
onde xx é o `commentid` da pergunta postada antes. Quando criamos uma pergunta, o seu `commentid` é 
gerado automaticamente pelo sistema.
  
Se quiser conferir a nova lista de perguntas e respostas, use de novo:
  
`GET  localhost:3000/api/comment`
  
##### Para atualizar os dados de perguntas e respostas: #####

`PUT localhost:3000/api/comment/xx`

onde xx é o `commentid` da pergunta que será atualizada e seus novos
dados devem ser informados em um "Body" como o seguinte:

{ 
  "parentid": 0,
  "userid": 3,
  "text": "Quanto é 20 + 20?",
  "createdAt": "2022-08-10T20:44:29.438Z"
}

  
##### Para deletar uma pergunta ou resposta: #####

`DEL localhost:3000/api/comment/xx`
  
onde xx é o `commentid` da pergunta que será deletada. 
