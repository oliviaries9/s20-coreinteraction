//// Wait for page to load
$(document).ready(function() {
//select text
//make text clickable
//select audio element
//play audio
    var twelve = $("#twelve");
    twelve.click(function(){
        var explode = $("#explode")[0];
        explode.play();
        console.log();
    })
})

$(document).ready(function() {
  var degree=0;
  var six = $("#six");
  six.click(function(){
    degree=degree+130;
    var styles = {
      transform: "rotate("+degree+"deg)"
    };
    console.log(degree);
    six.css(styles);

  })
})

$(document).ready(function() {
//select text
//make text clickable
//select audio element
//play audio
    var box = $("#box");
    box.click(function(){
        var audio = $("#audio")[0];
        audio.play();
        console.log();
    })
})
