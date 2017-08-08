var HOUR = 7;
var MINUTE = 40;
var PERIOD = "AM";
function time(){
    if( MINUTE > 30){
        var NEXTHOUR = HOUR +1;
        var HOURTIME = "almost "+NEXTHOUR;
        
    
    }
    if(PERIOD == "AM"){
        var day =" in the morning";
    }
    else{
        var day =" in the evening";
    }
    if(MINUTE < 30){
        var HOURTIME = "just after "+HOUR
    }
    console.log("It's "+HOURTIME + day)
}