import {NextFunction, Response} from 'express';

import {IRequestExtended} from '../../models';
import {productService} from '../../services';
import {customErrors, ErrorHandler} from '../../errors';
import {ResponseStatusCodesEnum} from '../../constatns';

export const isProductExistsMiddleware = async (req: IRequestExtended, res: Response, next: NextFunction) => {
  const {productId} = req.params;
  const product = await productService.findProductById(productId);

  if (!product) {
    return next(new ErrorHandler(ResponseStatusCodesEnum.NOT_FOUND, customErrors.NOT_FOUND.message));
  }

  req.product = product;
};
