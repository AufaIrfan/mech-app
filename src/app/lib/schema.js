// schema.js
const { pgTable, serial, text, varchar } = require('drizzle-orm/pg-core');

const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }),
  email: text('email').notNull(),
});

const repairs = pgTable('repairs', {
    repairId: serial('repairId').primaryKey(),
    repairName: varchar('repairName', { length: 255 }),
    repairDesc: text('repairDesc').notNull(),
});

const machines = pgTable('machines', {
    machineId: serial('machineId').primaryKey(),
    machineNo: varchar('machineNo', { length: 255 }),
    machineType: text('repairType').notNull(),
    assetNo: text('assetNo').notNull(),
    serialNo: text('serialNo').notNull(),
    machineUsage: text('serialNo').notNull(),
});

const machanics = pgTable('machanics', {
    machanicId: serial('machanicId').primaryKey(),
    machanicNo: varchar('machanicNo', { length: 255 }),
    machineName: text('repairType').notNull(),
});

const stocks = pgTable('stocks', {
    stockId: serial('stockId').primaryKey(),
    stockNo: varchar('stockNo', { length: 255 }),
    stockType: text('stockType').notNull(),
    stockName: text('stockName').notNull(),
});

const categories = pgTable('categories', {
    catId: serial('catId').primaryKey(),
    catName: text('catName').notNull(),
});

const borrows = pgTable('borrows', {
    borrowId: serial('borrowId').primaryKey(),
    borrowName: text('borrowName').notNull(),
    repairDesc: text('borrowDesc').notNull(),
});

module.exports = { users, repairs, machines, mechanics, stocks, categories, borrows };
