import {NextFunction, Response} from 'express';

import {IRequestExtended, IUser} from '../../models';
import {productService} from '../../services';

class ProductController {
  async createProduct(req: IRequestExtended, res: Response, next: NextFunction) {
    const {_id} = req.user as IUser;
    const product = req.body;
    const newProduct = await productService.createProduct({...product, userId: _id});

    res.json(newProduct);
  }
}

export const productController = new ProductController();
