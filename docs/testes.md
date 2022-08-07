## ESM Fórum

## Testes

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
