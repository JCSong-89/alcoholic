import * as fs from 'fs'
import expressLoader from './express';
import mongoseLoader from './mongoose';

export const httpsOptions = {
  'key'  : fs.readFileSync(__dirname + '../../config/keys/server.key'),
  'cert' : fs.readFileSync(__dirname + '../../config/keys/server.crt'),
};

export const connect = async (db: string) => {
  await mongoseLoader(db);
}

export const app = async () => await expressLoader()