
var sum = 0;
var min = 100;
var max = 4000000;

function betterthreeFives(){
  for(var i = min; i<max;i++){
 if(i%3 === 0){
   sum = sum + i;
  //console.log(i);

 }

  }
console.log(sum);
}
betterthreeFives();
