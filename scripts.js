$( document ).ready(function() {
  $('.well').click(function() {

    alert( "ready!" );
  });

  $('body').scrollspy({ target: '#about' })
  $('body').scrollspy({ target: '#projects' })
  $('body').scrollspy({ target: '#skills' })
  $('body').scrollspy({ target: '#contact' })
});
