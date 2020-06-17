import {Router} from 'express';

import {productController} from '../../controller';
import {checkAccessTokenMiddleware} from '../../middleware';

const router = Router();

router.post('/', checkAccessTokenMiddleware, productController.createProduct);

export const productRouter = router;
