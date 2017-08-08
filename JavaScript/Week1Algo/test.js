

var arr = [2,10,15,3];
var min = arr[0];
var max = arr[0];
var avg = arr[0];
var sum = arr[0];

function myfunction(){

  for(var i = 0; i<arr.length; i++){
    if(arr[i]>max){
      max = arr[i];
    }
    if(arr[i]<min){
      min= arr[i];
    }
    sum = sum + arr[i];
    avg = sum/arr.length;


  }
  var arrnew = [max, min,avg];
  console.log(arrnew);
}
myfunction();
