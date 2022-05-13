import { Request, Response, NextFunction } from 'express';

// eslint-disable-next-line no-unused-vars
function notfoundHandler(req: Request, res: Response, next: NextFunction): void {
  res.status(404).send('Not found!');
}

export default notfoundHandler;
