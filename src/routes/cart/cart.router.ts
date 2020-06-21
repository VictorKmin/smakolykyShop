import {Router} from 'express';

import {cartController} from '../../controller';
import {checkAccessTokenMiddleware, checkIsUserConfirmedMiddleware, isProductExistsMiddleware} from '../../middleware';

const router = Router();

router.use(checkAccessTokenMiddleware, checkIsUserConfirmedMiddleware);

router.use('/products/:productId', isProductExistsMiddleware);
router.post('/products/:productId', cartController.addProductToCart);

export const cartRouter = router;
