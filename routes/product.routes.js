import { Router } from "express";
import { createProductController, deleteByIdProduct, getAllProductController, getByIdProduct, searchProductController, updateByIdProduct } from "../controllers/index.js";

export const productRoutes = new Router();

productRoutes.get("/", getAllProductController);
productRoutes.get("/search",searchProductController)
productRoutes.post("/", createProductController);
productRoutes.get("/:id", getByIdProduct)
productRoutes.put("/:id", updateByIdProduct);
productRoutes.delete("/:id", deleteByIdProduct);