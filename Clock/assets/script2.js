
function timeUnit(output, secondsOrMinutes_2){



	if(output < 10){
		secondsOrMinutes_2.innerHTML = "0" + output;
	}else{
		secondsOrMinutes_2.innerHTML = output;



}

	// we want to take the current count 
	//then add a 0 to the front 
	//replace the current seconds value
}


/*
THIS IS A TIMER 
*/ 

var counter_two = 0;
var minuteCounter_two = 0; 
var hourCounter_two = 0;
var seconds_two = document.getElementById("seconds-2")
var minutes_two = document.getElementById("minutes-2")
var hours_two = document.getElementById("hours-2")


function myRepeater_2(){

	//console.log(counter)
	timeUnit(counter_two, seconds_two)

	counter_two = counter_two + 1;



	if(counter_two === 60){
		counter_two = 0;
		minuteCounter_two = minuteCounter_two + 1;
		timeUnit(minuteCounter_two, minutes_two)
	}

	if(minuteCounter_two === 60){
		minuteCounter_two = 0; 
		hourCounter_two = hourCounter_two + 1;
		timeUnit(hourCounter_two, hours_two)

	}

	timeUnit(minuteCounter_two, minutes_two)
}


function Clock(){

	var d = new Date;

	console.log(d)
	timeUnit(d.getHours(), hours_two)
	timeUnit(d.getMinutes(), minutes_two)
	timeUnit(d.getSeconds(), seconds_two)





}




setInterval(Clock, 1000)