import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware"
import { ProductsController } from "../controllers/products-controller"

const productsRoutes = Router()
const productsController =  new ProductsController()

productsRoutes.use(myMiddleware)

productsRoutes.get("/", productsController.index)

productsRoutes.post("/", productsController.create)

export { productsRoutes }