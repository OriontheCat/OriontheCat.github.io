function getTimeRemaining (endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date())
  var seconds = Math.floor((t / 1000) % 60)
  var minutes = Math.floor((t / 1000 / 60) % 60)
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24)
  var days = Math.floor(t / (1000 * 60 * 60 * 24))
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  }
}

function initializeClock (id, endtime) {
  var clock = document.getElementById(id)
  var daysSpan = clock.querySelector('.days')
  var hoursSpan = clock.querySelector('.hours')
  var minutesSpan = clock.querySelector('.minutes')
  var secondsSpan = clock.querySelector('.seconds')

  function updateClock () {
    var t = getTimeRemaining(endtime)

    daysSpan.innerHTML = t.days
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2)
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2)
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2)

    if (t.total <= 0) {
      clearInterval(timeinterval)
    }
  }

  updateClock()
  var timeinterval = setInterval(updateClock, 1000)
}

var d = new Date()
var ep2 = '2017-07-30'
var ep3 = '2017-08-06'
var ep4 = '2017-08-13'
var ep5 = '2017-08-20'
var ep6 = '2017-08-27'
var ep7 = '2017-09-03'
var ep8 = '2017-09-10'
var ep9 = '2017-09-17'
var ep10 = '2017-09-23'
function updateTitle () {
  if (d < new Date(ep2)) {
    window.deadline = ep2
    document.getElementById('rnmep').innerHTML = 'Rick and Morty S3E2'
  } else if (new Date(ep2) < d && d < new Date(ep3)) {
    window.deadline = ep3
    document.getElementById('rnmep').innerHTML = 'Rick and Morty S3E3'
  } else if (new Date(ep3) < d && d < new Date(ep4)) {
    window.deadline = ep4
    document.getElementById('rnmep').innerHTML = 'Rick and Morty S3E4'
  } else if (new Date(ep4) < d && d < new Date(ep5)) {
    window.deadline = ep5
    document.getElementById('rnmep').innerHTML = 'Rick and Morty S3E5'
  } else if (new Date(ep5) < d && d < new Date(ep6)) {
    window.deadline = ep6
    document.getElementById('rnmep').innerHTML = 'Rick and Morty S3E6'
  } else if (new Date(ep6) < d && d < new Date(ep7)) {
    window.deadline = ep7
    document.getElementById('rnmep').innerHTML = 'Rick and Morty S3E7'
  } else if (new Date(ep7) < d && d < new Date(ep8)) {
    window.deadline = ep8
    document.getElementById('rnmep').innerHTML = 'Rick and Morty S3E8'
  } else if (new Date(ep8) < d && d < new Date(ep9)) {
    window.deadline = ep9
    document.getElementById('rnmep').innerHTML = 'Rick and Morty S3E9'
  } else if (new Date(ep9) < d && d < new Date(ep10)) {
    window.deadline = ep10
    document.getElementById('rnmep').innerHTML = 'Rick and Morty S3E10'
  }
}
updateTitle()

initializeClock('clockdiv', deadline)
