import { Request, Response } from 'express';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';

import { AppRoutes } from './route';
import { AppDataSource } from './data-source';

AppDataSource.initialize()
  .then(async (connection) => {
    const app = express();
    
    app.use(cors());
    app.use(bodyParser.json());
    app.use(express.static(path.join(__dirname, 'public')));

    AppRoutes.forEach((route) => {
      app[route.method](
        route.path,
        (request: Request, response: Response, next: Function) => {
          route
            .action(request, response)
            .then(() => next)
            .catch((err) => next(err));
        }
      );
    });

    app.listen(3000);

    console.log('Express application is up and running on port 3000');
  })
  .catch((error) => console.log('TypeORM connection error: ', error));
