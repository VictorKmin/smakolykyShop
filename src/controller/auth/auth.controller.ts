import {NextFunction, Request, Response} from 'express';

import {IRequestExtended, IUser} from '../../models';
import {comparePassword, tokinizer} from '../../helpers';
import {ActionEnum, RequestHeadersEnum, ResponseStatusCodesEnum} from '../../constatns';
import {authService} from '../../services';
import {customErrors, ErrorHandler} from '../../errors';

class AuthController {
  async authUser(req: IRequestExtended, res: Response, next: NextFunction) {
    try {
      const {_id, password} = req.user as IUser;
      const authInfo = req.body;
      const isPasswordEquals = await comparePassword(authInfo.password, password);

      if (!isPasswordEquals) {
        return next(new ErrorHandler(ResponseStatusCodesEnum.NOT_FOUND, customErrors.NOT_FOUND.message));
      }

      const {access_token, refresh_token} = tokinizer(ActionEnum.USER_AUTH);

      await authService.createTokenPair({
        accessToken: access_token,
        refreshToken: refresh_token,
        userId: _id
      });

      res.json({access_token, refresh_token});
    } catch (e) {
      return next(e);
    }
  }

  async logoutUser(req: Request, res: Response, next: NextFunction) {
    const accessToken = req.get(RequestHeadersEnum.AUTHORIZATION);

    await authService.removeToken({accessToken});

    res.sendStatus(ResponseStatusCodesEnum.NO_CONTENT);
  }
}

export const authController = new AuthController();
