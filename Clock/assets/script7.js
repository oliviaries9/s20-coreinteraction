
function timeUnit(output, secondsOrMinutes_7){



	if(output < 10){
		secondsOrMinutes_7.innerHTML = "0" + output;
	}else{
		secondsOrMinutes_7.innerHTML = output;



}

	// we want to take the current count 
	//then add a 0 to the front 
	//replace the current seconds value
}


/*
THIS IS A TIMER 
*/ 

var counter_seven = 0;
var minutecounter_seven = 0; 
var hourcounter_seven = 0;
var seconds_seven = document.getElementById("seconds-7")
var minutes_seven = document.getElementById("minutes-7")
var hours_seven = document.getElementById("hours-7")


function myRepeater_7(){

	//console.log(counter)
	timeUnit(counter_seven, seconds_seven)

	counter_seven = counter_seven + 1;



	if(counter_seven === 60){
		counter_seven = 0;
		minutecounter_seven = minutecounter_seven + 1;
		timeUnit(minutecounter_seven, minutes_seven)
	}

	if(minutecounter_seven === 60){
		minutecounter_seven = 0; 
		hourcounter_seven = hourcounter_seven + 1;
		timeUnit(hourcounter_seven, hours_seven)

	}

	timeUnit(minutecounter_seven, minutes_seven)
}


function Clock(){

	var p = new Date;

	console.log(p)
	timeUnit(p.getHours(), hours_seven)
	timeUnit(p.getMinutes(), minutes_seven)
	timeUnit(p.getSeconds(), seconds_seven)





}




setInterval(Clock, 1000)