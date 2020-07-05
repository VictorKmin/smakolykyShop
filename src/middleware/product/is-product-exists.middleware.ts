import {NextFunction, Response} from 'express';

import {IRequestExtended} from '../../models';
import {productService} from '../../services';
import {customErrors, ErrorHandler} from '../../errors';
import {ResponseStatusCodesEnum} from '../../constatns';

export const isProductExistsMiddleware = async (req: IRequestExtended, res: Response, next: NextFunction): Promise<any> => {
  const {productId} = req.params;
  const product = await productService.findProductById(productId);

  if (!product) {
    return next(new ErrorHandler(ResponseStatusCodesEnum.NOT_FOUND, customErrors.NOT_FOUND.message));
  }

  if (!product.stockCount) {
    return next(new ErrorHandler(ResponseStatusCodesEnum.BAD_REQUEST, customErrors.BAD_REQUEST_NO_STOCK.message));
  }

  req.product = product;
  next();
};
