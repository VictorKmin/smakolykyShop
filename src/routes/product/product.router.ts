import {Router} from 'express';

import {productController} from '../../controller';
import {checkAccessTokenMiddleware, checkCSVFileMiddleware, newProductValidationMiddleware} from '../../middleware';

const router = Router();

router.get('/', productController.getProducts);

router.post('/', checkAccessTokenMiddleware, newProductValidationMiddleware, productController.createProduct);
router.post('/csv', checkAccessTokenMiddleware, checkCSVFileMiddleware, productController.createProductsFromCSV);

export const productRouter = router;
