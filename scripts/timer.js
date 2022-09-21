const oDate = new Date("Aug 18, 2022 23:00:00").getTime();
const sDate = new Date("Sep 20, 2022 00:00:00").getTime();
const oTimer = document.querySelector("#oTimer");
const sTimer = document.querySelector("#sTimer");

function getTimeO() {
    let today = new Date().getTime();
    let distance = today - oDate;
    let oDays = Math.floor(distance / (1000 * 60 * 60 * 24));
    let oHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let oMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let oSeconds = Math.floor((distance % (1000 * 60)) / 1000);
    let oTime = oDays + "d " + oHours + "h " + oMinutes + "m " + oSeconds + "s ";
    oTimer.textContent = oTime;
}

function getTimeS() {
    let today = new Date().getTime();
    let distance = today - sDate;
    let sDays = Math.floor(distance / (1000 * 60 * 60 * 24));
    let sHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let sMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let sSeconds = Math.floor((distance % (1000 * 60)) / 1000);
    let sTime = sDays + "d " + sHours + "h " + sMinutes + "m " + sSeconds + "s ";
    sTimer.textContent = sTime;
}


setInterval(getTimeO,1000);
setInterval(getTimeS,1000);
