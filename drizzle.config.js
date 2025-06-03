// drizzle.config.js
/** @type {import('drizzle-kit').Config} */
module.exports = {
    schema: "./src/app/lib/schema.js",
    out: "./drizzle",
    dialect: "postgresql", // dialect must be spelled correctly
    dbCredentials: {
        host: "localhost",
        port: 5432,
        user: "root",
        password: "1234",
        database: "mechapp",
        ssl: false,
    },
};
