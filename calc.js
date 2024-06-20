let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let start = document.getElementById('start');
let stp = document.getElementById('stop');
let reset = document.getElementById('reset');


let sec = 0;
let min = 0;
let hrs = 0;

start.addEventListener('click', function () {
    start.setAttribute('disabled', 'true');
    let myInterval = setInterval(function(){
        sec++;
        console.log(sec);
        seconds.innerHTML = sec;

        if (sec > 59) {
            sec = 0;

            min++;
            minutes.innerHTML = min;
        }

        if (min > 59) {
            min = 0;
            hrs++;
            hours.innerHTML = hrs;
        }

    }, 1000)

    stp.addEventListener('click', function () {
        clearInterval(myInterval);
        start.innerHTML = 'Resume';
        start.removeAttribute('disabled');
    });

    reset.addEventListener('click', function () {
        start.removeAttribute('disabled');
        start.innerHTML = 'Start';
        sec = 0;
        min = 0;
        hrs = 0;

        seconds.innerHTML = '00';
        minutes.innerHTML = '00';
        hours.innerHTML = '00';
    })
})

