$('.owl-banner').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    autoplay:true,
    dots:false,
    nav:false,
    smartSpeed:4000,
    animateOut: 'fadeOut',
    touchDrag: false,
    mouseDrag: false,
    responsive:{
        0:{
            items:1
        },
        1199:{
            items:1, 
        }
    }
  });