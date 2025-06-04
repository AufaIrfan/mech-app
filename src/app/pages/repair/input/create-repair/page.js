'use client';

import { faChevronUp, faPlus, faSoap } from "@fortawesome/free-solid-svg-icons";
import { useContext,useEffect,useState } from "react";
import { MechContext } from "@/app/context/MechContext";
import BtnHome from "@/app/components/button/BtnHome";
import BtnSubmenu from "@/app/components/button/BtnSubmenu";
import Alert from "@/app/components/alert/Alert";
import FormInput from "@/app/components/form/FormInput";
import ModalForm from "@/app/components/modal/ModalForm";
import { useRouter } from "next/navigation";
import CountInput from "@/app/components/form/CountInput";
import setLs from "@/app/hooks/setLs";
import {
    getRepairs
} from "@/app/Api/useRepair";
import getLs from "@/app/hooks/getLs";


function ModalRepairs({ closeModal }) {
    const router = useRouter();
    const checkers = getLs("users") || false;
    const [AlertOption, setAlertOption] = useState([
        "blue",
        "Diisi oleh mekanik"
    ]);
    const { setLoad, setDataRepair } = useContext(MechContext);
    const [addUser, setAddUser] = useState(false);
    const [readySubmit, setReadySubmit] = useState(true);
    const [machine, setMachine] = useState(0);
    const [data, setData] = useState({
        date: new Date().toISOString().split("T")[0],
        machine: "",
        user: "",
        time: new Date().getHours() + ":" + new Date().getMinutes(),
    });

    useEffect(() =>{
        setData({...data, machine: machine});
    }, [machine]);

    return(
        <ModalForm
            title="Isi Perbaikan"
            submitAct={()=>{
            if(
                data.date &&
                data.machine &&
                data.user &&
                data.user != "Data empty"
            ) {
                setDataRepair({})
                setDataRepair({ data1: data });
                setLs("dataRepair", {
                    data1: data,
                    data2: { storeData1015: [], storeData1016: [] },
            })}
            addUser && addUserRepair();
            cekInputedRepair();
            }}
        >

        </ModalForm>
    )
}
// "use client";

// import { faChevronUp, faPlus, faSoap } from "@fortawesome/free-solid-svg-icons";
// import { useContext, useEffect, useState } from "react";
// import { GlobalContext } from "@/app/context/GlobalContext";
// import BtnHome from "@/app/components/button/BtnHome";
// import BtnSubmenu from "@/app/components/button/BtnSubmenu";
// import Alert from "@/app/components/alert/Alert";
// import FormInput from "@/app/components/form/FormInput";
// import ModalForm from "@/app/components/modal/ModalForm";
// import { useRouter } from "next/navigation";
// import CountInput from "@/app/components/form/CountInput";
// import setLs from "@/app/hooks/setLs";
// import {
//   useFetchBarboc,
//   useFetchMatDbase,
//   usePostBarboc,
// } from "@/app/Api/useRepair";
// import getLs from "@/app/hooks/getLs";
// import LoadFooter from "@/app/components/load/loadFooter";
// import updateLocalstorage from "@/app/hooks/updateLocalstorage";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import capitalize from "@/app/hooks/capitalize";

// function ModalBarbocFg({ closeModal }) {
//   const router = useRouter();
//   const checkers = getLs("checkerFg") || false;
//   const [AlertOption, setAlertOption] = useState([
//     "blue",
//     "Diisi oleh checker finish good",
//   ]);
//   const { setLoad, setDataBBFg } = useContext(GlobalContext);
//   const [addChecker, setAddChecker] = useState(false);
//   const [readySubmit, setReadySubmit] = useState(true);
//   const [pallet, setPallet] = useState(0);
//   const [data, setData] = useState({
//     date: new Date().toISOString().split("T")[0],
//     pallet: "",
//     checker: "",
//     time: new Date().getHours() + ":" + new Date().getMinutes(),
//   });

//   useEffect(() => {
//     setData({ ...data, pallet: pallet });
//   }, [pallet]);

//   return (
//     <ModalForm
//       title="Barang Bocor Finish Good"
//       submitAct={() => {
//         if (
//           data.date &&
//           data.pallet &&
//           data.checker &&
//           data.checker != "Data empty"
//         ) {
//           setDataBBFg({ data1: data });
//           setLs("dataBBFg", {
//             data1: data,
//             data2: { storeData1015: [], storeData1016: [] },
//           });
//           addChecker && addCheckerBarboc();
//           cekInputedBarboc();
//           //----------------------------------------------------------
//           function addCheckerBarboc() {
//             setLoad([true, "Add checker"]);
//             usePostBarboc("postCheckerFg", [data.checker]);
//           }
//           async function cekInputedBarboc() {
//             closeModal();
//             setLoad([true, "Checking data"]);
//             const res = await usePostBarboc("postOninputFg", [
//               data.date + "-" + data.pallet,
//             ]);
//             if (res.result == "data already exists") {
//               setLoad([false]);
//               setAlertOption([
//                 "red",
//                 "Pallet " + data.pallet + " sudah diinput",
//               ]);
//             } else if (res.result == "success") {
//               setLoad([true, "Success"]);
//               router.push("/pages/barang-bocor/input/bb-fg");
//             } else {
//               router.push("/pages/barang-bocor");
//               setLoad([false]);
//             }
//           }
//         } else {
//           setReadySubmit(false);
//         }
//       }}
//       closeAct={closeModal}
//     >
//       <Alert type={AlertOption[0]} text={AlertOption[1]} style="mb-2" />
//       <FormInput label="Tanggal">
//         <input
//           type="date"
//           value={data.date}
//           onChange={(e) => setData({ ...data, date: e.target.value })}
//           className={
//             !readySubmit && !data.date ? "form-input-false" : "form-input"
//           }
//         />
//       </FormInput>
//       <FormInput label="Pallet">
//         <CountInput qty={pallet} setQty={setPallet} cek={readySubmit} />
//       </FormInput>
//       <div className="flex gap-x-3 items-end">
//         <FormInput label="Checker" style="grow">
//           {addChecker ? (
//             <textarea
//               rows={3}
//               className={
//                 addChecker &&
//                 !readySubmit &&
//                 (data.checker == "Data empty" || !data.checker)
//                   ? "form-input-false"
//                   : "form-input"
//               }
//               value={data.checker}
//               onChange={(e) =>
//                 setData({ ...data, checker: capitalize(e.target.value) })
//               }
//             />
//           ) : (
//             <select
//               className={
//                 !addChecker &&
//                 !readySubmit &&
//                 (data.checker == "Data empty" || !data.checker)
//                   ? "form-input-false"
//                   : "form-input"
//               }
//               onChange={(e) => setData({ ...data, checker: e.target.value })}
//             >
//               <option value="">Pilih Checker</option>
//               {checkers.length > 0 ? (
//                 checkers.map((checker, i) => (
//                   <option key={i} value={checker}>
//                     {checker}
//                   </option>
//                 ))
//               ) : (
//                 <option>Loading ...</option>
//               )}
//             </select>
//           )}
//         </FormInput>
//         <button
//           onClick={() => {
//             setAddChecker(!addChecker), setData({ ...data, checker: "" });
//           }}
//           className={`group p-3 px-4 border rounded-2xl flex items-middle hover:border-blue duration-200 ${
//             addChecker ? "mb-4" : "mb-2"
//           }`}
//         >
//           {addChecker ? (
//             <FontAwesomeIcon
//               icon={faChevronUp}
//               className={` text-gray-500 group-hover:text-blue duration-200`}
//             />
//           ) : (
//             <FontAwesomeIcon
//               icon={faPlus}
//               className={` text-gray-500 group-hover:text-blue duration-200`}
//             />
//           )}
//         </button>
//       </div>
//     </ModalForm>
//   );
// }
// function ModalBarbocRpk({ closeModal }) {
//   const router = useRouter();
//   const { setLoad, dataBBRpk, setDataBBRpk } = useContext(GlobalContext);
//   const [readySubmit, setReadySubmit] = useState(true);
//   const [checkers, setCheckers] = useState(getLs("checkerRpk") || false);
//   const [pallet, setPallet] = useState(0);
//   const [data, setData] = useState({
//     date: new Date().toISOString().split("T")[0],
//     pallet: "",
//     checker: "",
//     time: new Date().getHours() + ":" + new Date().getMinutes(),
//   });

//   useEffect(() => {
//     if (!checkers) {
//       updateLocalstorage(
//         "checkerRpk",
//         () => useFetchBarboc("getCheckerRpk"),
//         () => setCheckers(getLs("checkerRpk"))
//       );
//     }
//   }, []);

//   useEffect(() => {
//     setData({ ...data, pallet: pallet });
//   }, [pallet]);

//   return (
//     <ModalForm
//       title="Barang Bocor Repack"
//       submitAct={() => {
//         if (data.date && data.pallet && data.checker) {
//           setLoad([true]);
//           setDataBBRpk({ ...dataBBRpk, data1: data });
//           setLs("dataBBRpk", { ...dataBBRpk, data1: data });
//           router.push("/pages/barang-bocor/input/bb-rpk");
//         } else {
//           setReadySubmit(false);
//         }
//       }}
//       closeAct={closeModal}
//     >
//       <Alert text="Diisi oleh checker Repack" style="mb-2" />
//       <FormInput label="Tanggal">
//         <input
//           type="date"
//           value={data.date}
//           onChange={(e) => setData({ ...data, date: e.target.value })}
//           className={
//             !readySubmit && !data.date ? "form-input-false" : "form-input"
//           }
//         />
//       </FormInput>
//       <FormInput label="Pallet">
//         <CountInput qty={pallet} setQty={setPallet} cek={readySubmit} />
//       </FormInput>
//       <FormInput label="Checker">
//         <select
//           className={
//             !readySubmit && !data.checker ? "form-input-false" : "form-input"
//           }
//           onChange={(e) => setData({ ...data, checker: e.target.value })}
//         >
//           <option value="">Pilih Checker</option>
//           {checkers.length > 1 ? (
//             checkers.map((checker, i) => (
//               <option key={i} value={checker}>
//                 {checker}
//               </option>
//             ))
//           ) : (
//             <option>Loading ...</option>
//           )}
//         </select>
//       </FormInput>
//     </ModalForm>
//   );
// }

// export default function Page() {
//   const [modalFg, setModalFg] = useState(false);
//   const [modalRpk, setModalRpk] = useState(false);
//   const { setGlobalFalse, loadFt, setLoadFt } = useContext(GlobalContext);

//   useEffect(() => {
//     setGlobalFalse();
//     updateLocalstorage(
//       "checkerRpk",
//       () => useFetchBarboc("getCheckerRpk"),
//       () => setLoadFt("update checker"),
//       () => setLoadFt(false)
//     );
//     updateLocalstorage(
//       "checkerFg",
//       () => useFetchBarboc("getCheckerFg"),
//       () => setLoadFt("update checker"),
//       () => setLoadFt(false)
//     );
//     updateLocalstorage(
//       "damageType",
//       () => useFetchBarboc("getDamageType"),
//       () => setLoadFt("update damage type"),
//       () => setLoadFt(false)
//     );
//     updateLocalstorage(
//       "dBase1015",
//       () => useFetchMatDbase("get1015"),
//       () => setLoadFt("update dataset"),
//       () => setLoadFt(false)
//     );
//     updateLocalstorage(
//       "dBase1016",
//       () => useFetchMatDbase("get1016"),
//       () => setLoadFt("update dataset"),
//       () => setLoadFt(false)
//     );
//   }, []);

//   const closeModal = () => {
//     setModalFg(false);
//     setModalRpk(false);
//   };

//   return (
//     <div className="main-container">
//       <LoadFooter text={loadFt} />
//       <BtnHome />
//       {modalFg && <ModalBarbocFg closeModal={closeModal} />}
//       {modalRpk && <ModalBarbocRpk closeModal={closeModal} />}
//       <div className="text-left w-full py-4">
//         <h2 className="text-xl font-bold mb-6">Barang Bocor</h2>
//         <BtnSubmenu
//           icon={faSoap}
//           title="Input Barang Bocor"
//           subtitle="Finish Good"
//           onClick={() => {
//             setModalFg(true);
//           }}
//         />
//         <BtnSubmenu
//           icon={faSoap}
//           title="Input Barang Bocor"
//           subtitle="Repack"
//           onClick={() => {
//             setModalRpk(true);
//           }}
//         />
//         <BtnSubmenu icon={faSoap} title="Data Barang Bocor" />
//         <BtnSubmenu icon={faSoap} title="Validasi" />
//       </div>
//     </div>
//   );
// }


// // 'use client';

// // import FormInput from '@/app/components/form/FormInput';
// // import { createRepair, getRepairs, updateRepair, deleteRepair } from '../../../../components/action/serverAction';
// // import { useState, useEffect } from 'react';
// // import CardForm from '@/app/components/card/CardForm';
// // import ModalConfirm from '@/app/components/modal/ModalConfirm';

// // export default function Page() {
// //   const [repairs, setRepairs] = useState([]);

// //   useEffect(() => {
// //     getRepairs().then(setRepairs);
// //   }, []);

// //   async function handleCreate(e) {
// //     e.preventDefault();
// //     const formData = new FormData(e.target);
// //     await createRepair(formData);
// //     setRepairs(await getRepairs());
// //     e.target.reset();
// //   }

// //   async function handleUpdate(id) {
// //     const newName = prompt('Enter new name:');
// //     if (newName) {
// //       const formData = new FormData();
// //       formData.append('id', id);
// //       formData.append('name', newName);
// //       await updateRepair(formData);
// //       setRepairs(await getRepairs());
// //     }
// //   }

// //   async function handleDelete(id) {
// //     const formData = new FormData();
// //     formData.append('id', id);
// //     await deleteRepair(formData);
// //     setRepairs(await getRepairs());
// //   }

// //   return (
// //     <div>
// //       {/* <CardForm /> */}
// //       <ModalForm>
// //       <h1>CRUD Server Actions</h1>
// //       <form onSubmit={handleCreate}>
// //         <input name="name" placeholder="Repair name" required />
// //         <button type="submit">Add</button>
// //       </form>
// //       <ul>
// //         {repairs.map(repair => (
// //           <li key={repair.id}>
// //             {repair.name}
// //             <button onClick={() => handleUpdate(repair.id)}>Edit</button>
// //             <button onClick={() => handleDelete(repair.id)}>Delete</button>
// //           </li>
// //         ))}
// //       </ul>
// //     </ModalForm>
// //     </div>
// //   );
// // }


// // // import React from 'react';
// // // import { getRepairs } from '../../../../Api/useRepair';
// // // import { useFormState, useFormState, useFormStatus } from 'react-dom';
// // // import sql from '../../../../lib/db';

// // // export default function CreateRepair(){
// // //     const initialState = {
// // //         message:null,
// // //     };

// // //     const[state, formAction] = useFormState(sql, initialState);
    
// // //     const{pending} = useFormStatus();

// // //    return(
// // //     <div className='container'>
// // //         <form
// // //             name='repair'
// // //             method='post'
// // //             action={formAction}
// // //             className='badge bg-warning d-flex flex-column d-flex justify-content-center'
// // //         >
// // //             <input
// // //                 type='text'
// // //                 name='repairId'
// // //                 id='rid'
// // //                 placeholder='Enter Repair'
// // //                 className='rounded p-2 m-2 mx-auto col-4'
// // //             />
// // //             <input
// // //                 type='text'
// // //                 name='repairName'
// // //                 id='nameid'
// // //                 placeholder='Repair Name'
// // //                 className='rounded p-2 m-2 mx-auto col-4'
// // //             />
// // //             <input 
// // //                 type='text'
// // //                 name='sparepart'
// // //                 id='spareId'
// // //                 placeholder='Sparepart Name'
// // //                 className='rounded p-2 m-2 mx-auto col-4'
// // //             />
// // //             <div>
// // //                 {state?.message?(
// // //                     <h3 className='badge bg-danger'>{state?.message}</h3>

// // //                 ):null}
// // //             </div>
// // //             <div className='d-flex flex-row justify-content-center'>
// // //                 <button 
// // //                 type='submit' 
// // //                 name='submit'
// // //                 id='submit'
// // //                 value='insert'
// // //                 className='btn btn-primary col-2 m-2'
// // //                 >
// // //                     {pending? "Inserting..":"Insert"}
// // //                 </button>
// // //                 <button
// // //                 type='submit' 
// // //                 name='submit'
// // //                 id='submit'
// // //                 value='update'
// // //                 className='btn btn-primary col-2 m-2'
// // //                 >
// // //                     {pending? "Updating..":"Update"}
// // //                 </button>
// // //                 <button
// // //                 type='submit' 
// // //                 name='submit'
// // //                 id='submit'
// // //                 value='delete'
// // //                 className='btn btn-primary col-2 m-2'
// // //                 >
// // //                     {pending? "Deleting..":"Delete"}
// // //                 </button>
// // //             </div>
// // //         </form>
// // //     </div>
// // //    );
// // // }