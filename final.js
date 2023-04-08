function formData() {
  var inputEmail3 = document.forms["userform"]["Email"];
  var inputPassword3 = document.forms["userform"]["Password"];
  if (inputEmail3.value == "") {
    window.alert("Please Enter your Phone Number");
    inputEmail3.focus();
    return false;
  }

  if (inputPassword3.value == "") {
    window.alert("Please Enter your OTP");
    inputPassword3.focus();
    return false;
  }
  return true;
}



document.addEventListener("DOMContentLoaded", () => {
 function counter(id, start, end, duration) {
  let obj = document.getElementById(id),
   current = start,
   range = end - start,
   increment = end > start ? 1 : -1,
   step = Math.abs(Math.floor(duration / range)),
   timer = setInterval(() => {
    current += increment;
    obj.textContent = current;
    if (current == end) {
     clearInterval(timer);
    }
   }, step);
 }
 counter("count1", 0, 400, 3000);
 counter("count2", 100, 50, 2500);
 counter("count3", 0, 40, 3000);
 counter("count4", 0, 40, 3000);
});


var blink = document.getElementById('blink');
        setInterval(function() {
            blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
        }, 1500);
