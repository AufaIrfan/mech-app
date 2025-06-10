'use server'

import { sql } from './../lib/db' // assuming you have this file set up correctly

interface RepairData {
  date: string
  sparepart: string
  repairDesc: string
  checker: string
  scannedData?: string
}

export async function createRepair(data: RepairData) {
  try {
    await sql`
      INSERT INTO repairs (date, sparepart, repair_desc, checker, scanned_data)
      VALUES (${data.date}, ${data.sparepart}, ${data.repairDesc}, ${data.checker}, ${data.scannedData})
    `
    return { success: true }
  } catch (error) {
    console.error('Insert failed:', error)
    return { success: false, error: error.message }
  }
}
