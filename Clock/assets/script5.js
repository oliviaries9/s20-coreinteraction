
function timeUnit(output, secondsOrMinutes_5){



	if(output < 10){
		secondsOrMinutes_5.innerHTML = "0" + output;
	}else{
		secondsOrMinutes_5.innerHTML = output;



}

	// we want to take the current count 
	//then add a 0 to the front 
	//replace the current seconds value
}


/*
THIS IS A TIMER 
*/ 

var counter_five = 0;
var minutecounter_five = 0; 
var hourcounter_five = 0;
var seconds_five = document.getElementById("seconds-5")
var minutes_five = document.getElementById("minutes-5")
var hours_five = document.getElementById("hours-5")


function myRepeater_5(){

	//console.log(counter)
	timeUnit(counter_five, seconds_five)

	counter_five = counter_five + 1;



	if(counter_five === 60){
		counter_five = 0;
		minutecounter_five = minutecounter_five + 1;
		timeUnit(minutecounter_five, minutes_five)
	}

	if(minutecounter_five === 60){
		minutecounter_five = 0; 
		hourcounter_five = hourcounter_five + 1;
		timeUnit(hourcounter_five, hours_five)

	}

	timeUnit(minutecounter_five, minutes_five)
}


function Clock(){

	var q = new Date;

	console.log(q)
	timeUnit(q.getHours(), hours_five)
	timeUnit(q.getMinutes(), minutes_five)
	timeUnit(q.getSeconds(), seconds_five)





}




setInterval(Clock, 1000)