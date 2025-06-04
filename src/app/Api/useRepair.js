'use server';

import sql from '../lib/db';

export async function getRepairs() {
  try {
    const repairs = await sql`SELECT * FROM repairs`;
    return repairs; // return repairs
  } catch (err) {
    console.error('Error querying repairs:', err);
    return [];
  }
}
