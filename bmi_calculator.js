///***************BMI Calculator***********
var w=70;
var h=1.70;
var bmi = w/(h*h);
if(bmi<18.5)
{
    console.log("you are under weight");     
}
else{
     if(bmi>=18.5 && bmi<=24.9)
     {
        console.log("you are normal");
     }
    else{
        if(bmi>=25 && bmi<=29.9)
            {
               console.log("you are over weight")
            }
            else{
                 console.log("you are obese");
          }
    } 
     
}