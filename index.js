let sec =0;
let min=0;
let hour=0;
var hour_data=document.querySelector('.hour_data').innerHTML;
var min_data=document.querySelector('.min_data').innerHTML;
var sec_data=document.querySelector('.sec_data').innerHTML;



function start(){

    setInterval(()=>{
        if (sec===60) {
            sec=0;
            min+=1
        }
        if (min==60) {
            min=0;
            hour+=1;
        }

        sec+=1;
        sec_data=sec;
        min_data=min;
        hour_data=hour;

    },[1000])

}
function stop(){
    clearInterval();
}
function reset(){
  min=0;
  sec=0;
  hour=0;
  sec_data=sec;
  min_data=min;
  hour_data=hour;
  
}

