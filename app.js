$('.responsive').slick({
  // dots: true,

  autoplay: true,
  autoplaySpeed: 1200,
  
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    // {
    //   breakpoint: 1024,
    //   settings: {
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     infinite: true
    //     // dots: true
    //   }
    // },

    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
        // dots: true
      }
    },

    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite:false
      }
    },

    {
      breakpoint: 481,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite:false
      }
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite:false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

