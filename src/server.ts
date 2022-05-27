import express from 'express'
import { useRoutes } from './routes'
import bodyParser from 'body-parser'

const app = express()
const port = 3333
app.use(bodyParser.json())

useRoutes(app)

app.listen(port, () => console.log(`Listening on port ${port}`))
