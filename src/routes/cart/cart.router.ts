import {Router} from 'express';

import {cartController} from '../../controller';
import {
  addProductToCartValidatorMiddleware,
  checkAccessTokenMiddleware,
  checkIsUserConfirmedMiddleware,
  isProductExistsMiddleware
} from '../../middleware';

const router = Router();

router.use(checkAccessTokenMiddleware, checkIsUserConfirmedMiddleware);

router.get('/proceed', cartController.getUserCart);

router.use('/products/:productId', isProductExistsMiddleware);
router.post('/products/:productId', addProductToCartValidatorMiddleware, cartController.addProductToCart);

export const cartRouter = router;
