import {NextFunction, Request, Response} from 'express';
import * as Joi from 'joi';

import {ErrorHandler} from '../../errors';
import {ResponseStatusCodesEnum} from '../../constatns';
import {addProductToCartValidator} from '../../validators';

export const addProductToCartValidatorMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const {error} = Joi.validate(req.body, addProductToCartValidator);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodesEnum.BAD_REQUEST, error.details[0].message));
  }

  next();
};
