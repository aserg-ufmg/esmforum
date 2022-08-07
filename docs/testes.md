## ESM Fórum

## Testes de Software

### Testes de Unidade

Foram implementados testes de unidade e integração de forma a ilustrar a implementação de Testes de Software no sistema ESM Forum.
De forma a lidar com a simplicidade do sistema e integração dos módulos implementados, de forma a organizar testes de unidade foram implementadas
duas funções em [Form.tsx](https://github.com/aserg-ufmg/esmforum/blob/main/frontend/src/Form.tsx), hasURL e searchURL, para execução dos testes de unidade.

A primeira função, hasURL, utilizada durante a execução do sistema [third_test.spec.ts](https://github.com/aserg-ufmg/esmforum/blob/main/src/tests/third_test.spec.ts), testa a presença de uma URL na mensagem de um formulário de inserção ou alteração de comentários, não permitindo a presença de URLs e exibindo uma mensagem de erro. A implemntação da funçáo e seu testes acompanham a seguir:

```
const hasURL = (text: string) => (
  text.split(" ").filter((word) => word.slice(0,4)==="http").length > 0
);
```

```
import { URL } from '../../frontend/src/Form'

it('Checar presensa URL', () => {
  expect(URL.hasURL('Estou com problemas ao acessar https://engsoftmoderna.info/')).toEqual(true)
})
```

Já a segunda função searchURL, utilizada durante o teste [forth_test.spec.ts](https://github.com/aserg-ufmg/esmforum/blob/main/src/tests/forth_test.spec.ts) do sistema, busca pela presença de URLs na mensagem e as insere em uma tag html ''<a href="URL">URL</a>''. A implementação da função e seu teste são ilustrados a seguir:

```
function tagURL(text: string) {
  const listURLs = text.split(" ").filter((word) => word.slice(0,4)==="http")
  if (listURLs.length>0) {
    let newtext = text;
    for (let i = 0; i < listURLs.length; i++) {
      newtext = newtext.replace(listURLs[i], "<a href=\""+listURLs[i]+"\">"+listURLs[i]+"</a>")
    }
    return newtext
  } else {
    return text
  }
}

const searchURL = (text: string) => (tagURL(text));
```

```
import { URL } from '../../frontend/src/Form'

it('Checar alteração URL', () => {
  expect(URL.searchURL('Estou com problemas ao acessar https://engsoftmoderna.info/')).toMatch('Estou com problemas ao acessar <a href="https://engsoftmoderna.info/">https://engsoftmoderna.info/</a>')
})
```

### Testes de Integração

Os testes de integração foram direcionados paras as funções do backend, dessa forma, foram organizados dois testes para inserção de um comentário
na base de dados em [first_test.spec.ts](https://github.com/aserg-ufmg/esmforum/blob/main/src/tests/first_test.spec.ts), e inserção, remoção e listagem comentarios na base de dados em [second_test.spec.ts](https://github.com/aserg-ufmg/esmforum/blob/main/src/tests/second_test.spec.ts).

A implementação do primeiro teste, cria uma instância da estrutura Comentário de texto "Primeira Questão", e testa a inserção deste usando [insertComment](https://github.com/aserg-ufmg/esmforum/blob/main/src/models/comment.ts) em uma base de dados test.bd, criada para o teste e apagada após a execução do teste, assim como ilustrado a seguir:

```
import { commentModel } from '../models/comment'

it('inserir comentario "Primeira Questão"', async () => {
  const comment = { userid: 3, text: 'Primeira Questão', parentid: 0, commentid: 0, createdAt: new Date() }
  const out = await commentModel.insertComment(comment, 0, './src/tests/test1.db')
  expect(out.text).toMatch('Primeira Questão')
})

afterAll(async () => {
  await del('./src/tests/test1.db')
})
```

Já em second_test.spec.ts, testa-se a inserção, insertComment, remoção, deleteComment, e listagem, listAllComments(veja implementação dessas funções em [models/comments.ts](https://github.com/aserg-ufmg/esmforum/blob/main/src/models/comment.ts)), dos comentarios "Primeira Questão", "Segunda Questão" e "Terceira Questão" em uma base de dados test1.bd, criada para execução do deste e apagada ao término deste, como ilustrado a seguir:

```
import { commentModel } from '../models/comment'

it('inserir, remover e listar comentarios "Primeira Questão", "Segunda Questão" e "Terceira Questão"', async () => {
  const comment = { userid: 3, text: 'Primeira Questão', parentid: 0, commentid: 0, createdAt: new Date() }
  await commentModel.insertComment(comment, 0, './src/tests/test.db')

  const comment2 = { userid: 3, text: 'Segunda Questão', parentid: 0, commentid: 0, createdAt: new Date() }
  const out = await commentModel.insertComment(comment2, 0, './src/tests/test.db')

  const comment3 = { userid: 3, text: 'Terceira Questão', parentid: 0, commentid: 0, createdAt: new Date() }
  await commentModel.insertComment(comment3, 0, './src/tests/test.db')

  await commentModel.deleteComment(out.commentid, './src/tests/test.db')

  const out1 = await commentModel.listAllComments('./src/tests/test.db')

  expect(out1[0].text).toMatch('Primeira Questão')
  expect(out1[1].text).toMatch('Terceira Questão')
})

afterAll(async () => {
  await del('./src/tests/test.db')
})
```
