var app = {
  init: function() {
    console.log('App : init');


$('.menu_burger').on('click', app.burger)


},

burger: function(){
  $(this).toggleClass('activeburger');
  $('.testa').toggleClass('active')
  $(".menu li").slideToggle('fast');

  console.log('click');
}


};

$(app.init);
