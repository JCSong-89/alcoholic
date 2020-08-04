import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT;
export default {
    port: PORT,
    databaseURL: process.env.DATABASE_URI
};
//# sourceMappingURL=index.js.map