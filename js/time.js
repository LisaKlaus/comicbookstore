function currentTime() {
   let date = new Date();
   let hour = date.getHours();
   let minute = date.getMinutes();
   let second = date.getSeconds();
   hour = plusZero(hour);
   minute = plusZero(minute);
   second = plusZero(second);
   console.log(hour, minute, second);
   document.getElementById('time').innerText = hour + " : " + minute + " : " + second;
   setTimeout(currentTime, 1000)
}

function plusZero(number){
    if(number < 10) {
        return'0' + number;
    }else{
        return number
    }
}

currentTime();