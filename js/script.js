var lastScrollTop = 0;

$(window).scroll(function(){
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
        // Downscroll code.
        console.log("Scrolled Down.");
        $(".navbar").addClass("scrolled");
        $(".title").addClass("scrolled");
        $(".night").addClass("scrolled");
        $(".darkbt").addClass("scrolled");
        $(".menu").addClass("scrolled");
        $(".menubt").addClass("scrolled");
        $(".scroll-downs").addClass("scrolled");
    } else {
        // Upscroll code
        console.log("Scrolled Up.");
        $(".navbar").removeClass("scrolled");
        $(".title").removeClass("scrolled");
        $(".night").removeClass("scrolled");
        $(".darkbt").removeClass("scrolled");
        $(".menu").removeClass("scrolled");
        $(".menubt").removeClass("scrolled");
        $(".scroll-downs").removeClass("scrolled");
    }
    lastScrollTop = st;
});