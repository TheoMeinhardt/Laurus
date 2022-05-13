import { config as dotenvconfig } from 'dotenv';
import { warehouse } from '../types';
import pool from '../../config/db';

dotenvconfig();

async function getWarehouses(): Promise<warehouse[]> {
  const text: string = 'SELECT * FROM Warehouse';
  const params: any[] = [];

  const { rows }: { rows: warehouse[] } = await pool.query(text, params);
  return rows;
}

async function getWarehouseById(id: number): Promise<warehouse> {
  const text: string = 'SELECT * FROM Warehouse WHERE wid = $1';
  const params: any[] = [id];

  const { rows }: { rows: warehouse[] } = await pool.query(text, params);
  return rows[0];
}

export { getWarehouses, getWarehouseById };
