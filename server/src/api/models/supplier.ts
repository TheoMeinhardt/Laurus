import pool from '../../config/db';
import { supplier } from '../types';

async function getSuppliers(): Promise<supplier[]> {
  const text: string = 'SELECT * FROM Supplier';

  const { rows }: { rows: supplier[] } = await pool.query(text, []);
  return rows;
}

async function getSupplierById(id: number): Promise<supplier> {
  const text: string = 'SELECT * FROM Supplier WHERE sid = $1';
  const params: number[] = [id];

  const { rows }: { rows: supplier[] } = await pool.query(text, params);
  return rows[0];
}

export { getSuppliers, getSupplierById };
