import dotenv from 'dotenv'
dotenv.config({ path: '.env' })

import { sql } from './../src/app/lib/db'

async function main() {
  console.log('DATABASE_URL:', process.env.DATABASE_URL)

  const result = await sql`SELECT NOW()`
  console.log('DB Time:', result)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
