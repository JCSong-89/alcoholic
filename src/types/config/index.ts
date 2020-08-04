import dotenv from 'dotenv';

dotenv.config();

const PORT: any = process.env.PORT

export default {
  port: <number>PORT,
  databaseURL: <string>process.env.DATABASE_URI
}


