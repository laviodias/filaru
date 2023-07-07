import mysql from 'mysql'
import dotenv from 'dotenv'

dotenv.config();

const pool = mysql.createPool({
  host: 'mysqldb',
  port: 3306,
  user: 'root',
  password: 'root',
  database : 'filaru',
  connectionLimit: 20
});

export default pool;
