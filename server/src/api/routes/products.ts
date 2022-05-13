import asyncHandler from 'express-async-handler';
import { Router } from 'express';

import { getAllProducts, getProductById, deleteProduct, updateProduct, addProduct } from '../controllers';

const router = Router();

// GETs:
router.get('/', asyncHandler(getAllProducts));
router.get('/:id', asyncHandler(getProductById));

// POSTs:
router.post('/', asyncHandler(addProduct));

// PATCHs:
router.patch('/:id', asyncHandler(updateProduct));

// DELETEs:
router.delete('/:id', asyncHandler(deleteProduct));

export default router;
