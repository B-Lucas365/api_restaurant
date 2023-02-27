import Router from 'express'
import { prisma } from '../config/prismaClient'
import bcrypt from 'bcrypt';

const userRouter = Router()

userRouter.post('/createUser', async (request, response) => {
    const {name, email, password} = request.body

    const userExists = await prisma.users.findFirst({
        where: {
            email
        }
    })

   if(userExists) {
    return response.status(401).json({messege: 'Email já existente'})
   }

   const hashPassword = await bcrypt.hash(password, 10)

   const user = await prisma.users.create({
    data: {
        email,
        password: hashPassword,
        name
    }
   })

   return response.status(200).json(user)
})

export default userRouter