var quarter = 50;
var winnings = 0;
var success = 80;
var counter = 0;


function slotMachine(){
var quartermax = quarter;

 while(quarter > 0){

   var game = Math.floor(Math.random(100)*100);
   var winningAmount = Math.floor(Math.random(100));
   
    if(game === success){
      winnings = quarter;
      console.log("YOU WON!!! YOU GOT " +winnings+ " quarters")
    }
   if(game !== success){
     counter= counter + 1;
     counter++;
   }
   if(counter == quartermax && game !== success){
     console.log("no wins!");
   }
  quarter--;
}


    //console.log("Please insert a quarter!"
}
slotMachine();
