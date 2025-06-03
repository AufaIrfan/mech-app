// Mysqlserveraction Component Code

'use server';

import { fetchData } from './fetchData'

let repairs = [];

// Create
export async function createRepairs(formData) {
  const name = formData.get('name');
  const id = Date.now().toString(); // simple unique ID
  const newRepair = { id, name };
  repairs.push(newRepair);
  return newRepair;
}

// Read (you can also fetch this in a separate route or page)
export async function getRepairs() {
  return repairs;
}

// Update
export async function updateRepair(formData) {
  const id = formData.get('id');
  const newName = formData.get('name');
  const repair = repairs.find(repair => repair.id === id);
  if (repair) {
    repair.name = newName;
    return repair;
  }
  return null;
}

// Delete
export async function deleteRepair(formData) {
  const id = formData.get('id');
  repairs = repairs.filter(item => item.id !== id);
  return { success: true };
}


// import { revalidatePath } from "next/cache";
// import getRepairs from '@/app/Api/useRepair';

// export default function Page() {
//     async function createRepair(prevState, formData) {
//         const rawFormData = {
//             repairId: formData.get('repairId'),
//             repairName: formData.get('repairName'),
//             repairDesc: formData.get('repairDesc'),
//         }

//         if (repairName === insert) {
//             if (repairId != '' && repairName != '' && repairDesc != '') {
//                 const result = await getRepairs('insert into repair values(?,?,?)', [
//                     repairId,
//                     repairName,
//                     repairDesc,
//                 ]);
//                 if (result.affectedRows) {
//                     revalidatePath('./pages/repair/input/create-repair')
//                     return { message: 'Record inserted' }
//                 } else {
//                     revalidatePath('./pages/repair/input/create-repair')
//                 }
//             }
//         }
//     }

//     async function updateRepair() {


//     }
// }

// "use server";

// import { revalidatePath } from 'next/cache';

// import executeQuery from './mysqldb';

// const Mechapp = async (prevState, formData) => {

// const sid = formData.get('sid');

// const sname = formData.get('sname');

// const sspare = formData.get('sspare');

// const bname = formData.get('submit');

// if (bname === 'insert') {

// if (sid!= '' && sname!= '' && sspare!= '') {

// const result = await executeQuery('insert into repair values(?,?,?)', [

// sid,

// sspare,

// sname,

// ]);

// if (result.affectedRows) {

// revalidatePath('/CURDMySQL');

// return { message: 'Record Inserted' };

// } else {

// revalidatePath('/CURDMySQL');

// return { message: 'Record not Inserted' };

// }

// } else {

// revalidatePath('/CURDMySQL');

// return { message: 'Field can not be empty' };

// }

// } else if (bname === 'update') {

// if (sid!= '' && sname!= '' && sspare!= '') {

// const result = await executeQuery(

// 'update repair set sid=?, name=?, spare=? where sid=?',

// [sid, sname, sspare, sid]

// );

// if (result.affectedRows) {

// revalidatePath('/CURDMySQL');

// return { message: 'Record Updated' };

// } else {

// revalidatePath('/CURDMySQL');

// return { message: 'Record not Updated' };

// }

// } else {

// revalidatePath('/CURDMySQL');

// return { message: 'Field can not be empty' };

// }

// } else if (bname === 'delete') {

// if (sid!= '') {

// const result = await executeQuery('delete from student where sid=?', [

// sid,

// ]);

// if (result.affectedRows) {

// revalidatePath('/CURDMySQL');

// return { message: 'Record Deleted' };

// } else {

// revalidatePath('/CURDMySQL');

// return { message: 'Record not Deleted' };

// }

// } else {

// revalidatePath('/CURDMySQL');

// return { message: 'Repair ID can not be empty' };

// }

// }

// };

// export default Mysqlserveraction;