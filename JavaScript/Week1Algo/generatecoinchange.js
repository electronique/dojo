var penny = 1;
var nickel = 5;
var dime = 10;
var quarter = 25;
var quarterResult = 0;
var dimeResult = 0;
var nickelResult = 0;

var testAmount = 354;
var counter = 0;
var remainder= 0;

function generateCoinChange(){
 //results in 19 cents

for(var i = quarter; i<= testAmount;i=i+quarter){
  counter = counter + 1;
remainder = testAmount%quarter;
//console.log(remainder);

}
quarterResult = counter;
for(var i = dime; i< remainder;i=i+dime){
counter = 0;
counter = counter + 1;
dimeResult = counter;
remainder = remainder%dime;
}
for(var i = nickel; i< remainder;i=i+nickel){
  counter = 0;
  counter = counter + 1;
nickelResult = counter;
remainder = remainder%nickel;
//console.log(remainder);
}
console.log(testAmount + " cents can be represented as:"+quarterResult+" quarters, " +dimeResult+" dimes, "+nickelResult+" nickels, and "+remainder+" pennies");

}
generateCoinChange();
