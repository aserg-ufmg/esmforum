import { Router } from 'express'
import { commentController } from '../controllers/commentController'

export const commentRouter = Router()
commentRouter.get('/', commentController.listQuestions)
commentRouter.post('/', commentController.insertQuestion)
commentRouter.post('/:id', commentController.insertComment)
commentRouter.get('/:id', commentController.listComments)
commentRouter.put('/:id', commentController.updateComment)
commentRouter.delete('/:id', commentController.deleteComment)
