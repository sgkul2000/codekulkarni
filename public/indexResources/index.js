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
      triggerHook: 0.08,
      duration:"10%"
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
  
  const navbarSceneEducation = new ScrollMagic.Scene({
    triggerElement: ".education",
    triggerHook:0
  })
  .setTween(gsap.to(".navbar", 0.1,{className:"navbar fixed-top navbar-expand-lg navbar-light bg-light"}))
  .addTo(controller);
  
  const navbarSceneExperience = new ScrollMagic.Scene({
    triggerElement: ".experience",
    triggerHook:0
  })
  .setTween(gsap.to(".navbar", 0.1,{className:"navbar fixed-top navbar-expand-lg navbar-light bg-light transNav"}))
  .addTo(controller);

  const parallax = new ScrollMagic.Scene({
    triggerElement:".landingRect",
    triggerHook:0.1,
    // duration:"10%"
  })
  .setPin('.landingRect')
  // .setTween(gsap.from("#bgImg", 1, {y:'-30%', ease:Power0.easeNone}))
  .addTo(controller);


  // const parallaxs = new ScrollMagic.Scene({
  //   triggerElement:".landingRect",
  //   triggerHook:0.1,
  //   duration:"80%"
  // })
  // .setTween(gsap.to(".lContent", 1, {y:'-10%',scale:1.2, opacity:0.8, ease:Power0.easeNone}))
  // .addIndicators()
  // .addTo(controller);


  const parallaxs = new ScrollMagic.Scene({
    triggerElement:".landingRect",
    triggerHook:0,
    duration:"10%"
  })
  .setTween(gsap.from(".lContent", 1, {y:'-5%',scale:1, opacity:1, ease:Power0.easeNone}))
  .setTween(gsap.to(".lContent", 1, {y:'-15%',scale:1.2, opacity:1, ease:Power0.easeNone}))
  // .addIndicators()
  .addTo(controller);
  const parallaxss = new ScrollMagic.Scene({
    triggerElement:".landingRect",
    triggerHook:0,
    offset:'96%',
    duration:"50%"
  })
  .setTween(gsap.to(".lContent", 1, {y:'10%',scale:0.0, rotationX: 120, opacity:0, ease:Power0.easeNone}))
  // .addIndicators()
  .addTo(controller);



//   var ztxt = new Ztextify(".lContent", {
//     depth: "15px",
//     perspective: "500px",
//     layers: 3,
//     fade: true,
//     direction: "both",
//     event: "pointer",
//     eventRotation: "35deg"
//  });


  // const parallax = new ScrollMagic.Scene({
  //   triggerElement:".landingRect",
  //   triggerHook:0.1,
  //   duration:"200%"
  // })
  // .setTween(gsap.from("#bgImg", 1, {y:'-30%', ease:Power0.easeNone}))
  // .addTo(controller);


  // const tls = gsap.timeline();
  // tls.from(".lContent", 1, {y:'20%',scale:1.2, opacity:1, ease:Power0.easeNone})
  // tls.to(".lContent", 1, {y:'-10%',scale:0.5, opacity:0.8, ease:Power0.easeNone, delay:1})
  // const parallaxs = new ScrollMagic.Scene({
  //   triggerElement:".landingRect",
  //   triggerHook:0.1,
  //   duration:"80%"
  // })
  // .setTween(tls)
  // .addIndicators()
  // .addTo(controller);
  // tl.to(".navLine2", 0.2, {rotation:0, ease:Power4.easeInOut}, "-=0.2")
  // tl.to(".navLine1", 0.2, {y:0}, 0.3)
  // tl.to(".navLine2", 0.2, {y:0}, "-=0.2")
  // tl.to(".nav-link", 0.2, {opacity:0, stagger:0.05}, "-=0.7");






});
