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