import { commentModel } from '../models/comment'
import del from 'del'

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
