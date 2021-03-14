import {Router} from 'express';

import {categoryController} from '../../controller';

const router = Router();

router.get('/', categoryController.getCategories);

export const categoryRouter = router;
