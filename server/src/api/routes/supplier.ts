import asyncHandler from 'express-async-handler';
import { Router } from 'express';

import { getSuppliers, getSupplierById } from '../controllers';

const router = Router();

// GETs
router.get('/', asyncHandler(getSuppliers));
router.get('/:id', asyncHandler(getSupplierById));

export default router;
