
var countDownDate = new Date("January 09, 2023 10:42:00").getTime();


var x = setInterval(function() {

 
  var now = new Date().getTime();
  
 
  var distance = now - countDownDate;
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "Expired";
    document.getElementById("hours").innerHTML = "Expired";
    document.getElementById("minutes").innerHTML = "Expired";
    document.getElementById("seconds").innerHTML = "Expired";
  }
}, 1000);
