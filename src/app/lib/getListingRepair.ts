// // backend database query relational

// // import { repairId } from "@/app/lib/";
// import {
//     SelectRepair
// } from "@/app/database/schemas/SelectRepairs";
// import { and, desc, eq, getTableColumns, inArray, like, or, sql } from "drizzle-orm";
// import { getRepairs } from "../Api/useRepair";
// import { repairs } from "./schema";


// export interface GetRepairs {
//   rows: Array<SelectRepair & { totalRepair: number }>;
//   total: number;
// }

// export const uploadImage = async (repairId: string, file: File) => {
//   const extName = file.name.split(".").pop();

//   const data = await file.arrayBuffer();
// };

// // Add category to listing
// export const addCategory = async (
//   tenantId: string,
//   listingId: string,
//   categoryName: string,
//   params?: {
//     description?: string;
//     parent?: string | null;
//   },
// ) => {

//     const db = await getRepairs(repairId);


//   // upsert category repair
//   const reportResult = await db
//     .insert(repairs)
//     .values({
//       name: repairName,
//       cat: "category",
//     //   taxonomy: "category",
//       description: params?.description,
//       parent: params?.parent,
//     })
//     .onConflictDoUpdate({
//       target: [repair.name, repair.cat],
//       set: {
//         name: categoryName,
//         description: params?.description,
//         parent: params?.parent,
//       },
//     })
//     .returning();

//   const cat = first(repairResult);
//   if (!cat?.id) {
//     throw new Error("Failed to create category");
//   }

//   // Check if the relationship already exists
//   const existingRelationships = await db.query.listingRepairRelationships.findFirst({
//     where: and(
//       eq(listingRepairRelationships.repairId, listingId),
//       eq(termRelationships.termId, cat.id)
//     )
//   });

//   if (!existingRelationships) {
//     const termRelResult = await db
//       .insert(listingRepairRelationships)
//       .values({
//         objectId: listingId,
//         termId: cat?.id,
//       })
//       .onConflictDoNothing()
//       .returning();

//     return first(repairRelResult);
//   }
//   return existingRelationships;
// };

// export const updateCategory = async (
//   repairId: string,
//   listingId: string,
//   category: string,

// ) => {
//   // Logic Update Category
//   //
//   // 1. Get category from categoryName on term_relationships where objectId = listingId
//   //
//   // 2.

//   const db = await getRepairs(repairId);

//   const currentRepairResult = await db.query.repairs.findFirst({
//     where: and(
//       eq(repairs.name, category),
//       eq(repairs.cat, "category")
//     )
//   });
//   console.log("current repair", currentRepairResult);

//   let termId = currentRepairResult?.id || "";

//   if (!termId) {
//     const termResult = await db
//       .insert(terms)
//       .values({
//         name: category,
//         taxonomy: "category",
//       })
//       .onConflictDoUpdate({
//         target: [terms.name, terms.taxonomy],
//         set: {
//           name: category,
//           taxonomy: "category",
//         }
//       })
//       .returning();
//     console.log("ini term", termResult);

//     const cat = first(termResult);
//     if (!cat) {
//       throw new Error("Term ID is undefined");
//     }
//     termId = cat.id;
//   }

//   // Check if the relationship already exists
//   const existingRelationship = await db.query.termRelationships.findFirst({
//     where: and(
//       eq(termRelationships.objectId, listingId),
//       eq(termRelationships.termId, termId)
//     )
//   });

//   if (!existingRelationship) {
//     const termResult = await db
//       .insert(termRelationships)
//       .values({
//         objectId: listingId,
//         termId,
//       })
//       .onConflictDoNothing()
//       .returning();

//     return first(termResult);
//   }
//   return existingRelationship;
// }

// // create listing repair
// export const createListing = async (
//   repairId: string,
//   params: {
//     title: string;
//     checker: string;
//     description?: string;
//     imageUrl?: string;
//     status?: "macro" | "minor";
//   },
// ) => {
//   const db = await getRepairs(repairId);
//   const result = await db.insert(repairs).values(params).returning();
//   return first(result);
// };

// // update listing repair
// export const updateListing = async (
//   repairId: string,
//   listingId: string,
//   params: {
//     title: string;
//     checker: string;
//     description?: string;
//     imageUrl?: string;
//     status?: "macro" | "minor";
//   },
// ) => {
//   const db = await getRepairs(repairId);
//   const result = await db
//     .update(listings)
//     .set(params)
//     .where(eq(listings.id, listingId))
//     .returning();

//   return first(result);
// };

// // remove repair from listing
// export const removeRepairFromListing = async (
//   repairId: string,
//   listingId: string,
// ) => {
//   const db = await getRepairs(repairId);
//   const result = await db
//     .delete(listingRepairs)
//     .where(
//       and(
//         eq(listingRepairs.listingId, listingId),
//         inArray(listingRepairs.repairId, repairIds),
//       ),
//     )
//     .returning({ deleted: listingRepairs.repairId });

//   return first(result);
// };

// // get all listing repairs
// export const getRepairs = async (
//   repairId: string,
//   filter?: {
//     search?: string;
//     status?: "macro" | "minor";
//   },
//   page?: number,
//   pageSize?: number,
// ) => {
//   const db = await getRepairs(repairId);
//   const query = db
//     .select({
//       ...getTableColumns(listings),
//       totalRepair: sql<number>`count(repairs.id)`,
//     })
//     .from(listings)
//     .leftJoin(listingRepairs, eq(listingRepairs.repairId, listings.id))
//     .leftJoin(repairs, eq(repairs.id, listingRepairs.designId))
//     .where(
//       and(
//         filter?.status ? eq(listings.status, filter.status) : undefined,
//         filter?.search
//           ? or(
//             like(listings.title, `%${filter.search}%`),
//             like(listings.description, `%${filter.search}%`),
//             like(designs.id, `%${filter.search}%`),
//             like(designs.name, `%${filter.search}%`),
//           )
//           : undefined,
//       ),
//     )
//     .groupBy(listings.id);

//   return withPagination(db, query, desc(listings.updatedAt), page, pageSize);
// };

// // get single listing repair
// export const getListing = async (
//   repairId: string,
//   listingId: string,
// ) => {
//   const db = await getRepairs(repairId);
//   // const data = await db.query.listings.findFirst({
//   //   where: eq(listings.id, listingId),
//   //   with: withDesigns
//   //     ? {
//   //         designs: {
//   //           with: {
//   //             design: true,
//   //           },
//   //         },
//   //       }
//   //     : undefined,
//   // });

//   const stmt = sql`
//     SELECT
//       listings.*,
//       json_group_array(json_object(
//         'id', repairs.id,
//         'name', repairs.name,
//         'image', repairs.image_url,
//         'updatedAt', repairs.updated_at
//       )) AS includedRepairs,
//       json_group_array(term_relationships.term_id) AS categories
//       FROM listings
//       LEFT JOIN listing_repairs ON listing_repairs.listing_id = listings.id
//       LEFT JOIN term_relationships ON term_relationships.repair_id = listings.id
//     WHERE listings.id = ${listingId}
//     GROUP BY listings.id;
//   `;

//   const data = (await db.run(stmt).then(({ rows }) => {
//     const firstRow = first(rows);
//     return mapKeys(firstRow, (v, k) => camelCase(String(k)));
//   })) as SelectRepair & {
//     includedImageUrl: string;
//     categories: string;
//   };

//   return {
//     ...data,
//     includedImageUrl: JSON.parse(data?.includedImageUrl || "[]"),
//     categories: JSON.parse(data?.categories || "[]").filter(Boolean),
//   } as SelectRepair & { includedImageUrl: any[]; categories: string[] };
// };

// // delete listing
// export const deleteListing = async (
//   repairId: string,
//   listingId: string,
//   deleteBy: string,
// ) => {
//   const db = await getRepairs(repairId);
//   const listing = await getListing(repairId, listingId);

//   if (!listing) {
//     throw new Error("Listing not found");
//   }

//   const checker = listing?.checker || "";
//   if (checker !== deleteBy) {
//     throw new Error("You are not allowed to perform this action");
//   }

//   const result = await db
//     .delete(listings)
//     .where(eq(listings.id, listingId))
//     .returning({ deleted: listings.id });

//   return first(result);
// };
