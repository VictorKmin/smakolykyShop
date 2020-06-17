import {Router} from 'express';

import {productController} from '../../controller';
import {checkIsUserExistByEmailMiddleware} from '../../middleware';

const router = Router();

router.post('/', checkIsUserExistByEmailMiddleware , productController.createProduct);

export const productRouter = router;
