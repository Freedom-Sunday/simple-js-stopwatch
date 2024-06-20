let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let start = document.getElementById('start');
let stops = document.getElementById('stop');
let reset = document.getElementById('reset');

let ampm = document.getElementById('ampm');

let sec = 0;
let min = 0;
let hrs = 0;


start.addEventListener('click', function () {
    
    start.innerHTML = 'Start';
    let myInterval = setInterval(function () {
    sec++;
    console.log(sec);
    seconds.innerHTML = sec;

    if (sec >= 59) {
        sec = 0;
        min++;
        minutes.innerHTML = min;
    }

    if (min >= 59) {
        min = 0;
        hrs++;
        hours.innerHTML = hrs;
    }

    if (hrs >= 23) {
       hrs = 0;
       hours.innerHTML = hrs;
    }
    
    }, 0.0000000001);

    stops.addEventListener('click', function () {
        clearInterval(myInterval);
        start.innerHTML = 'Resume';
    });

   reset.addEventListener('click', function () {
    start.innerHTML = 'Start';
     sec = 0;
     seconds.innerHTML = '00';

     min = 0;
     minutes.innerHTML = '00';

     hrs = 0;
     hours.innerHTML = '00';
   })

if (hrs <= 12) {
    ampm.innerHTML = 'AM';
}else if (hrs > 11) {
    ampm.innerHTML = 'PM';
}
});

