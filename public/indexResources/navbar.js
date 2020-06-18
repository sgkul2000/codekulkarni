$(document).ready(function(){
  // $("span.navbar-toggler-icon").remove();
  // $("button.navbar-toggler").html( "<div class=\"navLinesWrapper\"><div class=\"navLine navLine1\"></div><div class=\"navLine navLine2\"></div></div>");
  $("button.navbar-toggler").on('click', function(e){
    if($("#navbarNavDropdown").hasClass("show")){
      // triggered when closed
      const tl = gsap.timeline();
      tl.to(".navLine1", 0.2, {rotation:0, ease:Power4.easeInOut})
      tl.to(".navLine2", 0.2, {rotation:0, ease:Power4.easeInOut}, "-=0.2")
      tl.to(".navLine1", 0.2, {y:0}, 0.3)
      tl.to(".navLine2", 0.2, {y:0}, "-=0.2")
      tl.to(".nav-link", 0.2, {opacity:0, stagger:0.05}, "-=0.7");
    } else {
      // triggered when opened
      const tl = gsap.timeline();
      tl.to(".navLine1", 0.2, {ease: Power4.easeInOut,y:9})
      tl.to(".navLine2", 0.2, {ease: Power4.easeInOut,y:-9}, "-=0.2")
      tl.to(".navLine1", 0.2, {rotation:45}, 0.3)
      tl.to(".navLine2", 0.2, {rotation:-45}, "-=0.2")
      tl.to(".nav-link", 0.2, {opacity:1, stagger:0.05}, "-=0.2");
    }
  });
});
