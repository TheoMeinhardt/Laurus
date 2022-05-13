import { Request, Response } from 'express';

import * as db from '../models';
import { warehouse } from '../types';

async function getWarehouses(req: Request, res: Response): Promise<void> {
  const warehouses: warehouse[] = await db.getWarehouses();

  res.status(200).json(warehouses);
}

async function getWarehouseById(req: Request, res: Response): Promise<void> {
  const id: number = Number(req.params.id);
  const warehouseById: warehouse = await db.getWarehouseById(id);

  if (!warehouseById) res.status(404).send(`Warehouse with id ${id} not found`);
  else res.status(200).json(warehouseById);
}

export { getWarehouses, getWarehouseById };
