import {NextFunction, Response} from 'express';

import {IProduct, IRequestExtended, IUser} from '../../models';
import {cartService} from '../../services';

class CartController {
  async addProductToCart(req: IRequestExtended, res: Response, next: NextFunction) {
    try {
      const {_id: userId} = req.user as IUser;
      const product = req.product as IProduct;
      const {count} = req.body;

      let userCart = await cartService.findUserProceedCart(userId);

      if (!userCart) {
        userCart = await cartService.createCart({userId});
      }

      const iCart = await cartService.addProductToCart(userCart, product, count);

      res.json(iCart); // TODO getCartById
    } catch (e) {
      next(e);
    }
  }

}

export const cartController = new CartController();
