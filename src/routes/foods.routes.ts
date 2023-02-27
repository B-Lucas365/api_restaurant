import Router from 'express'
import { prisma } from '../config/prismaClient'

const foodRouter = Router()

foodRouter.post('/createFood', async (request, response) => {
    const {description, price, image, name} = request.body
    
    const food = await prisma.foods.create({
        data: {
            description,
            price,
            image,
            name,
        },
    })

    return response.status(200).json(food)
})

foodRouter.get('/List/:id', async (request, response) => {
    const { id } = request.params

    const food = await prisma.foods.findFirst({
        where: {
            userId: id,
        }
    })

    return response.status(200).json(food)
})


foodRouter.put('/chenge/:id', async (request, response) => {
    const { id } = request.params
    const {
        description,
        price,
        image,
        name
    } = request.body


    const food = await prisma.foods.findFirst({
        where: {
            id,
        }
    })

    if(!food){
        return response.json({messege: `Prato nao encontrado`})
    }

    const updateFood = await prisma.foods.update({
        where: {
            id,
        }, 

        data: {
            description,
            price,
            image,
            name,
        }
    })

    return response.status(200).json({status: `ok`})
})


foodRouter.delete('/delete/:id', async (request, response) => {
    const { id } = request.params

    const food = await prisma.foods.delete({
        where: {
            id,
        }
    })

    return response.status(200).json(food)
})

export default foodRouter