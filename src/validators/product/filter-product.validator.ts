import * as Joi from 'joi';

import {ProductTypeEnum} from '../../constatns';

export const filterProductValidator = Joi.object({
  title: Joi.string().trim().max(99),
  type: Joi.string().trim().valid(Object.values(ProductTypeEnum)),
  category: Joi.string().trim().max(50),
  priceGte: Joi.number().min(0).max(999999),
  priceLte: Joi.number().min(0).max(999999),
  hasDiscount: Joi.boolean(),
  tags: Joi.string().trim().min(1).max(50)
});
