function myfunction(){
    var arr = [10,5,12,4];
    var min = arr[0];
    var max = arr[0];
    var avg = arr[0];

    for(var i = 1; i< arr.length;i++){
        if(arr[i]<max){
            max = arr[i];
        }
        if(arr[i]<min){
            min = arr[i];
        }

        }
        console.log(max);
        console.log(min);
    }
