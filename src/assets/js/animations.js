
// End Title Series

// create match media version
let mm = gsap.matchMedia();
mm.add("(min-width: 800px)", () => {
// Title Series
let animation = gsap.timeline({repeat:-1})   
let stagger = 2

function init() {
        const colors = ["#332B62", "#1f6962", "#03679b", "#77843f"];
        
        gsap.set(".titleseries", {autoAlpha: 1});
        gsap.set(".titleseries span", {transformOrigin: "50% 50% 50"});
        
        animation.from(".titleseries span", {
            rotationX: 80,
            opacity: 0,
            stagger: {
                each: stagger,
                onStart: function() {
                    this.targets().forEach((target, i) => {
                        // target.style.color = colors[Math.floor(Math.random() * colors.length)];
                        
                    });
                }
            }
        })
        .to(".titleseries span", {
            rotationX: -80,
            opacity: 0,
            stagger: {
                each: stagger,
                onStart: function() {
                    this.targets().forEach((target, i) => {
                        // target.style.color = colors[Math.floor(Math.random() * colors.length)];
                        
                    });
                  
                }
            }
        }, stagger)
        .to(".titleseries span", {
            stagger: {
                each: stagger,
                onStart: function() {
                    this.targets().forEach((target, i) => {
                        target.style.color = colors[Math.floor(Math.random() * colors.length)];
                        
                    });
                  
                }
            }
        }, stagger);
    }

init()
// Stacking Cards
const cards = gsap.utils.toArray(".card");
const spacer = 10;
const minScale = 0.8;

const distributor = gsap.utils.distribute({ base: minScale, filter:blur('4px'), amount: 0.2 });

cards.forEach((card, index) => {
  const scaleVal = distributor(index, cards[index], cards);
  const tween = gsap.to(card, {
    scrollTrigger: {
      trigger: card,
      start: `top top`,
      scrub: true,
      // markers: true,
      invalidateOnRefresh: true
    },
    ease: "none",
    scale: scaleVal
  });

  const contentBlocks = card.querySelectorAll(".card-content");
  contentBlocks.forEach((contentBlock) => {
    gsap.to(contentBlock, {
      scrollTrigger: {
        trigger: card,
        scrub: true,
        start: "top top",
        // markers: true
      },
      opacity: 0
    });
  });
  const animation = gsap.timeline();
  animation.to(card, {filter:'blur(4px)'});
  ScrollTrigger.create({
    trigger: card,
    // start: `top-=${index * spacer} top`,
	start: `top top`,
    endTrigger: ".cards",
    end: `bottom top+=${200 + cards.length * spacer}`,
    pin: true,
    pinSpacing: false,
    toggleActions:'restart none none reverse',
    // markers: true,
    id: "pin",
    animation:animation,
    invalidateOnRefresh: true
  });
});
// End Stacking Cards

// added this function to reload the page on resize ( needed for all the wacky js animations)
// reloadOnResize();

// function reloadOnResize() {
//     let resizeTimeout;

//     window.addEventListener('resize', function() {
//         clearTimeout(resizeTimeout);
//         resizeTimeout = setTimeout(function() {
//             location.reload();
//         }, 100); 
//     });
// }

});

// Get the button element
// let allButtons = document.querySelectorAll('button.card');

// allButtons.forEach(button =>{
//   // Add a click event listener to the button
// button.addEventListener("click", function() {
//   // Redirect to the desired URL
//   parent.location.href = `${button.dataset.url}`;
// });
// })




