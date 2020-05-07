
function timeUnit(output, secondsOrMinutes_6){



	if(output < 10){
		secondsOrMinutes_6.innerHTML = "0" + output;
	}else{
		secondsOrMinutes_6.innerHTML = output;



}

	// we want to take the current count 
	//then add a 0 to the front 
	//replace the current seconds value
}


/*
THIS IS A TIMER 
*/ 

var counter_six = 0;
var minutecounter_six = 0; 
var hourcounter_six = 0;
var seconds_six = document.getElementById("seconds-6")
var minutes_six = document.getElementById("minutes-6")
var hours_six = document.getElementById("hours-6")


function myRepeater_6(){

	//console.log(counter)
	timeUnit(counter_six, seconds_six)

	counter_six = counter_six + 1;



	if(counter_six === 60){
		counter_six = 0;
		minutecounter_six = minutecounter_six + 1;
		timeUnit(minutecounter_six, minutes_six)
	}

	if(minutecounter_six === 60){
		minutecounter_six = 0; 
		hourcounter_six = hourcounter_six + 1;
		timeUnit(hourcounter_six, hours_six)

	}

	timeUnit(minutecounter_six, minutes_six)
}


function Clock(){

	var x = new Date;

	console.log(x)
	timeUnit(x.getHours(), hours_six)
	timeUnit(x.getMinutes(), minutes_six)
	timeUnit(x.getSeconds(), seconds_six)





}




setInterval(Clock, 1000)