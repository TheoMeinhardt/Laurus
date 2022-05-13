import { Request, Response } from 'express';

import * as db from '../models';

import { product } from '../types';

async function getAllProducts(req: Request, res: Response): Promise<void> {
  const products: product[] = await db.getProducts();

  res.status(200).json(products);
}

async function getProductById(req: Request, res: Response): Promise<void> {
  const id: number = Number(req.params.id);
  const newProduct: product = await db.getProduct(id);

  if (!newProduct) res.status(404).send('Product not found!');
  else res.status(200).json(newProduct);
}

async function updateProduct(req: Request, res: Response): Promise<void> {
  const id: number = Number(req.params.id);
  const oldProduct: product = await db.getProduct(id);
  const newProduct: product = req.body;

  if (!oldProduct) res.status(404).send('Product not found!');
  else {
    newProduct.pid = oldProduct.pid;
    newProduct.name = newProduct.name === undefined ? oldProduct.name : newProduct.name;
    newProduct.price = newProduct.price === undefined ? oldProduct.price : newProduct.price;
    newProduct.quantity = newProduct.quantity === undefined ? oldProduct.quantity : newProduct.quantity;
    newProduct.sid = newProduct.sid === undefined ? oldProduct.sid : newProduct.sid;
    newProduct.wid = newProduct.wid === undefined ? oldProduct.wid : newProduct.wid;

    await db.updateProduct(id, newProduct);
    res.status(200).send(`Updated product: ${newProduct.name}`);
  }
}

async function addProduct(req: Request, res: Response): Promise<void> {
  const newProduct: product = req.body;
  const addedProduct: product = await db.addProduct(newProduct);

  res.status(200).send(`Added Product ${addedProduct.name}`);
}

async function deleteProduct(req: Request, res: Response): Promise<void> {
  const id: number = Number(req.params.id);
  if (!(await db.getProduct(id))) res.status(404).send('Product not found!');
  else {
    const deletedProduct: product = await db.deleteProduct(id);
    res.status(200).send(`Deleted product: ${deletedProduct.name}`);
  }
}

export { getAllProducts, getProductById, deleteProduct, updateProduct, addProduct };
