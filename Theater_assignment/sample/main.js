$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').removeClass('black');
    }
})
var myVar;
function myFunction() {

      myVar = setTimeout(showPage,5000);
}
function showPage() {
      document.getElementById("loader").style.display = "none";
      
}