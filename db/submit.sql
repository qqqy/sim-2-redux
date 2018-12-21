insert into house (propertyname, address, city, state, zip)
values ($(propertyname), $(address), $(city), $(state), $(zip))
returning *