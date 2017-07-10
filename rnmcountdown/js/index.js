function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var ep2 = new Date("2017-07-30");
var ep3 = new Date("2017-08-06");
var ep4 = new Date("2017-08-13");
var ep5 = new Date("2017-08-20");
var ep6 = new Date("2017-08-27");
var ep7 = new Date("2017-09-03");
var ep8 = new Date("2017-09-10");
var ep9 = new Date("2017-09-17");
var ep10 = new Date("2017-09-23");
function upDate() {
 if Date() < ep2
  then var deadline = ep2
 if ep2 =< Date() < ep3
  then var deadline = ep2
}
console.log(ep2)
console.log(ep3)
console.log(ep4)
initializeClock('clockdiv', deadline);
