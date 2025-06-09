'use server';

// src/lib/db.ts
import postgres from 'postgres'

const sql = postgres(process.env.DATABASE_URL!, {
  // ssl: process.env.NODE_ENV === 'production' ? 'require' : false,
  ssl: false, // for local development
})

export { sql }


// const { drizzle } = require('drizzle-orm/node-postgres');
// const { Pool } = require('pg');

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

// const db = drizzle(pool);

// module.exports = { db };

// // lib/db.ts
// import { drizzle } from 'drizzle-orm/node-postgres';
// import { Pool } from 'pg';
// import * as schema from './schema'; // optional if you use drizzle-kit

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

// export const db = drizzle(pool, { schema });
