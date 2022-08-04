import { URL } from '../../frontend/src/Form'

it('Checar presensa URL', () => {
  expect(URL.hasURL('Estou com problemas ao acessar https://engsoftmoderna.info/')).toEqual(true)
})
