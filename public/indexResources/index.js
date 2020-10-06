$(document).ready(function () {
  if (!navigator.share) {
    $("#WebShareAPI").remove()
  }
  $("#WebShareAPI").click(function() {
    navigator.share({
      title: 'Check out Shreesh Kulkarni',
      text: 'Shreesh Kulkarni - A student at The National Institute of Engineering and a Full Stack Developer.',
      url: "https://codekulkarni.com"
    })
  })
  AOS.init()
  var ua = navigator.userAgent
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(
      ua
    ) &&
    /Chrome/i.test(ua)
  ) {
    // $("html").hide()
    $('html').addClass('mobile')
    $('#vueMain').addClass('mobile')
    console.log(ua, ' | mobile other')
  } else if (/Chrome/i.test(ua)) {
    console.log(ua, ' | chrome')
    // $("#vueMain").outerHeight($(window).height()-56)
  } else {
    console.log(ua, ' | desktop other')
  }
  $('#Scroller').click(function () {
    $('html, body').animate(
      {
        scrollTop: $('#profileHeader').offset().top,
      }
    )
  })
  $(".scrollLink").click(function() {
    $('html, body').animate(
      {
        scrollTop: $("."+$(this).attr('id').slice(0,-4)+"Header").offset().top,
      },
      100
    )
  })
  $('body').scrollspy({ target: '#navBar', offset: 100 })
  const controller = new ScrollMagic.Controller()
  $('.animationShrinker').each(function () {
    var skillScene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.9,
      duration: '20%',
    })
      .setTween(gsap.to(this, 0.5, { width: 0 }))
      .addTo(controller)
  })
  $('.whiteNavbar').each(function () {
    var skillExitScene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0,
    })
      .setTween(
        gsap.to('.navbar', 0.1, {
          className: 'navbar fixed-top navbar-expand-lg navbar-light bg-light',
        })
      )
      .addTo(controller)
  })
  $('.blackNavbar').each(function () {
    var skillExitScene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0,
    })
      .setTween(
        gsap.to('.navbar', 0.1, {
          className:
            'navbar fixed-top navbar-expand-lg navbar-light bg-light transNav',
        })
      )
      .addTo(controller)
  })

  const parallax = new ScrollMagic.Scene({
    triggerElement: '.landingRect',
    triggerHook: 0.1,
  })
    .setPin('.nLandingRect')
    .addTo(controller)
  // $("section").each(function(index) {
  //   console.log(index)
  //   const parallaxs = new ScrollMagic.Scene({
  //     triggerElement: this,
  //     triggerHook: 0.09+(index*0.07),
  //   })
  //     .setPin(this)
  //     .addTo(controller)
  // })
  var tl = gsap.timeline({ delay: 1 })
  tl.from('#hey', { y: 50, duration: 0.7, opacity: 0, ease: 'expo' })
  tl.from('.nameContent', {
    y: 50,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
    ease: 'expo',
  })
  tl.from('.desc', { y: 50, opacity: 0, duration: 0.7, ease: 'expo' }, '-=0.5')

  var ztxt = new Ztextify(".socialIconWrapper", {
    depth: "30px",
    layers: 8,
    fade: true,
    direction: "forwards",
    event: "pointer",
    eventRotation: "35deg"
 });
//  $(".aos-fade-in").each(function(){
//    xyz = new ScrollMagic.Scene({
//     triggerElement: this,
//     triggerHook: 1, // move trigger to center of element
//     reverse: true // only do once
//   })
//   .setClassToggle(this, "aos-fade-in-triggered") // add class toggle
//   // .addIndicators() // add indicators (requires plugin)
//   .addTo(controller);
//  })
})
