
select i.id,i.name,i.description,i.price,i.availability from items i inner join users s on i.id = s.item_Id inner join address a on a.id  = s.address_id and a.postalcode = 94111 where i.name = "tenis";


select * from users s inner join address a on a.id  = s.address_id and a.postalcode = 94111;

select * from items;
select * from users;
select * from user_items;
select * from items_renting;

insert into user_items (user_Id,item_Id) values ((select id from users where name = 'Allice'),(select id from items where name = 'tennis'));

insert into user_items (user_Id,item_Id) values (2,3);

select * from items i inner join user_items ui on ui.item_Id = i.id inner join users s on ui.user_Id = s.id inner join address a on a.id  = s.address_id and a.postalcode = 94111 where i.name = 'tennis';

select * from items i inner join user_items ui on ui.item_Id = i.id inner join users s on ui.user_Id = s.id inner join address a on a.id  = s.address_id and a.postalcode = 94111 where i.name = 'tennis';


select * from items i inner join user_items ui on ui.item_Id = i.id inner join users s on ui.user_Id = 5;
select * from items i inner join items_renting ri on ri.item_Id = i.id inner join users s on ri.user_Id = 5;