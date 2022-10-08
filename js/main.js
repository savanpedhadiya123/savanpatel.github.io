/*
*=================================
* Hugo UILite Portfolio v0.8
*=================================
*
* Free version https://uicard.io/products/hugo-uilite
* Pro version https://uicard.io/products/hugo-uilite-pro
* Demo https://demo.uicard.io/hugo-uilite-portfolio-demo/
*
* Coded By UICardio
*
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*
*/


let menuBtn = $("#menuBar");

// function scrollTo(target) {
//   const top = $(target).offset().top;
//   const duration = 500;
//   const changeHash = function() {
//     location.hash = target
//   };
//   $("html, body").animate({ scrollTop: top }, duration, changeHash);
// }

$(document).ready(function () {
  var elements = $(".sidebar > .main-info *");

  for (let i = 0; i < elements.length; i++) {
    setTimeout(function () { 
      $(elements[i]).addClass("bs");
    }, (300 * i) - 50 * i);
  }

  setTimeout(function () {
    $(".main-content").addClass("active");
  }, 6700);


});