import 'colors';
import { Request, Response, NextFunction } from 'express';

// eslint-disable-next-line no-unused-vars
function errorHandler(err: any, req: Request, res: Response, next: NextFunction): void {
  console.error(`${err.message}`.red);
  res.status(500).send('Oops, something went wrong!');
}

export default errorHandler;
