import * as fs from 'fs'
import {Sequelize} from "sequelize";
import expressLoader from './express';
import mongoseLoader from './mongoose';
import {DB_ENV} from'../config/index';

export const sequelize = new Sequelize(
  DB_ENV.DB_NAME,
  DB_ENV.DB_USER,
  DB_ENV.DB_PASSWORD,
  {
      port: Number(DB_ENV.DB_PORT) || 54320,
      host: DB_ENV.DB_HOST || "localhost",
      dialect: "mysql",
      pool: {
          min: 0,
          max: 5,
          acquire: 30000,
          idle: 10000,
      },
  }
);

export const httpsOptions = {
  'key'  : fs.readFileSync(__dirname + '../../config/keys/server.key'),
  'cert' : fs.readFileSync(__dirname + '../../config/keys/server.crt'),
};

export const connect = async (db: string) => {
  await mongoseLoader(db);
}

export const app = async () => await expressLoader()
