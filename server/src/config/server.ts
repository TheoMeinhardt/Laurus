import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import { config as dotenvconfig } from 'dotenv';

import { productsRouter, warehousesRouter, supplierRouter } from '../api/routes';

import { errorHandler, notfoundHandler } from '../api/middleware';

dotenvconfig();

const server = express();
const PORT: number = Number(process.env.PORT) ?? 3000;

server.use(helmet());
server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

// routers
server.use('/product', productsRouter);
server.use('/warehouse', warehousesRouter);
server.use('/supplier', supplierRouter);

// error handlers
server.use(errorHandler);
server.use(notfoundHandler);

server.listen(PORT, () => {
  console.log(`\nServer is running on port ${PORT}`);
});
