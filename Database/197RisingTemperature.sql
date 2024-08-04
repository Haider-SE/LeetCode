# Write your MySQL query statement below
select w1.id as Id from Weather w1 join Weather w2 
on Date_Sub(w1.recordDate, Interval 1 Day) = w2.recordDate
where w1.temperature > w2.temperature 