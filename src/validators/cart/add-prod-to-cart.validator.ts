import * as Joi from 'joi';

export const addProductToCartValidator = Joi.object({
  count: Joi.number().min(0).required()
});
