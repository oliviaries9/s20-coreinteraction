
function timeUnit(output, secondsOrMinutes_4){



	if(output < 10){
		secondsOrMinutes_4.innerHTML = "0" + output;
	}else{
		secondsOrMinutes_4.innerHTML = output;



}

	// we want to take the current count 
	//then add a 0 to the front 
	//replace the current seconds value
}


/*
THIS IS A TIMER 
*/ 

var counter_four = 0;
var minutecounter_four = 0; 
var hourcounter_four = 0;
var seconds_four = document.getElementById("seconds-4")
var minutes_four = document.getElementById("minutes-4")
var hours_four = document.getElementById("hours-4")


function myRepeater_4(){

	//console.log(counter)
	timeUnit(counter_four, seconds_four)

	counter_four = counter_four + 1;



	if(counter_four === 60){
		counter_four = 0;
		minutecounter_four = minutecounter_four + 1;
		timeUnit(minutecounter_four, minutes_four)
	}

	if(minutecounter_four === 60){
		minutecounter_four = 0; 
		hourcounter_four = hourcounter_four + 1;
		timeUnit(hourcounter_four, hours_four)

	}

	timeUnit(minutecounter_four, minutes_four)
}


function Clock(){

	var h = new Date;

	console.log(h)
	timeUnit(h.getHours(), hours_four)
	timeUnit(h.getMinutes(), minutes_four)
	timeUnit(h.getSeconds(), seconds_four)





}




setInterval(Clock, 1000)