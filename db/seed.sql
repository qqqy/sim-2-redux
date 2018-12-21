-- CREATE TABLE SEED --

create table house (
    ID serial primary key,
    ProperyName text,
    Address text,
    City text,
    State varchar(2),
    Zip integer
);

-- INSERT --

insert into house (properyName, address, city, state, zip)
values
    ('Green Gables TEST', 'Green Gables Drive', 'SomeWhere in Canada?', 'MN', 23456),
    ('Wuthering Heights TEST', 'Somewhere in the Country', 'Somewhere in England', 'NY', 23456),
    ('Bag End', 'Bag End', 'The Shire', 'UT', 12345);