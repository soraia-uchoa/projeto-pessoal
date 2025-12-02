import express from 'express'
import helmet from 'helmet'
import 'dotenv/config'
import router from './routes'

const server = express()
const port = process.env.PORT

server.use(helmet())
server.use(express.json())
server.use(router)

server.listen(port, () => {
    console.log(`Servidor ligado na porta: http://localhost:${port}`)
})
