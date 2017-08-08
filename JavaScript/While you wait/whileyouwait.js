
/*For every day, print how many days left.

If it's more than 30 days, print a sad message.

If it's less than 30 days, print a message that sounds excited!

If it's less than 5 days, SCREAM IT!

ONCE IT'S YOUR BIRTHDAY HAVE PARTY!

60 days until my birthday. Such a long time... :(
59 days until my birthday. Such a long time... :(
58 days until my birthday. Such a long time... :(
2 DAYS UNTIL MY BIRTHDAY!!!
1 DAY UNTIL MY BIRTHDAY!!!
♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*
♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪
*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«*/

var daysUntilMyBirthday = 20;

while(daysUntilMyBirthday>=0){

      if(daysUntilMyBirthday>=15){
          console.log( daysUntilMyBirthday+ " days until my birthday, how sad :\-\(");
      }
      if(daysUntilMyBirthday>0){
              console.log(daysUntilMyBirthday+ " DAYS UNITL MY BIRTHDAY!!");

          }
      if(daysUntilMyBirthday===0){
              console.log("HAPPY BIRTHDAY!!!!!, It my day!");
            }
daysUntilMyBirthday--;
}
