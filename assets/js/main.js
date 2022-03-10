(function() {
  /**
   * Easy selector helper function
   */
   const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }
  /**
   * Intro type effect
   */
   const typed = select('.typed')
   if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }



  /*------Main Content---------*/

  $('.about').click(function(){
    $('.about-section').show(),
    $('.skill-section, .service-section, .work-section, .contact-section').hide(); 
  });

  $('.skill').click(function(){
    $('.skill-section').show(),
    $('.about-section, .service-section, .work-section, .contact-section').hide(); 
  });

  $('.service').click(function(){
    $('.service-section').show(),
    $('.about-section, .skill-section, .work-section, .contact-section').hide(); 
  });

  $('.work').click(function(){
    $('.work-section').show(),
    $('.about-section, .skill-section, .service-section, .contact-section').hide(); 
  });

  $('.contact').click(function(){
    $('.contact-section').show(),
    $('.about-section, .skill-section, .service-section, .work-section').hide(); 
  });


  /*------Main Content Work-Carousel1---------*/
  $('.carousel1').owlCarousel({
    loop:true,
    smartSpeed:2000,
    margin:10,
    nav:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:2
      }
    }
  })


  /*------Preloader---------*/
   let preloader = select('#preloader');
   if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

})()