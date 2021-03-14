import {NextFunction, Request, Response} from 'express';
import * as Joi from 'joi';

import {filterProductValidator} from '../../validators';
import {ErrorHandler} from '../../errors';
import {ResponseStatusCodesEnum} from '../../constatns';

export const productFilterValidationMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const {error} = Joi.validate(req.query, filterProductValidator);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodesEnum.BAD_REQUEST, error.details[0].message));
  }

  next();
};
