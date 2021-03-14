import { Router } from 'express';

const router = Router();

const {productController} = require('../../controller');
const {isStoreExistsMiddleware, checkCSVFileMiddleware, newProductValidationMiddleware} = require('../../middleware');

router.use('/:storeId', isStoreExistsMiddleware);
router.post('/:storeId/products', newProductValidationMiddleware, productController.createProduct);
router.post('/:storeId/products/csv', checkCSVFileMiddleware, productController.createProductsFromCSV);

export const adminStoreRouter = router;
