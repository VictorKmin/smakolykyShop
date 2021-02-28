import {NextFunction, Response} from 'express';

import {IRequestExtended} from '../../models';
import {storeService} from '../../services';
import {customErrors, ErrorHandler} from '../../errors';
import {ResponseStatusCodesEnum} from '../../constatns';

export const isStoreExistsMiddleware = async (req: IRequestExtended, res: Response, next: NextFunction): Promise<any> => {
  const {storeId} = req.params;
  const store = await storeService.findStoreById(storeId);

  if (!store) {
    return next(new ErrorHandler(ResponseStatusCodesEnum.NOT_FOUND, customErrors.NOT_FOUND.message));
  }

  req.store = store;
  next();
};
