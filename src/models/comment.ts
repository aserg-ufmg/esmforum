import { dbQuery, dbQueryFirst } from '../utils/database'

export type Comment = {
  commentid: number
  parentid: number
  userid: number
  text: string
  createdAt: Date
}

const insertComment = async (comment: Comment, id: number) => {
  await dbQuery('INSERT INTO comment (parentid, userid, text, createdAt) VALUES(?, ?, ?, ?)', [id, comment.userid, comment.text, new Date().toISOString()])
  const out = await dbQuery('SELECT seq AS Id FROM sqlite_sequence WHERE  name = \'comment\'')
  return getComment(out[0].Id)
}

const updateComment = async (comment: Comment) => {
  await dbQuery('UPDATE comment SET text = ? WHERE commentid = ?', [comment.text, comment.commentid])
  return getComment(comment.commentid)
}

const listComments = async (id: number) => {
  const out = await dbQuery('SELECT * FROM comment WHERE parentid = ?', [id])
  return out as Comment[]
}

const listAllComments = async () => {
  const out = await dbQuery('SELECT * FROM comment')
  return out as Comment[]
}

const getComment = async (id: number) => {
  const out = await dbQueryFirst('SELECT * FROM comment WHERE commentid = ?', [id])
  return out as Comment
}

const deleteComment = async (id: number) => {
  const excludedcomment = await getComment(id)
  await dbQueryFirst('DELETE FROM comment WHERE commentid = ?', [id])
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
