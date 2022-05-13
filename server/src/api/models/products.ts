import { config as dotenvconfig } from 'dotenv';
import { product } from '../types';
import pool from '../../config/db';

dotenvconfig();

async function getProducts(): Promise<product[]> {
  const text: string = 'SELECT * FROM Product';
  const { rows }: { rows: product[] } = await pool.query(text);

  return rows;
}

async function getProduct(id: number): Promise<product> {
  const text: string = 'SELECT * from Product WHERE pid = $1';
  const params: any[] = [id];

  const { rows }: { rows: product[] } = await pool.query(text, params);
  return rows[0];
}

async function updateProduct(id: number, newProduct: product): Promise<void> {
  const text: string = 'UPDATE Product SET name = $1, price = $2, quantity = $3, sid = $4, wid = $5 WHERE pid = $6';
  const params: any[] = [newProduct.name, newProduct.price, newProduct.quantity, newProduct.sid, newProduct.wid, id];

  await pool.query(text, params);
}

async function deleteProduct(id: number): Promise<product> {
  const text: string = 'DELETE FROM Product WHERE pid = $1 RETURNING *';
  const params: string[] = [String(id)];

  const { rows }: { rows: product[] } = await pool.query(text, params);
  return rows[0];
}

async function addProduct(newProduct: product): Promise<product> {
  const text: string = 'insert into Product (pid, name, price, quantity, wid, sid) values (default, $1, $2, $3, $4, $5) returning *';
  const params: any[] = [newProduct.name, newProduct.price, newProduct.quantity, newProduct.wid, newProduct.sid];

  const { rows }: { rows: product[] } = await pool.query(text, params);
  return rows[0];
}

export { getProducts, getProduct, deleteProduct, updateProduct, addProduct };
