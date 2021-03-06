import dotenv from 'dotenv';
dotenv.config();
export const PORT = process.env.PORT;
export const mongodbUrl = process.env.DATABASE_URI;
export const DB_ENV = {
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_PORT: process.env.DB_PORT,
    DB_HOST: process.env.DB_HOST
};
//# sourceMappingURL=index.js.map