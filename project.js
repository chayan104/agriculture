$(document).ready(function(){
  $(".picture").scroll(function(){
    $(".picturerow").fadein(8000);
  });

  $(".introheading").click(function(){
    $(".intropara").animate({
      height: 'toggle'
    });
  });
  $(".cardlink1").click(function(){
    $(".product").slideToggle();
  });
  $(".cardlink2").click(function(){
  $(".product1").slideToggle();
});

});


var blink = document.getElementById('blink');
        setInterval(function() {
            blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
        }, 1500);



        window.adddEventListener('scroll',()=>{
          let content = document.querySelector('.picture');
          let contentPosition = content.getBoundingClienRect().top;
          let screenPosition = window.innerHeight;
          if (contentPosition < screenPosition) {
              content.classList.add('active');
          } else {
            content.classList.remove('active');
          }
        });

        var docWidth = $("body").width(),
          $wrap = $("#wrap"),
          $images = $("#wrap .hb"),
          slidesWidth = $wrap.width();

        $(window).on("resize", function () {
          docWidth = $("body").width();
          slidesWidth = $wrap.width();
        });

        $(document).mousemove(function (e) {
          var mouseX = e.pageX,
            offset = (mouseX / docWidth) * slidesWidth - mouseX / 2;

          $images.css({
            "-webkit-transform": "translate3d(" + -offset + "px,0,0)",
            transform: "translate3d(" + -offset + "px,0,0)"
          });
        });
      });

      function formData() {
  var inputEmail3 = document.forms["userform"]["Email"];
  var inputPassword3 = document.forms["userform"]["Password"];
  if (inputEmail3.value == "") {
    window.alert("Please Enter your name");
    inputEmail3.focus();
    return false;
  }

  if (inputPassword3.value == "") {
    window.alert("Please Enter something");
    inputPassword3.focus();
    return false;
  }
  return true;
}
