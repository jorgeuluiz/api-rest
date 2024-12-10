import {Request, Response } from "express"
import { z } from "zod"

class ProductsController {

  index(request: Request, response: Response) {
    const { page, limit } = request.query

    response.send(`Página ${page} de ${limit}`)
  }

  create(request: Request, response: Response){    

    const bodySchema = z.object({
      name: z
        .string({ required_error: "Nome é obrigatório!"})
        .trim()
        .min(6, { message: "Nome precisa de 6 ou mais caracteres"}),
      price: z
        .number({ required_error: "Preço é obrigatório!"})
        .positive({ message: "Preço não pode ser negativo"})
    })

    const { name, price } = bodySchema.parse(request.body)

    response.status(201).json({ name, price, user_id: request.user_id })
  }

}

export { ProductsController }