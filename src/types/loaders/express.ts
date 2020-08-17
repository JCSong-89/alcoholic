import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as helmet from 'helmet';

export default async () => {
  const app = express() 
  app
    .use(cors({
      origin: '*', 
      credentials : false,
  }))
    .use(bodyParser.urlencoded({ extended: false}))
    .use(helmet)
    .use(require('morgan'),('dev'))
}

