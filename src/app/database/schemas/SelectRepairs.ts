import { relations, sql } from "drizzle-orm";
import {
  integer,
  sqliteTable,
  text,
  primaryKey,
  index,
  unique,
  uniqueIndex,
  real,
  numeric,
} from "drizzle-orm/sqlite-core";
// import { designs } from "./designs";
// import { generateId } from "@/utils/uid";

export const repairs = sqliteTable(
  "repairs",
  {
    id: text("id")
      .primaryKey(),
    //   .$defaultFn(() => generateId()),
    title: text("title"),
    description: text("description"),
    imageUrl: text("image_url"),
    // price: real("price").notNull().default(0.0),
    status: text("status", { enum: ["publish", "draft"] })
      .notNull()
      .default("draft"),
    // accessPolicy: text("access_policy", { mode: "json" }),
    checker: text("checker"),
    createdAt: text("created_at")
      .notNull()
      .default(sql`(CURRENT_TIMESTAMP)`),
    updatedAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(
      () => new Date()
    ),
  },
  (table) => {
    return {
      repairCheckerIdx: index("repair_author_idx").on(table.checker),
    };
  }
);

export const listingRepairs = sqliteTable(
  "listing_repairs",
  {
    repairId: text("repair_id")
      .notNull()
      .references(() => repairs.id, { onDelete: "cascade" }),
    // designId: text("design_id")
    //   .notNull()
    //   .references(() => designs.id, { onDelete: "cascade" }),
    menuDetail: integer("menu_detail").notNull().default(0),
  },
  (table) => ({
    pk: primaryKey({
      columns: [table.repairId],
    }),
  })
);

export const repairsRelations = relations(repairs, ({ many }) => ({
  repairs: many(listingRepairs),
}));

export const listingRepairsRelations = relations(listingRepairs, ({ one }) => ({
  listing: one(repairs, {
    fields: [listingRepairs.repairId],
    references: [repairs.id],
  }),
//   design: one(designs, {
//     fields: [listingDesigns.designId],
//     references: [designs.id],
//   }),
}));

export type InsertRepair = typeof repairs.$inferInsert;
export type SelectRepair = typeof repairs.$inferSelect;
