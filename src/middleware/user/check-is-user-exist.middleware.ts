import {NextFunction, Response} from 'express';

import {userService} from '../../services';
import {customErrors, ErrorHandler} from '../../errors';
import {ResponseStatusCodesEnum} from '../../constatns';
import {IRequestExtended} from '../../models';

export const checkIsUserExistMiddleware =
  async (req: IRequestExtended, res: Response, next: NextFunction): Promise<void | NextFunction> => {
    const {email} = req.body;
    const userByEmail = await userService.findOneByParams({email});

    if (!userByEmail) {
      return next(new ErrorHandler(ResponseStatusCodesEnum.NOT_FOUND, customErrors.NOT_FOUND.message));
    }

    req.user = userByEmail;
    next();
  };

