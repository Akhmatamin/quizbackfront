const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: 'postgres',
  password: 'admin',
  host: 'localhost',
  port: 5432,
  database: 'mydb',
});

pool
  .connect()
  .then(() => console.log("📦 Подключение к PostgreSQL успешно!"))
  .catch((err) => console.error("Ошибка подключения к БД:", err));

module.exports = pool;
