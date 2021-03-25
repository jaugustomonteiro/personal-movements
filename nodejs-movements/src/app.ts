import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes';
import './database';
import appErrorMiddleware from './middlewares/appErrorMiddleware';

class App {
  public express;

  constructor() {
    this.express = express();
    this.middlewares();
  }

  private middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use(routes);
    this.express.use(appErrorMiddleware);
  }
}

export default new App().express;
