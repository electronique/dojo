 var numbersOnly = [1, "apple",-3,"orange",0.5];
var newArray = [];
function numberFilter(){
  for(var i=0; i<numbersOnly.length; i++){
 if(typeof numbersOnly[i] == "number"){
   newArray.push(numbersOnly[i]);
 }

 }
console.log(newArray);
}
numberFilter();
