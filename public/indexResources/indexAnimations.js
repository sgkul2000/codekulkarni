const brandTl = gsap.timeline();

brandTl.from("#logo", {
  duration: 1.5,
  scale:0,
  opacity:0,
});
brandTl.from(".animateName", {
  duration : 0.8,
  width:0
});

brandTl.to("#sigma", {
  duration:0.5,
  className:"+=sigma"
});
brandTl.to("#tenant", {
  className:"+=tenant"
}, "-=0.5");

// brandTl.from(".animateName", {
//   duration : 0.8,
//   opacity : 0,
//   y : 40,
//   stagger:0.2
// });


brandTl.from(".animateMotto", {
  duration:0.8,
  ease:"ease",
  y:20,
  opacity:0,

}, "-=1.3");

const fadeEle = document.querySelectorAll(".animateOnScroll");

const options = {
  // threshold:1,
  rootMargin:"0px 0px -50px 0px"
};

const aos = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return
    } else {
      gsap.to(entry.target, {
        duration:1,
        y:-20,
        ease: "ease",
        opacity:1
      });
      aos.unobserve(entry.target);
    }
  });
},options);

fadeEle.forEach(fader => {
  aos.observe(fader);
});


// const mottoTl = gsap.timeline({repeat:-1});
//
// mottoTl.from(".animateMotto", {
//   duration: 0.5,
//   y:10,
//   ease:"linear"
// });
// mottoTl.to(".animateMotto", {
//   y:10,
//   delay:0.5,
//   ease:"bounce"
// });
