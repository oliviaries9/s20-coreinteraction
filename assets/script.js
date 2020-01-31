//// Wait for page to load
$(document).ready(function() {
  var degree=0;
  var sun = $(".move");
  sun.click(function(){
    degree=degree+90;
    var styles = {
      transform: "rotate("+degree+"deg)"
    };
    console.log(degree);
    sun.css(styles);

  })
})