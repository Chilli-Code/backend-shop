import { config } from "dotenv";

config()

export const PORT = process.env.PORT || 3000
export const HOST = process.env.HOST
export const USER = process.env.USER
export const PASS = process.env.PASSWORD
export const DB_PORT = process.env.DB_PORT
export const DB_NAME = process.env.DB_NAME

