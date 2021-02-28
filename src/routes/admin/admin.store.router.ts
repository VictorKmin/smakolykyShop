import { Router } from 'express';

const router = Router();

const {isStoreExistsMiddleware} = require('../../middleware');
const {productController} = require('../../controller');

router.post('/:storeId/products', isStoreExistsMiddleware, productController.createProductsFromCSV);

export const adminStoreRouter = router;
