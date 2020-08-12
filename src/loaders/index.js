import * as fs from 'fs';
import * as sequelize from "sequelize";
import expressLoader from '../types/loaders/express';
import mongoseLoader from '../types/loaders/mongoose';
export const mysql = ({ ...DB_ENV }) => {
    return new sequelize.Sequelize(DB_ENV.DB_NAME, DB_ENV.DB_USER, DB_ENV.DB_PASSWORD, {
        port: Number(DB_ENV.DB_PORT) || 54320,
        host: DB_ENV.DB_HOST || "localhost",
        dialect: "mysql",
        pool: {
            min: 0,
            max: 5,
            acquire: 30000,
            idle: 10000,
        },
    });
};
export const httpsOptions = {
    'key': fs.readFileSync(__dirname + '../../config/keys/server.key'),
    'cert': fs.readFileSync(__dirname + '../../config/keys/server.crt'),
};
export const connect = async (db) => {
    await mongoseLoader(db);
};
export const app = async () => await expressLoader();
//# sourceMappingURL=index.js.map