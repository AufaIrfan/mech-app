// useRepair.js
'use server';

import sql from '../lib/db';

async function getRepairs() {
  try {
    const repairs = await sql`SELECT * FROM repairs`
    console.log(repairs)
  } catch (err) {
    console.error('Error querying repairs:', err)
  }
}

getRepairs()
