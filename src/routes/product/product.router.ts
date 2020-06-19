import {Router} from 'express';

import {productController} from '../../controller';
import {checkAccessTokenMiddleware, newProductValidationMiddleware} from '../../middleware';

const router = Router();

router.post('/', checkAccessTokenMiddleware, newProductValidationMiddleware, productController.createProduct);

export const productRouter = router;
