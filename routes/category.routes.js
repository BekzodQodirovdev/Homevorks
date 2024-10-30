import { Router } from "express";
import { createCategoryController, deleteCategoryController, findCategoryController, updateCategoryController } from "../controllers/index.js";


export const categoryRoutes = new Router();

categoryRoutes.post("/", createCategoryController);
categoryRoutes.get(":id", findCategoryController);
categoryRoutes.put("/", updateCategoryController);
categoryRoutes.delete("/:id", deleteCategoryController);