$(document).ready(function(){
  const controller = new ScrollMagic.Controller();
  const scene1 = new ScrollMagic.Scene({
    triggerElement:".main",
    triggerHook: 0,
    duration: "200%"
  })
  .setTween(gsap.to(".hw2", 1, {height:"100vh"}))
  .setPin(".main")
  .addTo(controller);
});
