import {NextFunction, Response} from 'express';

import {csvParser} from '../../helpers';
import {IRequestExtended, IUser} from '../../models';
import {logService, productService} from '../../services';
import {LogEnum} from '../../constatns';
import {UploadedFile} from 'express-fileupload';
import {productQueryBuilder} from "../../helpers/query-builders/product.query-builder";

class ProductController {
  async createProduct(req: IRequestExtended, res: Response, next: NextFunction) {
    try {
      const {_id} = req.user as IUser;
      const product = req.body;

      const newProduct = await productService.createProduct({...product, userId: _id});

      await logService.createLog({
        userId: _id,
        event: LogEnum.PRODUCT_CREATED,
        data: {
          productId: newProduct._id,
          title: newProduct.title
        }
      });

      res.json(newProduct);
    } catch (e) {
      next(e);
    }
  }

  async createProductsFromCSV(req: IRequestExtended, res: Response, next: NextFunction) {
    try {
      const product_csv = req.files?.product_csv as UploadedFile;

      const parsedCSVData = await csvParser(product_csv); // TODO finish

      // const product = req.body;
      // const newProduct = await productService.createProduct({...product, userId: _id});
      //
      // await logService.createLog({
      //   userId: _id,
      //   event: LogEnum.PRODUCT_CREATED,
      //   data: {
      //     productId: newProduct._id,
      //     title: newProduct.title
      //   }
      // });

      res.json(parsedCSVData);
    } catch (e) {
      next(e);
    }
  }

  async getProducts(req: IRequestExtended, res: Response, next: NextFunction) {
    try {
      const {limit = 20, page = 1, filter} = req.query;
      const filterQuery = productQueryBuilder(filter);

      const products = await productService.findProducts(filterQuery, +limit, +page);

      res.json(products);
    } catch (e) {
      next(e);
    }
  }
}

export const productController = new ProductController();
