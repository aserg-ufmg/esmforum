import { commentModel } from '../models/comment'
import del from 'del'

it('inserir comentario "Primeira Questão"', async () => {
  const comment = { userid: 3, text: 'Primeira Questão', parentid: 0, commentid: 0, createdAt: new Date() }
  const out = await commentModel.insertComment(comment, 0, './src/tests/test1.db')
  expect(out.text).toMatch('Primeira Questão')
})

afterAll(async () => {
  await del('./src/tests/test1.db')
})
