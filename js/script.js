$("document").ready(function(){
    $("button.first").hover(function(){
        $(".rotated").addClass("moveDown");
    }, function(){
        $(".rotated").removeClass("moveDown");
    });
});

$("document").ready(function(){
  $("a.back-to-top").hover(function(){
      $(".north").addClass("moveUp");
  }, function(){
      $(".north").removeClass("moveUp");
  });
});

window.addEventListener("scroll", function(){
    if(window.scrollY==0){
      $("nav").removeClass("scrolled");
    } else {
      $("nav").addClass("scrolled");
    }
  });

var menuIsOpen = 0;

$("document").ready(function(){
  $(".menu-button").click(function(){
    if (menuIsOpen == 0) {
      menuIsOpen = 1;
      $(".menu-button span").text("close");
      $(".mobile-menu-overlay").removeClass("closed");
      $(".glass").removeClass("closed");
      $(".main").addClass("menu-open");
    } else {
      menuIsOpen = 0;
      $(".menu-button span").text("menu");
      $(".mobile-menu-overlay").addClass("closed");
      $(".main").removeClass("menu-open");
      $(".glass").addClass("closed");
    }
  });
});
