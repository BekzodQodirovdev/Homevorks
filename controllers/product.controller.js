import {
  createProductService,
  deleteProduct,
  getAllProductService,
  searchProduct,
  updateProduct,
} from "../service/index.js";

export const createProductController = async (req, res, next) => {
  try {
    const result = await createProductService(req.body);

    if (result.error) {
      return res.status(409).send(result.message);
    }

    res.send(result);
  } catch (error) {
    next(error);
  }
};

export const getAllProductController = async (req, res, next) => {
  const {page,limit} = req.query
  // console.log(page,limit)
  try {
    const result = await getAllProductService(page, limit);

    if (result.error) {
      return res.status(409).send(result.message);
    }

    res.send(result);
  } catch (error) {
    next(error);
  }
};

export const getByIdProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await findProduct(id);

    if (result.error) {
      return res.status(409).send(result.message);
    }

    res.send(result);
  } catch (error) {
    next(error);
  }
};

export const updateByIdProduct = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await updateProduct(req.body, id);

    if (result.error) {
      return res.status(409).send(result.message);
    }

    res.send(result);
  } catch (error) {
    next(error);
  }
};

export const deleteByIdProduct = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await deleteProduct(id);

    if (result.error) {
      return res.status(409).send(result.message);
    }

    res.send(result);
  } catch (error) {
    next(error);
  }
};

export const searchProductController = async (req, res, next) => {
  const { name } = req.query;
  try {
    const result = await searchProduct(name);

    if (result.error) {
      return res.status(409).send(result.message);
    }

    res.send(result);
  } catch (error) {
    next(error);
  }
};
