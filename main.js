alert ("Hey there! Let's play a game!")


var letsGo = confirm ("Are you ready?")

    if (letsGo === true) {
        alert ("Great! The name of the game is called Math Whiz")
    }
        else {
            alert ("Aww! Maybe, next time?!")
             } 

        var play = confirm ("Are you sure you want to play?")
        if (play === true)  
            {
            var add = confirm ("16 + 18 = 74 Is this statement true?") 
           
            if (add === true) 
            {
            alert ("Congratulations! Next question.");

                for (var i=1;i<=3;i++) 
                {
                 var next = prompt ("If Amy has 10 pies and she gives away 3 but receives 5 pies as a gift. How many pies does Amy have? You have 3 attempts to figure it out!") 

                if (next === "12")
                    {
                    alert ("Yay! So smart!");
                    var smart = true ;    

                    break;   
                    } 
                else {
                alert ("Try again.")
                smart = false;
                     }
                }
                
                if (smart == true) 
                { var multiply = confirm ("12 * 12 = 124 Is this statement true?")
       
                if (multiply === true) 
                { alert ("Sorry, the correct answer is 144") }
                
                else { alert ("Wow, You're a genius!") }
                 }    
            }   

            }

        else { 
            alert ("Come back and play again")
            
            }
   
