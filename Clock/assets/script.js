console.log("hello!")




// loads MotionPathPlugin into gsap
gsap.registerPlugin(MotionPathPlugin);


// animate:
// 86400
var firstPath = gsap.to("#circle", {
  duration: 3600, 
  repeat: 3,
  ease: "power1.inOut",
  motionPath:{
    path: "#path_one",
    align: "#path_one",
    autoRotate: true,
    alignOrigin: [0.5, 0.5]
  }
});
{
var seekValue = 1800;

var myDate = new Date;
var hours = myDate.getHours()*60
var minutes = myDate.getMinutes()*60
var seconds = myDate.getSeconds()

seekValue = hours + minutes + seconds 

firstPath.pause()
firstPath.seek(seekValue)
firstPath.play()

}
//




function timeUnit(output, secondsOrMinutes){



	if(output < 10){
		secondsOrMinutes.innerHTML = "0" + output;
	}else{
		secondsOrMinutes.innerHTML = output;



}

	// we want to take the current count 
	//then add a 0 to the front 
	//replace the current seconds value
}


/*
THIS IS A TIMER 
*/ 

var counter = 0;
var minuteCounter = 0; 
var hourCounter = 0;
var seconds = document.getElementById("seconds")
var minutes = document.getElementById("minutes")
var hours = document.getElementById("hours")


function myRepeater(){

	//console.log(counter)
	timeUnit(counter, seconds)

	counter = counter + 1;



	if(counter === 60){
		counter = 0;
		minuteCounter = minuteCounter + 1;
		timeUnit(minuteCounter, minutes)
	}

	if(minuteCounter === 60){
		minuteCounter = 0; 
		hourCounter = hourCounter + 1;
		timeUnit(hourCounter, hours)

	}

	timeUnit(minuteCounter, minutes)
}


function Clock(){

	var currentDate = new Date;

	console.log(currentDate)
	timeUnit(currentDate.getHours(), hours)
	timeUnit(currentDate.getMinutes(), minutes)
	timeUnit(currentDate.getSeconds(), seconds)





}




setInterval(Clock, 1000)



function timeUnit(output, secondsOrMinutes){



	if(output < 10){
		secondsOrMinutes.innerHTML = "0" + output;
	}else{
		secondsOrMinutes.innerHTML = output;



}

	// we want to take the current count 
	//then add a 0 to the front 
	//replace the current seconds value
}


/*
THIS IS A TIMER 
*/ 

