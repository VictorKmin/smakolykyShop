import {NextFunction, Request, Response} from 'express';
import * as Joi from 'joi';

import {newUserValidator} from '../../validators';

export const checkIsUserValidMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const {error} = Joi.validate(req.body, newUserValidator);

  if (error) {
    return next(new Error(error.details[0].message));
  }

  next();
};
