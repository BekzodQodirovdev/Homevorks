import { createCategoryService, deleteCategoryService, findCategoryService, updateCategoryService } from "../service/index.js";

export const createCategoryController = async (req, res, next) => {
  try {

    const result = await createCategoryService(req.body);

    if (result.error) {
      return res.status(409).send(result.message);
    }

    res.send(result);
  } catch (error) {
    next(error);
  }
};


export const findCategoryController = async (req, res, next) => {
  try {
    const resultid = await findCategoryService(req.body.id);

    if (resultid.error) {
      return res.status(409).send(resultid.message);
    }

    res.send(resultid);
  } catch (error) {
    next(error);
  }
};

export const updateCategoryController = async (req, res, next) => {
  try {
    const result = await updateCategoryService(req.body);

    if (result.error) {
      return res.status(409).send(result.message);
    }

    res.send(result);
  } catch (error) {
    next(error);
  }
};

export const deleteCategoryController = async (req, res, next) => {
  try {
    const result = await deleteCategoryService(req.body);

    if (result.error) {
      return res.status(409).send(result.message);
    }

    res.send(result);
  } catch (error) {
    next(error);
  }
};
