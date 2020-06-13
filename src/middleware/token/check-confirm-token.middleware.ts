import {NextFunction, Response} from 'express';

import {ActionEnum, RequestHeadersEnum, ResponseStatusCodesEnum} from '../../constatns';
import {customErrors, ErrorHandler} from '../../errors';
import {userService} from '../../services';
import {IRequestExtended} from '../../models';
import {tokinVerificator} from '../../helpers';

export const checkConfirmTokenMiddleware = async (req: IRequestExtended, res: Response, next: NextFunction): Promise<void> => {
  const token = req.get(RequestHeadersEnum.AUTHORIZATION);

  if (!token) {
    return next(new ErrorHandler(ResponseStatusCodesEnum.BAD_REQUEST, customErrors.BAD_REQUEST_NO_TOKEN.message));
  }

  const b = await tokinVerificator(ActionEnum.USER_REGISTER, token);

  console.log(b);

  const userByToken = await userService.findUserByActionToken(ActionEnum.USER_REGISTER, token);

  if (!userByToken) {
    return next(new ErrorHandler(ResponseStatusCodesEnum.NOT_FOUND, customErrors.NOT_FOUND.message));
  }

  req.user = userByToken;

  next();
};
