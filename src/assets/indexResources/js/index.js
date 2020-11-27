
/* eslint-disable no-undef */

import Vue from "vue/dist/vue.min.js"
import skills from "../../skill.json"
import projects from "../../projects.json"

new Vue({
	el: "#app",
	data:{
		skills,
		projects,
		navbar: false
	},
	methods: {
		shareAPI(){
			navigator.share({
				title: "Check out Shreesh Kulkarni",
				text: "Shreesh Kulkarni - A student at The National Institute of Engineering and a Full Stack Developer.",
				url: "https://codekulkarni.com"
			})
		},
		scrollTo(query){
			let element = document.querySelector(query)
			element.scrollIntoView()
		},
		toggleNavbar(){
			if(this.navbar){
				// triggered when closed
				const tl = gsap.timeline()
				tl.to(".navLine1", 0.2, {rotation:0, ease:Power4.easeInOut})
				tl.to(".navLine2", 0.2, {rotation:0, ease:Power4.easeInOut}, "-=0.2")
				tl.to(".navLine1", 0.2, {y:0}, 0.3)
				tl.to(".navLine2", 0.2, {y:0}, "-=0.2")
				tl.to(".nav-link", 0.2, {opacity:0, stagger:0.05}, "-=0.7")
			} else {
				// triggered when opened
				const tl = gsap.timeline()
				tl.to(".navLine1", 0.2, {ease: Power4.easeInOut,y:9})
				tl.to(".navLine2", 0.2, {ease: Power4.easeInOut,y:-9}, "-=0.2")
				tl.to(".navLine1", 0.2, {rotation:45}, 0.3)
				tl.to(".navLine2", 0.2, {rotation:-45}, "-=0.2")
				tl.to(".nav-link", 0.2, {opacity:1, stagger:0.05}, "-=0.2")
			}
			this.navbar = !this.navbar
		}
	},
	mounted() {
		var tl = gsap.timeline({ delay: 1 })
		tl.from("#hey", { y: 50, duration: 0.7, opacity: 0, ease: "expo" })
		tl.from(".nameContent", {
			y: 50,
			opacity: 0,
			duration: 0.7,
			stagger: 0.1,
			ease: "expo",
		})
		tl.from(".desc", { y: 50, opacity: 0, duration: 0.7, ease: "expo" }, "-=0.5")
		AOS.init()
		new Ztextify(".socialIconWrapper", {
			depth: "30px",
			layers: 8,
			fade: true,
			direction: "forwards",
			event: "pointer",
			eventRotation: "35deg"
		})
		const controller = new ScrollMagic.Controller()
		new ScrollMagic.Scene({
			triggerElement: ".landingRect",
			triggerHook: 0.1,
		})
			.setPin(".nLandingRect")
			.addTo(controller)

		let elementList = document.getElementsByClassName("whiteNavbar")
		for(let i=0; i<elementList.length; i++){
			new ScrollMagic.Scene({
				triggerElement: elementList[i],
				triggerHook: 0,
			})
				.setTween(
					gsap.to(".navbar", 0.1, {
						className: "navbar fixed-top navbar-expand-lg navbar-light bg-light",
					})
				)
				.addTo(controller)
		}
		elementList = document.getElementsByClassName("blackNavbar")
		for(let i=0; i<elementList.length; i++){
			new ScrollMagic.Scene({
				triggerElement: elementList[i],
				triggerHook: 0,
			})
				.setTween(
					gsap.to(".navbar", 0.1, {
						className:
                "navbar fixed-top navbar-expand-lg navbar-light bg-light transNav",
					})
				)
				.addTo(controller)
		}

	},
})