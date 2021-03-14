import {Router} from 'express';

import {productController} from '../../controller';
import {
  checkAccessTokenMiddleware,
  checkCSVFileMiddleware,
  newProductValidationMiddleware,
  productFilterValidationMiddleware
} from '../../middleware';

const router = Router();

router.get('/', productFilterValidationMiddleware, productController.getProducts);

router.post('/', checkAccessTokenMiddleware, newProductValidationMiddleware, productController.createProduct);
router.post('/csv', checkAccessTokenMiddleware, checkCSVFileMiddleware, productController.createProductsFromCSV);

export const productRouter = router;
