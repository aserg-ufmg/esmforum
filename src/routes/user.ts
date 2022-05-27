import { Router } from 'express'
import { userController } from '../controllers/userController'

export const userRouter = Router()
userRouter.get('/', userController.listUsers)
userRouter.post('/', userController.insertUser)
userRouter.get('/:id', userController.getUser)
userRouter.put('/:id', userController.updateUser)
userRouter.delete('/:id', userController.deleteUser)
