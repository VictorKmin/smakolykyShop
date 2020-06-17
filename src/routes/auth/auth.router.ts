import {Router} from 'express';
import {authController} from '../../controller';
import {
  checkAccessTokenMiddleware,
  checkIsUserConfirmedMiddleware,
  checkIsUserExistMiddleware,
  emailPasswordValidatorMiddleware
} from '../../middleware';

const router = Router();

router.post(
  '/',
  emailPasswordValidatorMiddleware,
  checkIsUserExistMiddleware,
  checkIsUserConfirmedMiddleware,
  authController.authUser
);
router.post('/logout', checkAccessTokenMiddleware, authController.logoutUser);

export const authRouter = router;
