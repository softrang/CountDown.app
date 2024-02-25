const endDate = "27 July 2024 08:20:00 PM"

document.getElementById("end-date").innerText = endDate;


var Day = document.getElementById('in3');
var Hour = document.getElementById('in33');
var Minut = document.getElementById('in333');
var sec = document.getElementById('in3333');

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;

    if (diff < 0) return;

Day.value = Math.floor(diff / 3600 / 24);
Hour.value= Math.floor(diff / 3600) % 24;
Minut.value = Math.floor(diff / 60) % 60;
sec.value = Math.floor(diff) % 60;


}

clock()



setInterval(
    () => {
        clock()
    },
    1000
)