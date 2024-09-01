var score=85;
var friendScore=30;
if(score>80)
  {
    console.log("inside friend score")
    if(friendScore>80)
        {
            console.log("go for lunch")
        }
        else{
            if(friendScore<=80 && friendScore>=60)
                {
                    console.log("Good luck next time")
                }
                else{
                    if(friendScore<60 && friendScore>=40)
                        {
                            console.log("Messege unseen")
                        }
                        else{
                           
                              
                            console.log("Blocked friend")
                                

                        }

                }

        }
  }
else{
   
    console.log("Go home and act sad");
}