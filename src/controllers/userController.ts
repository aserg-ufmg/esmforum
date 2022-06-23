import { Request, Response } from 'express'
import { User, userModel } from '../models/user'

const insertUser = (req: Request, res: Response) => {
  const usr = req.body
  if (!usr) { return res.status(400).json('Invalid User') }

  if (!usr.username) { return res.status(400).json('Add a username') }

  const user = req.body as User
  return userModel.insertUser(user)
    .then(user => {
      res.json(user)
    })
    .catch(err => res.status(500).json(err.message))
}

const updateUser = (req: Request, res: Response) => {
  const id = parseInt(req.params.id)

  const usr = req.body
  if (!usr) { return res.status(400).json('Invalid User') }

  if (!usr.username) { return res.status(400).json('Add a username') }

  userModel.getUser(id).then(user => {
    if (!user) { return res.sendStatus(404) }
  })

  const user = req.body as User
  user.userid = id
  return userModel.updateUser(user)
    .then(user => {
      res.json(user)
    })
    .catch(err => res.status(500).json(err.message))
}

const listUsers = (req: Request, res: Response) => {
  userModel.listUsers()
    .then(users => {
      res.json(users)
    })
    .catch(err => res.status(500).json(err.message))
}

const getUser = (req : Request, res: Response) => {
  const id = parseInt(req.params.id)
  return userModel.getUser(id)
    .then((user) => {
      if (user) { return res.json(user) } else { return res.sendStatus(404) }
    })
    .catch(err => res.status(500).json(err.message))
}

const deleteUser = (req: Request, res: Response) => {
  const id = parseInt(req.params.id)

  userModel.getUser(id).then(user => {
    if (!user) { return res.sendStatus(404) }
  })

  return userModel.deleteUser(id)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).json(err.message))
}

export const userController = {
  insertUser,
  listUsers,
  getUser,
  deleteUser,
  updateUser
}
