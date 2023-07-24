"use strict";
const getS = (selector) => document.querySelector(selector);

/*current data*/
setInterval(() => {
    let ii = new Date();
    let dd=  ii.getDate();
    let mm = ii.getMonth() + 1;
    let ff = ii.getFullYear();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm ;
    if (ff < 10) ff = '0' + ff;
    document.querySelector('.digital-date').innerHTML = `${dd} . ${mm} . ${ff}`
})


setInterval(() => {
    let dd = new Date();
    let hh = dd.getHours();
    let mm = dd.getMinutes();
    let ss = dd.getSeconds();
    if (hh < 10) hh = '0' + hh;
    if (mm < 10) mm = '0' + mm;
    if (ss < 10) ss = '0' + ss;
    document.querySelector('.digital-clock').innerHTML = `${hh} : ${mm} : ${ss}`
})


function returnData(zero) {
    return zero >= 10 ? zero : `0${zero}`;
  }

/*timer*/
let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
getS(".btn-loop").disabled = true;

let timerID;

function start() {
  stop();
  timerID = setInterval(() => {
    timer();
  }, 10);
  getS(".btn-start").disabled = true;
  getS(".btn-reset").disabled = true;
  getS(".btn-stop").disabled = false;
  getS(".btn-loop").disabled = false;
}
function loop() {
  createElement();
}

function createElement() {
  let p = document.createElement("p");
  p.textContent = getS(".stopwatch-time").textContent;
  getS(".loop").append(p);

  if (getS(".loop").children.length >= 4) {
    getS(".loop").style.overflowY = "scroll";
  }
}

function stop() {
  clearInterval(timerID);
  getS(".btn-start").disabled = false;
  getS(".btn-reset").disabled = false;
  getS(".btn-stop").disabled = true;
}

function reset() {
  getS(".stopwatch-time").textContent = "00:00:00:000";
  getS(".loop").textContent = "";
  getS(".btn-loop").disabled = true;
}
function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  getS(".stopwatch-time").innerText = `${returnData(hour)}:${returnData(
    minute
  )}:${returnData(second)}:${returnData(millisecond)}`;
}

/* countdown timer*/ 

let x = getS(".countdown-number").innerHTML;
function plus() {
  if (x < 25) {
    getS(".countdown-number").textContent = x + 1;
    x++;
  }
}
function minus() {
  if (x > 0) {
    getS(".countdown-number").textContent = x - 1;
    x--;
  }
}
let timersID;
let minutes = getS(".minutes").innerHTML;
let seconds = 0;
let check = true;

function cdStart() {
  if (check) {
    getS(".minutes").textContent = ` ${returnData(
      getS(".countdown-number").textContent
    )}`;
  }
  startTimer();

  getS(".btn-cd-start").disabled = true;
  getS(".btn-cd-reset").disabled = true;
  getS(".btn-cd-stop").disabled = false;
  getS(".btn-plus").disabled = true;
  getS(".btn-minus").disabled = true;
}
function cdStop() {
  clearTimeout(timersID);
  check = false;

  getS(".btn-cd-start").disabled = false;
  getS(".btn-cd-reset").disabled = false;
  getS(".btn-cd-stop").disabled = true;
}

function cdReset() {
  getS(".minutes").innerHTML = "00";
  getS(".seconds").innerHTML = "00";
  check = true;
  getS(".btn-plus").disabled = false;
  getS(".btn-minus").disabled = false;
}

function startTimer() {
  minutes = getS(".minutes").innerHTML;
  timersID = setTimeout(function () {
    seconds--;

    if (seconds == 0 && minutes == 0) {
      getS(".seconds").innerHTML = "00";
      check = true;
      return;
    }

    if (seconds < 0) {
      seconds = 59;
      if (minutes >= 0) {
        minutes--;
      }
      getS(".minutes").innerHTML = `${returnData(minutes)}`;
    }

    getS(".seconds").innerHTML = `${returnData(seconds)}`;

    startTimer();
  }, 1000);
}