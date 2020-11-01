    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict

  // Project descriptions
  $(".p-finder").append("Weather or Not was created to provide users with an easy tool to discover and locate local state parks, and plan the perfect time to go with weather forecast.");
  $(".p-shopping").append("This project creates an application for online vendors to post their products to an Online Shopping Store. The vendors are able to create, update, edit and delete products from our vendor application storing product information in our Database.");
  $(".p-burger").append("This is a restaurant app that lets users input the names of burgers they'd like to eat, then the burger will be displayed in the menu list on the left side of the page, waiting to be devoured. The app was created with MySQL, node.js, and handlebars. The application follows the MVC design pattern.");
  $(".p-note").append("This is a note-taking application that helps users to keep track of their activity. The app can add, delete, and save notes.");
  $(".p-quiz").append("User will have to enter their name on the start page click on the start button, that will take them to quiz page. Use the next question button to load the next question. If user click on wrong answer timer deduct some minutes from the time.");
  $(".p-weather").append("This Weather App allows the user to search by city name and shows the current weather condition, and 5 day forecast. The app also stores recent search history in a local storage.");
  $(".p-generator").append("Password genarator creates random or customized passwords for users. It helps users create stronger passwords that provide them with greater security.");
  
