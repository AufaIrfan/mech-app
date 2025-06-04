// app/api/lib/fetchData.js
'use server';

import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "@/app/lib/schema"; // adjust path as needed

export const fetchData = async () => {
  // PostgreSQL connection using pg Pool
  const pool = new Pool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "mechapp",
    port: 5432,
  });

  // Connect Drizzle to PostgreSQL via pg
  const db = drizzle(pool, { schema });

  // Run a query: SELECT * FROM repairs ORDER BY id DESC
  const result = await db
    .select()
    .from(schema.repairs)
    .orderBy(schema.repairs.id.desc());

  console.log(result);
  return result;
};


// "use server";
// // import mysql from "mysql2/promise";
// import drizzleConfig from "../../../../drizzle.config";

// export const fetchData = async function () {
//   // create the connection to database
//   const connection = await .createConnection({
//     host: "localhost",
//     user: "root",
//     database: "mechapp",
//     password: "",
//     port: 3306,
//   });

//   // execute a SELECT query to fetch the data
//   const [rows, fields] = await connection.execute(
//     `SELECT * FROM repairs ORDER BY id DESC`
//   );

//   // return the fetched data

//   console.log(rows);

//   return rows;
// };