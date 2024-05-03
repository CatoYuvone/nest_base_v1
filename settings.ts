import * as  dotenv from "dotenv"
dotenv.config();

export const dbSettings = Object.freeze({
    NAME: process.env.DB_NAME,
    CONNECTOR: process.env.DB_CONNECTOR,
    URL: process.env.DB_URL,
    HOST: process.env.DB_HOST,
    PORT: +process.env.DB_PORT!,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    DATABASE: process.env.DB_DATABASE
})