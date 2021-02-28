import {NextFunction, Response} from 'express';

import {IRequestExtended} from '../../models';

class StoreController {

  getStoreInfo(req: IRequestExtended, res: Response, next: NextFunction) {
    try {

      res.json('IN PROGRESS');
    } catch (e) {
      next(e);
    }
  }
}

export const storeController = new StoreController();
