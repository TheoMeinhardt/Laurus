import { Request, Response } from 'express';

import * as db from '../models';
import { supplier } from '../types';

async function getSuppliers(req: Request, res: Response): Promise<void> {
  const suppliers: supplier[] = await db.getSuppliers();

  res.status(200).json(suppliers);
}

async function getSupplierById(req: Request, res: Response): Promise<void> {
  const id: number = Number(req.params.id);
  const supplierById: supplier = await db.getSupplierById(id);

  if (supplierById) res.status(200).json(supplierById);
  else res.status(404).send('Supplier not found!');
}

export { getSuppliers, getSupplierById };
