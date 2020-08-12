import dotenv from 'dotenv';

dotenv.config();

export const PORT: any = process.env.PORT

export const mongodbUrl = <string>process.env.DATABASE_URI

export const DB_ENV = {
  DB_NAME: <string>process.env.DB_NAME,
  DB_USER:  <string>process.env.DB_USER,
  DB_PASSWORD:  <string>process.env.DB_PASSWORD,
  DB_PORT: <any>process.env.DB_PORT,
  DB_HOST: <string>process.env.DB_HOST
}