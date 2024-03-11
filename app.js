var button=document.getElementById("button");
var hour=document.getElementById("hour");
var minutes=document.getElementById("minutes");
var seconds=document.getElementById("seconds");
var intervalid;
function start()
{   
    intervalid=setInterval(function(){
        var currentseconds=Number(seconds.textContent);
        if(currentseconds<59)
        {
            seconds.textContent=padValue(currentseconds+1);
        }
        else{
            seconds.textContent = "00";
            var currentminutes=Number(minutes.textContent);
            if(currentminutes<59)
            {
                minutes.textContent=padValue(currentminutes+1);
            }
            else{
                minutes.textContent="00"
                var currenthour=Number(hour.textContent);
                if(currenthour<23)
                {
                    hour.textContent=padValue(currenthour+1);
                }
                else
                {
                    hour.textContent="00";
                }
            }
        }
    },1000)
}

function stop()
{
    clearInterval(intervalid)
}
function padValue(value) {
    return value < 10 ? "0" + value : value;
}
