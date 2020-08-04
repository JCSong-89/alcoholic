import * as fs from 'fs';
import expressLoader from '../loaders/express';
import mongoseLoader from '../loaders/mongoose';
export const httpsOptions = {
    'key': fs.readFileSync(__dirname + '../../config/keys/server.key'),
    'cert': fs.readFileSync(__dirname + '../../config/keys/server.crt'),
};
export const connect = async (db) => {
    await mongoseLoader(db);
};
export const app = async () => await expressLoader();
//# sourceMappingURL=index.js.map