$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('nav').css('background-color', '#000000');
    } else {
      $('nav').css('background', 'none');
    }
  });
});
$('.btn-box').on('click', function () {
  $('body, html').animate({ scrollTop: 0 }, 500);
});

$(function(){
  $('#js-target').t({
    speed_vary:true,
    init:function(elm){
      console.log('init');
    },
    typing:function(elm,left,total){
      console.log('typing');
    },
    fin:function(elm){
      console.log('fin');
    }
  });
});