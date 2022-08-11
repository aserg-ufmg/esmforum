# ESM Fórum

## Arquitetura do Frontend

A seguir, detalhamos a arquitetura do frontend, que é basicamente uma Single Page Application (SPA), implementada em React.

Essa arquitetura possui três componentes principais: fórum, formulário e comentários, conforme descrito a seguir.

## Fórum

A página principal do sistema está implementada em [Forum.tsx](https://github.com/aserg-ufmg/esmforum/blob/main/frontend/src/Forum.tsx). Ela é responsável por organizar a estrutura e determinar o fluxo de funcionamento do sistema.

Mostramos a seguir como realizamos a conexão com o backend através da sua API.

```
import { useState, useEffect } from "react"
import { Comment } from "../../src/models/comment"

const [comments, setComments] = useState<any[]>([])
useEffect(()=> {
    const loadData = () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }
        console.log(commentsUrl)
        fetch(commentsUrl, requestOptions)
        .then(response => response.json())
        .then(data => setComments(
        data.sort(
            (a: Comment, b: Comment) =>
            -(new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
        )
        ))
    }
    loadData()
}, [commentsUrl])
```

Como mostrado nesse código, o método `useEffect` faz uma consulta (`GET`) na API do backend para carregar os comentários.

Em `Forum.tsx`, também são implementados métodos como `addComment`, `deleteComment` e `updateComment`, para enviar alterações nesses dados para o o backend, como ilustrado a seguir pelo método updateComment. 

```
const updateComment = (text: string, commentid: number) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({'text': text, "userid": currentUserid})
    }
    fetch(commentsUrl+`/${commentid}`, requestOptions)
      .then(response => response.json())
      .then(comment => {
        const updatedComments = comments.map((question: Comment) => {
          if(question.commentid === commentid){
            return { ...question, text:text}
          }
          return question
        })
        setComments(updatedComments)
        setComment(null);
      })
  };
```

O método atualiza um comentário a partir de seu commentid através da chamado do método PUT na Url ``/api/comment/commentid``, e atualizando o comentário também nos comentários salvos em comments, mantendo versão mais atual para a exibição os comentários.

Por fim, ainda estrutura a disposição do formulário para inserção de perguntas e exibição dos comentários na página.

## Formulário

Estrutura de Formulário utilizada para operações como inserção ou alteração de comentários. 

Essa estrutura é utilizada tanto em Forum.tsx quanto em ExhibitComment.tsx para inserção de questões, e em ExhibitComment.tsx para manipulação de comentários.

## Exibição de Comentários

Responsável por organizar e exibir uma árvore simples de comentários, a implementação em [ExhibitComment.tsx](https://github.com/aserg-ufmg/esmforum/blob/main/frontend/src/ExhibitComment.tsx) utiliza dos dados administrados em Forum.tsx para exibir os tópicos e comentários aninhados, para isso lidando com opções como exibir ou ocultar comentários, e inserir, alterar ou remover um comentário. 

