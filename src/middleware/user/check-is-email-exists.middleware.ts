import {NextFunction, Request, Response} from 'express';

import {userService} from '../../services';
import {customErrors, ErrorHandler} from '../../errors';
import {ResponseStatusCodesEnum} from '../../constatns';

export const checkIsEmailExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void | NextFunction> => {
  const {email} = req.body;
  const userByEmail = await userService.findOneByParams({email});

  if (userByEmail) {
    return next(new ErrorHandler(
      ResponseStatusCodesEnum.BAD_REQUEST,
      customErrors.BAD_REQUEST_USER_REGISTERED.message,
      customErrors.BAD_REQUEST_USER_REGISTERED.code
    ));
  }

  next();
};

