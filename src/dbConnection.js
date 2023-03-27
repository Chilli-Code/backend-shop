import { createPool } from "mysql2/promise";
import {HOST, USER, PASS, DB_NAME, DB_PORT} from './config.js'

export const pool = createPool({
    host: HOST,
    user: USER,
    password: PASS,
    port: DB_PORT,
    database: DB_NAME
})