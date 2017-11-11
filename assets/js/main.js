$(document).ready(function() {
  
  //Initialize Mobile Nav
  $('.button-collapse').sideNav();
  
  //Show social buttons on load to show what they are
  $('.fixed-action-btn').openFAB();
  setTimeout(function() {
    $('.fixed-action-btn').closeFAB();
  }, 3000);
  
  //Nav Active Link States
  $('nav ul li').on('click', function() {
    $('nav ul li').removeClass('active');
    $(this).addClass('active');
  });
  
  //Smooth Scroll
  $('nav ul li a, .navLink').on('click', function(e) {    
    var page = $('html,body');
    //Stop previous animation, if running, for quick-clicks
    page.stop(true);
    //Stop animation if user wants to take over
    page.on('scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove', function() {
      $(this).stop(true);
    });
    //Animate scroll
    var target = this.hash;
    var offset = 110;
    $('.button-collapse').sideNav('hide');
    setTimeout(function(){
      page.animate({
        scrollTop: $(target).offset().top - offset
      }, 500);
    }, 50);     

    return false;
  });
  
  //Slide in navigation bar and add box Shadow after passing main header
  var elementOffset = $('main').offset().top;
  $(window).scroll(function() {
    if ( $(window).scrollTop() > elementOffset ) { 
      $('nav').addClass('isSticky').slideDown(); 
    } else {
      $('nav').removeClass('isSticky').removeAttr('style');
    }    
  });

  //AJAX form submission
  var frm = $('#frm-contact');
  var fullName = $('#fullname');
  var email = $('#email');
  var message = $('#message');
  var hasError = false;

  frm.submit(function(e) {
    e.preventDefault();
    $('.error').removeClass('error');
    $('#error-message').remove();

    if ( fullName.val() == '' ) {
      fullName.parent().addClass('error');
      hasError = true;
    }

    if ( email.val() == '' ) {
      email.parent().addClass('error');
      hasError = true;
    }

    if ( message.val() == '' ) {
      message.parent().addClass('error');
      hasError = true;
    }

    if ( hasError ) {
      frm.prepend('<p id="error-message">Please review highlighted fields below</p>');
    }
      
    if ( fullName.val() != '' && email.val() != '' && message.val() != '' ) {
      $.ajax({
        type: frm.attr('method'),
        url: frm.attr('action'),
        data: frm.serialize()
      })
      .done(function(response) {
        $('#contact').html(response);
      })
      .fail(function(response) {
        $('#contact').html(response)
      });
    }

  });
  
});