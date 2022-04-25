
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);






ALTER TABLE "user" ADD COLUMN "clearance"  INTEGER DEFAULT 1;

CREATE TABLE "user_finds"(
"id" SERIAL PRIMARY KEY,
"user_id" integer references "user",
"edible_id" integer,
"item_name" varchar(255),
"description" varchar(500),
"season" varchar (255),
"location" varchar (255),
"image" varchar (255));


CREATE TABLE "edibles_db"(
"id" SERIAL PRIMARY KEY,
"user_id" integer references "user",
"edible" varchar (255),
"description" varchar (255),
"season" varchar (255),
"location" varchar (255),
"image" varchar (500));

INSERT INTO "edibles_db" ("edible","description","season","location", "image")
VALUES ('Morel', 'A widely distributed edible fungus which has a brown oval or pointed fruiting body with an irregular honeycombed surface bearing the spores.', 'Spring', 'Minnesota', 'images/morel1.jpeg'),
('Chicken of The Woods', 'Vividly bright sulphur-yellow bracket of shelf fungus that is fan shaped.', 'Minnesota', 'Fall', 'images/chickenofwoods.jpeg');


UPDATE "user_finds" SET  "item_name" = 'CHANGE', "description" = 'CHANGE', "season" = 'CHANGE',
    "location" = 'CHANGE', "image" = 'CHANGE' WHERE "id" = '11';




DELETE FROM "edibles_db" WHERE id = 6;



SELECT * FROM "user_finds" WHERE "user_id" = $1;