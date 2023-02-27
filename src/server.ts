import express from 'express'
import foodRoutes from './routes/foods.routes'
import userRouter from './routes/user.routes'
import cors  from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/', userRouter)
app.use('/', foodRoutes)

app.listen(3333, () => console.log(`serer is running`))