"use server";
import mysql from "mysql2/promise";

export const fetchData = async function () {
  // create the connection to database
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "mechapp",
    password: "",
    port: 3306,
  });

  // execute a SELECT query to fetch the data
  const [rows, fields] = await connection.execute(
    `SELECT * FROM repairs ORDER BY id DESC`
  );

  // return the fetched data

  console.log(rows);

  return rows;
};