import { dbQuery, dbQueryFirst } from '../utils/database'

export type User = {
  userid: number
  username: string
  email?: string
}

const insertUser = async (user: User) => {
  await dbQuery('INSERT INTO user (username, email) VALUES(?, ?)', [user.username, user.email])
  const retorno = await dbQuery('SELECT seq AS Id FROM sqlite_sequence WHERE  name = \'user\'')
  return getUser(retorno[0].Id)
}

const updateUser = async (user: User) => {
  await dbQuery('UPDATE user SET username = ?, email = ? WHERE userid = ?', [user.username, user.email, user.userid])
  return getUser(user.userid)
}

const listUsers = async () => {
  const retorno = await dbQuery('SELECT * FROM user')
  return retorno as User[]
}

const getUser = async (id: number) => {
  const retorno = await dbQueryFirst('SELECT * FROM user WHERE userid = ?', [id])
  return retorno as User | undefined
}

const deleteUser = async (id: number) => {
  await dbQueryFirst('DELETE FROM user WHERE userid = ?', [id])
}

export const userModel = {
  insertUser,
  listUsers,
  getUser,
  deleteUser,
  updateUser
}
