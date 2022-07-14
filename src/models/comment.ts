import { dbQuery, dbQueryFirst } from '../utils/database'

export type Comment = {
  commentid: number
  parentid: number
  userid: number
  text: string
  createdAt: Date
}

const insertComment = async (comment: Comment, id: number, file?: string) => {
  await dbQuery('INSERT INTO comment (parentid, userid, text, createdAt) VALUES(?, ?, ?, ?)', [id, comment.userid, comment.text, new Date().toISOString()], file)
  const out = await dbQuery('SELECT seq AS Id FROM sqlite_sequence WHERE  name = \'comment\'', [], file)
  return getComment(out[0].Id, file)
}

const updateComment = async (comment: Comment, file?: string) => {
  await dbQuery('UPDATE comment SET text = ? WHERE commentid = ?', [comment.text, comment.commentid], file)
  return getComment(comment.commentid, file)
}

const listComments = async (id: number, file?: string) => {
  const out = await dbQuery('SELECT * FROM comment WHERE parentid = ?', [id], file)
  return out as Comment[]
}

const listAllComments = async (file?: string) => {
  const out = await dbQuery('SELECT * FROM comment', [], file)
  return out as Comment[]
}

const getComment = async (id: number, file?: string) => {
  const out = await dbQueryFirst('SELECT * FROM comment WHERE commentid = ?', [id], file)
  return out as Comment
}

const deleteComment = async (id: number, file?: string) => {
  const excludedcomment = await getComment(id, file)
  await dbQueryFirst('DELETE FROM comment WHERE commentid = ?', [id], file)
  return excludedcomment
}

export const commentModel = {
  insertComment,
  listComments,
  listAllComments,
  getComment,
  deleteComment,
  updateComment
}
