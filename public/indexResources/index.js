$(document).ready(function(){
  $('body').scrollspy({ target: '#navBar' , offset:100});
  const controller = new ScrollMagic.Controller();
  $(".animationShrinker").each(function(){
    // console.log(this);
    var skillScene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.9,
      duration:"20%"
    })
    .setTween(gsap.to(this, 0.5,{width:0}))
    .addTo(controller);
  });
  $(".blackText, .whiteText").each(function(){
    // console.log(this);
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
  // .setClassToggle(".navbar", "transNav")
  .setTween(gsap.to(".navbar", 0.1,{className:"navbar fixed-top navbar-expand-lg navbar-light bg-light"}))
  .addTo(controller);

  const navbarSceneProjetcs = new ScrollMagic.Scene({
    triggerElement: ".projects",
    triggerHook:0
  })
  // .setClassToggle(".navbar", "transNav")
  .setTween(gsap.to(".navbar", 0.1,{className:"navbar fixed-top navbar-expand-lg navbar-light bg-light transNav"}))
  .addTo(controller);

  const parallax = new ScrollMagic.Scene({
    triggerElement:".landingRect",
    triggerHook:0.1,
    duration:"300%"
  })
  .setTween(gsap.from("#bgImg", 1, {y:'-30%', ease:Power0.easeNone}))
  // .addIndicators()
  .addTo(controller);

  // const landingScene = new ScrollMagic.Scene({
  //   triggerElement: ".landingRect",
  //   triggerHook:0.1,
  //   duration: 600
  // })
  // .addIndicators({
  //   name:"skill indicator",
  //   colorTrigger:"#4dd0e1",
  //   colorStart:"#4dd0e1",
  //   colorEnd:"#4dd0e1"
  // })
  // .addTo(controller);
  // const per10 = 10 * (screen.height/100);
  // let accelAmount = 0.1;
  // let scrollpos = 0;
  // let delay = 0;
  // landingScene.on('update', e => {
  //   scrollpos = e.scrollPos / 600;
  //   console.log(scrollpos);
  // });
  // const video = document.getElementById('videoBg');
  // setInterval(() => {
  //   // console.log(scrollpos, delay);
  //   delay += (scrollpos - delay) * accelAmount;
  //   video.currentTime = scrollpos *8
  // }, 33.3)
});
