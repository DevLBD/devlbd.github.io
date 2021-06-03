$("document").ready(function(){
    $("button.first").hover(function(){
        $(".rotated").addClass("moveDown");
    }, function(){
        $(".rotated").removeClass("moveDown");
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
    } else {
      menuIsOpen = 0;
      $(".menu-button span").text("menu");
      $(".mobile-menu-overlay").addClass("closed");
    }
  });
});
