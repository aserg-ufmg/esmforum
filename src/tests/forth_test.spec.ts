import { URL } from '../../frontend/src/Form'

it('Checar presensa URL', () => {
  expect(URL.searchURL('Estou com problemas ao acessar https://engsoftmoderna.info/')).toMatch('Estou com problemas ao acessar <a href="https://engsoftmoderna.info/">https://engsoftmoderna.info/</a>')
})
