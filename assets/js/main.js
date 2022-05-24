(function() {
	/*Graduated Alumni Carousel*/
    $('.g-alumni').owlCarousel({
        loop:true,
        nav:true,
        autoplay:true,
        autoplayHoverPause: true,
        mouseDrag: true,
        margin: 20,
        center: false,
        dots: false,
        smartSpeed:1500,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

})()