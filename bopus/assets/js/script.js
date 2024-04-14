AOS.init();
$('.owl-carousel-brands').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,

  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})

$('.owl-carousel-overlapped').owlCarousel({
  loop: true,
  center: true,
  responsiveClass: true,
  nav: false,
  dots: false,
  // margin: 150,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  items: 3 // would need to show 5
});


//write a jquery code for copy to clipboard
$('#copy-selector').on('click', function () {
  var $temp = $("<input>");
  $("body").append($temp)
  var text = $(this).prev().text();
  $temp.val(text).select();

  document.execCommand("copy");
  $(this).toggleClass("fa-copy fa-check-double");
  $temp.css({"display":"none"});
  // alert("Copied to Clipboard!");

});
function makeTimer() {
var endTime = new Date("14 April 2024 18:00:00 UTC");
endTime = (Date.parse(endTime) / 1000);

var now = new Date();
now = (Date.parse(now) / 1000);

var timeLeft = endTime - now;

var days = Math.floor(timeLeft / 86400);
var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

if (hours < "10") { hours = "0" + hours; }
if (minutes < "10") { minutes = "0" + minutes; }
if (seconds < "10") { seconds = "0" + seconds; }

$("#days").html(days + "<span>Days</span>");
$("#hours").html(hours + "<span>Hours</span>");
$("#minutes").html(minutes + "<span>Minutes</span>");
$("#seconds").html(seconds + "<span>Seconds</span>");

}

setInterval(function() { makeTimer(); }, 1000);