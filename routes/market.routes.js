import { Router } from "express";
import { createMarketController, deleteByIdMarket, getAllMarketController, getByIdMarket, updateByIdMarket } from "../controllers/index.js";


export const marketRoutes = new Router();

marketRoutes.post("/", createMarketController);
marketRoutes.get("/", getAllMarketController);
marketRoutes.get("/:id", getByIdMarket);
marketRoutes.put("/:id", updateByIdMarket);
marketRoutes.delete("/:id", deleteByIdMarket);