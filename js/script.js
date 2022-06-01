$(document).ready(function(){
  /*~~~~~~~~~~~~~~~~~~~~start header~~~~~~~~~~~~~ */
  jQuery(window).on('scroll', function() {
    if(jQuery(window).scrollTop() > 100) {
        jQuery('header').css({
            "background-color": "#15202b",
            "box-shadow": "rgb(136 153 166 / 20%) 0px 0px 15px 0px, rgb(136 153 166 / 15%) 0px 0px 3px 1px"
          });
    } else {
      jQuery('header').css({
        "background-color": "transparent",
        "box-shadow": "unset"
      });
    }
});
if ($(window).width() <= 767){
  $(".btn_bars").click(function(){
    $(".ul_nav").toggle("500")
    $(".moboverlay").toggle("500")
    $("body").addClass("over_")
  });
  $(".close_ , .close_search").click(function(){
    $(".search_mob").hide("500")
    $(".ul_nav").hide("500")
    $(".moboverlay").toggle("500")
    $("body").removeClass("over_")
  });
  $(".moboverlay").click(function(){
    $(".ul_nav").hide("500")
    $(".moboverlay").hide("500")
    $("body").removeClass("over_")
    $(".search_mob").hide("500")
  });
  $(".btn_search_mob").click(function(){
    $(".search_mob").toggle("500")
    $(".moboverlay").toggle("500")
    $("body").addClass("over_")
  });
  $(".drop_down_menu").click(function(){
    $(".ul_drop ").slideToggle("500")
    
  })
}
  /*~~~~~~~~~~~~~~~~~~~~end header~~~~~~~~~~~~~ */

  /*~~~~~~~~~~~~~~~~~~start slider~~~~~~~~~~~~~~~~~~~ */
  $('.slider .owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    rtl: true,
    autoplay: true,
    mouseDrag:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
  /*~~~~~~~~~~~~~~~~~~end slider~~~~~~~~~~~~~~~~~~~ */

if ($(window).width() <= 767)  {
    /*~~~~~~~~~~~~~~~~~~start news_blog~~~~~~~~~~~~~~~ */
    $(".add_").addClass("owl-carousel");
    $(".remove_").addClass("item");
    $(".add_").removeClass("row");
    $(".remove_").removeClass("col-md-3");
    $('.news_blog .owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        margin: 15,
        rtl: true,
        rtl: $("html").attr("dir") == "rtl" ? true : false,
        autoplay: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });

    
  }else {
  $(".add_").removeClass("owl-carousel");
  $(".remove_").removeClass("item");
  }

  /*~~~~~~~~~~~~~~~~~~end news_blog~~~~~~~~~~~~~~~ */

/*~~~~~~~~~~~~~~~~~start counter~~~~~~~~~~~~~ */
$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },
  {
    duration: 11000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }
  });  
});
/*~~~~~~~~~~~~~~~~~end counter~~~~~~~~~~~~~ */



// document.addEventListener('contextmenu', event => event.preventDefault());



  
});
