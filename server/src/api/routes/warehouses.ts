import asyncHandler from 'express-async-handler';
import { Router } from 'express';

import { getWarehouses } from '../controllers';

const router = Router();

// GETs
router.get('/', asyncHandler(getWarehouses));

export default router;
