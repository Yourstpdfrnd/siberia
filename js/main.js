$(function(){


    $(function(){
        const width   = 270,
            height  = 44 * 4 + 20,
            speed   = 300,
            button  = $('#menu-button'),
            overlay = $('#overlay'),
            menu    = $('#hamburger-menu');
      
        button.on('click',function(e){
          if(overlay.hasClass('open')) {
            animate_menu('close');
          } else {
            animate_menu('open');
          }
        });
      
        overlay.on('click', function(e){
          if(overlay.hasClass('open')) {
            animate_menu('close');
          }
        });
      
        $('a[href="#"]').on('click', function(e){
          e.preventDefault();
        });
      
        function animate_menu(menu_toggle) {
          if(menu_toggle == 'open') {
            overlay.addClass('open');
            button.addClass('on');
            overlay.animate({opacity: 1}, speed);
            menu.animate({width: width, height: height}, speed);
          }
      
          if(menu_toggle == 'close') {
            button.removeClass('on');
            overlay.animate({opacity: 0}, speed);
            overlay.removeClass('open');
            menu.animate({width: "0", height: 0}, speed);
          }
        }
      });


    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 190000,
        from: 5900,
        to: 98000,
    });

    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
    
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 2000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    
    });
  
});