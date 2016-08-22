var winHeight = $(window).height();

$(function() {
  $(".exploring p.title").fitText(1, { minFontSize: '16px', maxFontSize: '35px' });
  $(".exploring p.banner-subtitle").fitText(1, { minFontSize: '10px', maxFontSize: '20px' });


  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

});

//display navigation on scroll
  $(window).scroll(function() {
// 100 = The point you would like to fade the nav in.

  if ($(window).scrollTop() > winHeight ){
    
    $('.navbar').addClass('show');
    
  } else {
    
    $('.navbar').removeClass('show');
    
  };    
});

//mobile menu
var burger = document.querySelector('.burger');
burger.addEventListener("click", function() {

  document.querySelector('.page-nav').classList.toggle('mobile');

}, false);

//fittext
(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );


//slider trigger
jQuery(document).ready(function($) {
      $('.my-slider').unslider({
        autoplay: true,
        arrows: false,
        nav: true

      });
    });

//data spy on scroll
  var sections = $('section')
  , nav = $('.page-nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 500);
  
  return false;
});


$(window).scroll(function() {
// o ile sie przesuwamy od poczatku okna
  var wScroll = $(this).scrollTop();

//nasze foty fadeIn robia jak dojedziemy do ich sekcji
  if(wScroll > $('.team-list').offset().top - (winHeight / 1.2)) {
    $('.team-list figure').each(function(i) {

      setTimeout(function() {
              $('.team-list figure').eq(i).addClass('is-showing');
      }, 150 * (i+1));    
    });
  }

});


