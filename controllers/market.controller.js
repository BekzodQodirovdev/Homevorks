import { createMarketService, deleteMarketService, findMarketService, getAllMarketService, updateMarketService } from "../service/index.js";

export const createMarketController = async (req, res, next) => {
  try {

    const result = await createMarketService(req.body);

    if (result.error) {
      return res.status(409).send(result.message);
    }



    res.send(result);
  } catch (error) {
    next(error);
  }
};

export const getAllMarketController = async (req, res, next) => {
  try {
    const result = await getAllMarketService();

    if (result.error) {
      return res.status(409).send(result.message);
    }

    res.send(result);
  } catch (error) {
    next(error);
  }
};


export const getByIdMarket = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await findMarketService(id);

    if (result.error) {
      return res.status(409).send(result.message);
    }

    res.send(result);
  } catch (error) {
    next(error);
  }
};


export const updateByIdMarket = async (req, res, next) => {

  const { id } = req.params;
  try {
    const result = await updateMarketService(req.body,id);

    if (result.error) {
      return res.status(409).send(result.message);
    }

    res.send(result);
  } catch (error) {
    next(error);
  }
};


export const deleteByIdMarket = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await deleteMarketService(id);

    if (result.error) {
      return res.status(409).send(result.message);
    }

    res.send(result);
  } catch (error) {
    next(error);
  }
};
