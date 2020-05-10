
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

create table user_info (
	id SERIAL PRIMARY KEY,
	farm_name VARCHAR(50),
	farm_location VARCHAR(50),
	brief_description TEXT,
	full_description TEXT,
	share_information TEXT,
	user_id INT REFERENCES "user"
);

CREATE TABLE "drop_info" (
	"id" SERIAL PRIMARY KEY,
	"drop_name" VARCHAR (100),
	"drop_location" VARCHAR (100),
	"user_id" INT REFERENCES "user_info"
);
	
CREATE TABLE "images" (
	"id" SERIAL PRIMARY KEY,
	"image_url" VARCHAR (1000),
	"user_id" INT REFERENCES "user_info"
);

INSERT INTO "user_info" ("user_id", "farm_name", "farm_location", "brief_description", "full_description", "share_information")
    VALUES ('1', 'My Farm', '123 Fake St.', 'We offer Organic produce from mid-June through October!', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sapien ante, tristique eu interdum vitae, cursus vitae lacus. Fusce aliquet sapien sit amet mattis hendrerit. Suspendisse vestibulum hendrerit efficitur. Integer ut auctor erat. Curabitur non justo nec nunc commodo feugiat nec ut justo. Sed maximus maximus magna at aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In pellentesque mi at imperdiet vehicula. Cras ut ipsum vestibulum, ultrices odio eu, elementum dolor. Nulla ultricies nec lectus at tincidunt. Nulla interdum tortor a enim dictum, eget interdum enim aliquet.', 'We offer 1/2 shares for 21$/wk and Full Shares for 38$/wk'
    );

INSERT INTO "user_info" ("user_id", "farm_name", "farm_location", "brief_description", "full_description", "share_information")
    VALUES ('2', 'HeartBeet Farm', '123 Fake St.', 'We offer Organic produce from mid-June through October!', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sapien ante, tristique eu interdum vitae, cursus vitae lacus. Fusce aliquet sapien sit amet mattis hendrerit. Suspendisse vestibulum hendrerit efficitur. Integer ut auctor erat. Curabitur non justo nec nunc commodo feugiat nec ut justo. Sed maximus maximus magna at aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In pellentesque mi at imperdiet vehicula. Cras ut ipsum vestibulum, ultrices odio eu, elementum dolor. Nulla ultricies nec lectus at tincidunt. Nulla interdum tortor a enim dictum, eget interdum enim aliquet.', 'We offer 1/2 shares for 21$/wk and Full Shares for 38$/wk'
    );

INSERT INTO "user_info" ("user_id", "farm_name", "farm_location", "brief_description", "full_description", "share_information")
    VALUES ('3', 'Schrute Farms', '123 Fake St.', 'We offer Organic produce from mid-June through October!', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sapien ante, tristique eu interdum vitae, cursus vitae lacus. Fusce aliquet sapien sit amet mattis hendrerit. Suspendisse vestibulum hendrerit efficitur. Integer ut auctor erat. Curabitur non justo nec nunc commodo feugiat nec ut justo. Sed maximus maximus magna at aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In pellentesque mi at imperdiet vehicula. Cras ut ipsum vestibulum, ultrices odio eu, elementum dolor. Nulla ultricies nec lectus at tincidunt. Nulla interdum tortor a enim dictum, eget interdum enim aliquet.', 'We offer 1/2 shares for 21$/wk and Full Shares for 38$/wk'
    );

insert into user_info (id, farm_name, farm_location, brief_description, full_description, share_information, user_id) values (1, 'Muller, Sawayn and Reynolds Farm', '88 Mccormick Point', 'Duis at velit eu est congue elementum. In hac habitasse platea dictumst.', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1);
insert into user_info (id, farm_name, farm_location, brief_description, full_description, share_information, user_id) values (2, 'Larson, Altenwerth and Leffler Dairy', '926 Hanson Road', 'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 2);
insert into user_info (id, farm_name, farm_location, brief_description, full_description, share_information, user_id) values (3, 'Ferry Farms', '60584 Carioca Center', 'Donec vitae nisi.', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 3);
insert into user_info (id, farm_name, farm_location, brief_description, full_description, share_information, user_id) values (4, 'Fay-Gulgowski Winery', '73425 Lighthouse Bay Crossing', 'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 4);
insert into user_info (id, farm_name, farm_location, brief_description, full_description, share_information, user_id) values (5, 'Stroman Organics', '779 Annamark Center', 'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 5);
insert into user_info (id, farm_name, farm_location, brief_description, full_description, share_information, user_id) values (6, 'Morissette Produce', '580 Wayridge Court', 'Aliquam quis turpis eget elit sodales scelerisque.', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 6);
insert into user_info (id, farm_name, farm_location, brief_description, full_description, share_information, user_id) values (7, 'Langosh Group Farm', '2424 Miller Alley', 'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 'In congue. Etiam justo. Etiam pretium iaculis justo.', 7);
insert into user_info (id, farm_name, farm_location, brief_description, full_description, share_information, user_id) values (8, 'McDermott Farms', '1071 Mayfield Avenue', 'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 8);
insert into user_info (id, farm_name, farm_location, brief_description, full_description, share_information, user_id) values (9, 'Pagac-VonRueden Organic Produce since 1912', '915 Valley Edge Road', 'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 9);
insert into user_info (id, farm_name, farm_location, brief_description, full_description, share_information, user_id) values (10, 'Watsica Farms', '3 Main Avenue', 'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 10);
insert into user_info (id, farm_name, farm_location, brief_description, full_description, share_information, user_id) values (11, 'Ernser-Emard Farm Commune', '001 Luster Pass', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 11);
insert into user_info (id, farm_name, farm_location, brief_description, full_description, share_information, user_id) values (12, 'Connelly-Flatley Farms', '2624 Towne Pass', 'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 12);
insert into user_info (id, farm_name, farm_location, brief_description, full_description, share_information, user_id) values (13, 'Blick-Parker Organic Produce', '977 Susan Park', 'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 13);
insert into user_info (id, farm_name, farm_location, brief_description, full_description, share_information, user_id) values (14, 'Ondricka and Sons Farm', '0 Johnson Center', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 14);
insert into user_info (id, farm_name, farm_location, brief_description, full_description, share_information, user_id) values (15, 'Homenick-Johnston Farmstead', '10 Pond Crossing', 'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 15);

