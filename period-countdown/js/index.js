var today = new Date()
	// Update the count down every 1 second
var x = setInterval(function() {
	// Get todays date and time
	var now = new Date().getTime();
	var bp1 = new Date()
	bp1.setHours(7, 45, 0, 0)
	var tbp1 = bp1 - now
	var ep1 = new Date()
	ep1.setHours(9, 5, 0, 0)
	var tep1 = ep1 - now
	var bp2 = new Date()
	bp2.setHours(9, 15, 0, 0)
	var tbp2 = bp2 - now
	var ep2 = new Date()
	ep2.setHours(10, 35, 0, 0)
	var tep2 = ep2 - now
	var bflex = new Date()
	bflex.setHours(10, 35, 0, 0)
	var tbflex = bflex - now
	var eflexandbp3 = new Date()
	eflexandbp3.setHours(11, 25, 0, 0)
	var teflexandbp3 = eflexandbp3 - now
	var ep3 = new Date()
	ep3.setHours(12, 45, 0, 0)
	var tep3 = ep3 - now
	var bp4 = new Date()
	bp4.setHours(12, 50, 0, 0)
	var tbp4 = bp4 - now
	var ep4 = new Date()
	ep4.setHours(14, 10, 0, 0)
	var tep4 = ep4 - now
	var bp5 = new Date()
	bp5.setHours(14, 15, 0, 0)
	var tbp5 = bp5 - now
	var ep5 = new Date()
	ep5.setHours(15, 35, 0, 0)
	var tep5 = ep5 - now
	var bathe = new Date()
	bathe.setHours(15, 45, 0, 0)
	var tbathe = bathe - now
	var eatheandbathl = new Date()
	eatheandbathl.setHours(17, 15, 0, 0)
	var teatheandbathl = eatheandbathl - now
	var eathl = new Date()
	eathl.setHours(18, 45, 0, 0)
	var teathl = eathl - now
	var times = [tbp1, tep1, tbp2, tep2, tbflex, teflexandbp3, tep3, tbp4, tep4, tbp5, tep5, tbathe, teatheandbathl, teathl];
	var timespos = times.filter(function(x) {
		return x > 0
	});
	var min = Math.min(...timespos)
	console.log(min)
	var countDownDate;
	var period;
	if (min == tbp1) {
		var countDownDate = bp1
		var period = "Until the Beginning of Period 1"
	} else if (min == tep1) {
		var countDownDate = ep1
		var period = "Until the End of Period 1"
	} else if (min == tbp2) {
		var countDownDate = bp2
		var period = "Until the Beginning of Period 2"
	} else if (min == tep2) {
		var countDownDate = ep2
		var period = "Until the End of Period 2"
	} else if (min == tbflex) {
		var countDownDate = bflex
		var period = "Until the Beginning of Flex"
	} else if (min == teflexandbp3) {
		var countDownDate = eflexandbp3
		var period = "Until the End of Flex and the Beginning of Period 3"
	} else if (min == tep2) {
		var countDownDate = ep2
		var period = "Until the End of Period 3"
	} else if (min == tbp4) {
		var countDownDate = bp4
		var period = "Until the Beginning of Period 4"
	} else if (min == tep4) {
		var countDownDate = ep4
		var period = "Until the End of Period 4"
	} else if (min == tbp5) {
		var countDownDate = bp5
		var period = "Until the Beginning of Period 5"
	} else if (min == tep1) {
		var countDownDate = ep5
		var period = "Until the End of Period 5"
	} else if (min == tbathe) {
		var countDownDate = bathe
		var period = "Until the Beginning of Early Athletics"
	} else if (min == teatheandbathl) {
		var countDownDate = eatheandbathl
		var period = "Until the End of Early Athletics\nand the Beginning of Late Athletics"
	} else if (min == teathl) {
		var countDownDate = eathl
		var period = "Until the End of Late Athletics"
	} else {
		console.log("crap")
	};
	document.getElementById("period").innerHTML = "Time " + period
		// Find the distance between now an the count down date
	var distance = countDownDate - now;
	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	// Display the result in the element with id="countdown"
	document.getElementById("days").innerHTML = days
	document.getElementById("hours").innerHTML = hours
	document.getElementById("minutes").innerHTML = minutes
	document.getElementById("seconds").innerHTML = seconds
// If the count down is finished, write some text
}, 1000);
