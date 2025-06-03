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

module.exports = { users, repairs };
