/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
var age= 60;
var fare=800;
if(age<10)
{
    console.log("Free")
}
else if(age ==='student')
{   
    fare = 800-((800*50)/100);
    console.log("50% discount :*******"+fare+""+"tk only*****")
}
else if(age >=60)
{
   fare = 800-((800*15)/100);
   console.log("15% discount :*******"+fare+""+"tk only******")
}
else{
    console.log("800 tk only")
}