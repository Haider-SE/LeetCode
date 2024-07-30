Select firstName, lastName, city, state from Person 
left join Address ad
on Person.personId = ad.personId
