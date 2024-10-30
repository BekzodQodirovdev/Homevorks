import { createMarketModel, getAllMarketModel } from "../model/index.js";
import { findMarketById, updateMarketById } from "../model/market.model.js";

export const createMarketService = async (market) => {
  try {
    const result = await createMarketModel(market);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const findMarketService = async (id) => {
  try {
    const result = await findMarketById(id);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateMarketService = async (product, id) => {
  try {
    const oldProduct = await findMarketById(id);

    const newProduct = {
      ...oldProduct[0],
      ...product,
    };

    const result = await updateMarketById(newProduct, id);

    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};



export const deleteMarketService = async (id) => {
  try {
    const product = await findMarketById(id);

    if(product.length === 0){
      return {
        error:true,
        message:"PRODUCT not found"
      }
    }

    await deleteProductById()
  } catch (error) {
    throw new Error(error.message);
  }
};
;
export const getAllMarketService = async () => {
  try {
    const result = await getAllMarketModel();
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};