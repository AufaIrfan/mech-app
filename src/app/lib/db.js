// lib/db.js

const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

module.exports = pool;

// import sql from 'mysql2';

// export default async function dbConnect() {
//   try {
//     await sql.connect(process.env.NODE_ENV);
//     console.log("Connected to Postgres.");
//   } catch (error) {
//     throw new Error('Connection failed!')
//   }
// }


// import postgres from 'postgres'

// const sql = postgres({ /* options */ }) // will use psql environment variables

// export default sql




// import mysql from 'mysql2/promise';

// async function testConnection() {
//     try {
//         const response = await fetch('/api/page');

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Fetch error:', error.message);
//     }
// }
//     module.exports = testConnection;


// const mysql = require('mysql2/promise');

// async function callRepair(query, data) {
//     try {
//         const db = await mysql.createConnection({
//             host: process.env.MYSQL_HOST,
//             port: process.env.MYSQL_PORT,
//             database: process.env.MYSQL_DATABASE,
//             user: process.env.MYSQL_USER,
//             password: process.env.MYSQL_PASSWORD,
//         });

//         const [result] = await db.execute(query, data);

//         await db.end();

//         return result;
//     } catch (error) {
//         console.log(error);
//         return error;
//     }
// }

// module.exports = callRepair;
