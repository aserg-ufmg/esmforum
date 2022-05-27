import { Application, Router } from 'express'

import { userRouter } from './user'
import { commentRouter } from './comment'

export const useRoutes = (app: Application) => {
  const appRouter = Router()
  appRouter.use('/user', userRouter)
  appRouter.use('/comment', commentRouter)

  app.use('/api/', appRouter)
}
