import { Router } from 'express';

import { adminStoreRouter } from './admin.store.router';

const router = Router();

router.use('/stores', adminStoreRouter);

export const adminRouter = router;
