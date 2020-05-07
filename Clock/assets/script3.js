
function timeUnit(output, secondsOrMinutes_3){



	if(output < 10){
		secondsOrMinutes_3.innerHTML = "0" + output;
	}else{
		secondsOrMinutes_3.innerHTML = output;



}

	// we want to take the current count 
	//then add a 0 to the front 
	//replace the current seconds value
}


/*
THIS IS A TIMER 
*/ 

var counter_three = 0;
var minutecounter_three = 0; 
var hourcounter_three = 0;
var seconds_three = document.getElementById("seconds-3")
var minutes_three = document.getElementById("minutes-3")
var hours_three = document.getElementById("hours-3")


function myRepeater_3(){

	//console.log(counter)
	timeUnit(counter_three, seconds_three)

	counter_three = counter_three + 1;



	if(counter_three === 60){
		counter_three = 0;
		minutecounter_three = minutecounter_three + 1;
		timeUnit(minutecounter_three, minutes_three)
	}

	if(minutecounter_three === 60){
		minutecounter_three = 0; 
		hourcounter_three = hourcounter_three + 1;
		timeUnit(hourcounter_three, hours_three)

	}

	timeUnit(minutecounter_three, minutes_three)
}


function Clock(){

	var m = new Date;

	console.log(m)
	timeUnit(m.getHours(), hours_three)
	timeUnit(m.getMinutes(), minutes_three)
	timeUnit(m.getSeconds(), seconds_three)





}




setInterval(Clock, 1000)