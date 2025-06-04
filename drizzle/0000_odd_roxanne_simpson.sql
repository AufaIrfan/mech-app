CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"email" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "repairs" (
	"repairId" serial PRIMARY KEY NOT NULL,
	"repairName" varchar(255),
	"repairDesc" text NOT NULL
);
