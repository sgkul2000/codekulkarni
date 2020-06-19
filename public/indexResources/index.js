$(document).ready(function(){
  $('body').scrollspy({ target: '#navBar' , offset:100});
  const controller = new ScrollMagic.Controller();
  $(".animationShrinker").each(function(){
    var skillScene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.9,
      duration:"20%"
    })
    .setTween(gsap.to(this, 0.5,{width:0}))
    .addTo(controller);
  });
  $(".blackText, .whiteText").each(function(){
    var textScene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.9,
      duration:"20%"
    })
    .setTween(gsap.from(this, 0.5,{opacity:0.35}))
    .addTo(controller);
  });
  $(".blackText, .whiteText").each(function(){
    // console.log(this);
    var skillExitScene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.2,
      duration:"20%"
    })
    .setTween(gsap.to(this, 0.5,{opacity:0.35}))
    .addTo(controller);
  });
  const navbarSceneProfile = new ScrollMagic.Scene({
    triggerElement: ".profile",
    triggerHook:0
  })
  // .setClassToggle(".navbar", "transNav")
  .setTween(gsap.to(".navbar", 0.1,{className:"navbar fixed-top navbar-expand-lg navbar-light bg-light transNav"}))
  .addTo(controller);

  const navbarSceneSkills = new ScrollMagic.Scene({
    triggerElement: ".skills",
    triggerHook:0
  })
  .setTween(gsap.to(".navbar", 0.1,{className:"navbar fixed-top navbar-expand-lg navbar-light bg-light"}))
  .addTo(controller);

  const navbarSceneProjetcs = new ScrollMagic.Scene({
    triggerElement: ".projects",
    triggerHook:0
  })
  .setTween(gsap.to(".navbar", 0.1,{className:"navbar fixed-top navbar-expand-lg navbar-light bg-light transNav"}))
  .addTo(controller);

  const parallax = new ScrollMagic.Scene({
    triggerElement:".landingRect",
    triggerHook:0.1,
    duration:"200%"
  })
  .setTween(gsap.from("#bgImg", 1, {y:'-30%', ease:Power0.easeNone}))
  .addTo(controller);
});
