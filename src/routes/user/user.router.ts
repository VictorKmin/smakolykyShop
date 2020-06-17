import {Router} from 'express';

import {userController} from '../../controller';
import {
  checkConfirmTokenMiddleware,
  checkForgotPassTokenMiddleware,
  checkIsEmailExistsMiddleware,
  checkIsUserExistByEmailMiddleware,
  checkIsUserValidMiddleware,
  emailValidatorMiddleware,
  singlePasswordValidatorMiddleware
} from '../../middleware';

const router = Router();

router.post('/', checkIsUserValidMiddleware, checkIsEmailExistsMiddleware, userController.createUser);
router.post('/confirm', checkConfirmTokenMiddleware, userController.confirmUser);
router.post(
  '/password/forgot',
  emailValidatorMiddleware,
  checkIsUserExistByEmailMiddleware,
  userController.forgotPassword
);
router.post(
  '/password/reset',
  singlePasswordValidatorMiddleware,
  checkForgotPassTokenMiddleware,
  userController.setForgotPass
);

export const userRouter = router;
