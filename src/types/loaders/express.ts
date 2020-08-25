import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';

export default async () => {
  const app = express() 
  app
    .use(cors({
      origin: '*', 
      credentials : false,
  }))
    .use(bodyParser.urlencoded({ extended: false}))
    .use(helmet)
    .use(require('morgan')('dev'))
}

