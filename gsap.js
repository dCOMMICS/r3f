gsap.to(".box", { 
  x: 200,
});

// Create   the element //

const {
  gsap,
  ScrollTrigger,
  gsap: { to, set },
} = window

gsap.registerPlugin(ScrollTrigger)

to('.book', {
  scrollTrigger: {
    scrub: 1,
    start: () => 0,
    end: () => window.innerHeight * 0.25,
  },
  scale: 1,
})

to('.gsap-logo', {
  scrollTrigger: {
    scrub: true,
    start: () => 13.5 * (window.innerHeight * 0.25),
    end: () => 14 * (window.innerHeight * 0.25),
  },
  opacity: 1,
})

const PAGES = [...document.querySelectorAll('.book__page')]
PAGES.forEach((page, index) => {
  set(page, { z: index === 0 ? 13 : -index * 1 })
  if (index === 11) return false
  to(page, {
    rotateY: `-=${180 - index / 2}`,
    scrollTrigger: {
      scrub: 1,
      start: () => (index + 1) * (window.innerHeight * 0.25),
      end: () => (index + 2) * (window.innerHeight * 0.25),
    },
  })
  to(page, {
    z: index === 0 ? -13 : index,
    scrollTrigger: {
      scrub: 1,
      start: () => (index + 1) * (window.innerHeight * 0.25),
      end: () => (index + 1.5) * (window.innerHeight * 0.25),
    },
  })
})


// dont use this code // 

gsap.utils.toArray(".comparisonSection").forEach(section => {
	let tl = gsap.timeline({
			scrollTrigger: {
				trigger: section,
				start: "center center",
        // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
				end: () => "+=" + section.offsetWidth, 
				scrub: true,
				pin: true,
        anticipatePin: 1
			},
			defaults: {ease: "none"}
		});
	// animate the container one way...
	tl.fromTo(section.querySelector(".afterImage"), { xPercent: 100, x: 0}, {xPercent: 0})
	  // ...and the image the opposite way (at the same time)
	  .fromTo(section.querySelector(".afterImage img"), {xPercent: -100, x: 0}, {xPercent: 0}, 0);
});

// end of code //