
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

-- hard coded edibles --- for all users to reference as a starting platform -- displays in the pantry
INSERT INTO "edibles_db" ("edible","description","season","location", "image")
VALUES ('Morel', 'A widely distributed edible fungus which has a brown oval or pointed fruiting body with an irregular honeycombed surface bearing the spores.', 'Spring', 'Throughout The United States', 'images/morel1.jpeg'),
('Chicken of The Woods', 'Vividly bright sulphur-yellow bracket of shelf fungus that is fan shaped.','Fall', 'Throughout The United States', 'images/chicken2.jpeg'),
('Common Nettle','Stems are upright and rigid. Leaves are heart shaped, finely toothed, and tapered at the ends, and flowers are yellow or pink. The entire plant is covered with tiny stiff hairs, mostly on the underside of the leaves and stem, that release stinging chemicals when touched.', 'Summer', 'Throughout The United States', 'images/nettle.jpeg'),
('Chanterelle', 'They are orange, yellow or white, meaty and funnel shaped. On the lower surface, underneath the smooth cap, most species have rounded, forked folds that run almost all the way down the stem which tapers down seamlessly from the cap.','Late Summer to Early Fall','Throughout The United States', 'images/chanterelle.jpeg'),
('Hen of the Woods (Maitake)', 'The fruit body is composed of clusters of flattened caps that to some, are reminiscent of a sitting hen. From the bottom, the stem and branch structure have an appearance somewhat to the underside of a cauliflower. The pore surface is grayish in younger specimens becoming more white with age and developing some yellow or brown tones as it passes its peak.', 'Fall', 'Parts of the US and Canada', 'images/henofwoods.jpeg'),
('Oyster Mushroom', 'Oyster mushrooms have a white to light brown to a darker brown, funnel-shaped cap, with whitish- yellow gills running up a short off-center stem. The flesh is white. The cap grows in a shelf-like formation often with overlapping clusters. Gills are white and decurrent. The stem is very short, stout, lateral, and they are somewhat hairy near the base.', 'Spring - Fall','Throughout the US', 'images/oyster.jpeg'),
('Wild Ramps', 'leaves are bright green and grow up to a foot in length by about 3 inches wide. Generally, each plant has two leaves that are anchored below ground by a white bulb similar to that of green onion. The stem is also a great indicator. Look for a red hue that runs from the base of the leaf to the bulb.', 'Spring', 'eastern North America', 'images/wildramps.jpeg'),
('Wild Asparagus', 'This herbaceous perennial plant is 2½–7ft tall at maturity, branching occasionally. At the base of the plant, the primary stem is relatively stout. Small alternate leaves are appressed against this stem; they are light yellow to purple, and triangular in shape, and scale-like in appearance.', 'Spring', 'Throughout The United States', 'images/asparugus1.jpg'),
('Cattail', 'Cattails are upright perennial plants that emerge from creeping rhizomes. The long tapering leaves have smooth margins and are somewhat spongy. The tiny unisexual flowers are borne on a dense cylindrical spike, with the male flowers located above the female flowers.', 'Spring-Summer', 'Throughout The United States', 'images/cattail.jpeg'),
('Wild Raspberry', 'A shrub with arching, prickle-covered stems that grow up to 6 feet high. Young stems are covered in bristles rather than prickles. The leaves are made up of 3 to 5 oval leaflets with serrated margins and light gray, hairy undersides.', 'Summer-Fall', 'Throughout The United States', 'images/raspberry.jpeg')
;
