document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector('header');
    const homeHero = document.querySelector('.home-hero');
    const homeHeroMask = document.querySelector('.home-hero .hero-mask');
    const fundsButton = document.querySelector('#funds');
    const fullWidthPanel = document.querySelector('.full-width-panel');
    const shield = document.querySelector('.shield');
        // Initially set the header to transparent
    //  header.classList.add('transparent');
    if (homeHero) {
       
    // Add a class to make the hero section sticky
    homeHero.classList.add('sticky-hero');

    // Hero animation
    const tl = gsap.timeline();
    // Add fade-in effect for topic sections
    const topicSections = document.querySelectorAll('.topic-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Fade in when the section comes into view
                gsap.to(entry.target, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out"
                });
            } else {
                // Smoothly transition the section out of view
                gsap.to(entry.target, {
                    opacity: 0,
                    y: 50,
                    duration: 0.8,
                    ease: "power2.in"
                });
            }
        });
    }, {
        threshold: 0.1, // Trigger when 20% of the section is visible
        rootMargin: "-10% 0px -10% 0px" // Slightly shrink the effective viewport
    });

    topicSections.forEach(section => {
        gsap.set(section, { opacity: 0, y: 50 }); // Set initial state
        observer.observe(section);
    });
     }

         let fullWidthPanelHandler = () => {
       
        fullWidthPanel.classList.toggle('active');
        shield.classList.toggle('active');
        // Toggle aria-label attribute
        if (fullWidthPanel.getAttribute('aria-label') === 'Funding Panel Open') {
            fullWidthPanel.setAttribute('aria-label', 'Funding Panel Closed');
        } else {
            fullWidthPanel.setAttribute('aria-label', 'Funding Panel Open');
        }
        // Focus trap
        if (fullWidthPanel.classList.contains('active')) {
            trapFocus(fullWidthPanel);
        } else {
            document.removeEventListener('keydown', handleTabKey);
        }
     }
     if(fundsButton) {
     funds.addEventListener('click', fullWidthPanelHandler);
     document.querySelector('.close').addEventListener('click', fullWidthPanelHandler);
     }
     if(shield) {
            shield.addEventListener('click', fullWidthPanelHandler);   
        }
          // Function to trap focus within the panel
    function trapFocus(element) {
        const focusableElements = element.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        function handleTabKey(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) { // Shift + Tab
                    if (document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    }
                } else { // Tab
                    if (document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            }
        }

        document.addEventListener('keydown', handleTabKey);
        firstElement.focus();
    }

});


document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menuButton");
    const menuCloseButton = document.getElementById("menuCloseButton");
    const fullMenu = document.getElementById("fullMenu");

    // Open menu with circular transition
    menuButton.addEventListener("click", () => {
        fullMenu.style.display = "block";
        fullMenu.style.visibility = "visible";
        menuCloseButton.setAttribute("aria-label", "Menu Expanded: Close Button ");
        // Create a circular mask
        gsap.set(fullMenu, {
            clipPath: "circle(0% at top right)",
            opacity: 1
        });

        // Animate the circular mask to reveal the menu
        gsap.to(fullMenu, {
            clipPath: "circle(150% at top right)",
            duration: 0.8,
            ease: "power2.inOut"
        });
    });

    // Close menu
    menuCloseButton.addEventListener("click", () => {
        menuCloseButton.setAttribute("aria-label", "Menu collapsed: Open Button");
        gsap.to(fullMenu, {
            clipPath: "circle(0% at top right)",
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: () => {
                fullMenu.style.display = "none";
                fullMenu.style.visibility = "hidden";
            }
        });
    });
});

// sticky header
const header = document.querySelector('header.sticky-top');
if (header) {
  ScrollTrigger.create({
    trigger: header,
	start: `200px top`,
    end:'+=800px',
    toggleActions:'restart none none reverse',
    // markers: true,
        onEnter: () => header.classList.add('transparent'),
        onLeaveBack: () => header.classList.remove('transparent'),
  });
}



// floating arrow
const svgContainer = document.querySelector('.svg-container');
if (svgContainer) {
    let maskgroup = document.querySelector('#m1 g');
  const animationSVG = gsap.timeline({transformOrigin: 'center'});
  animationSVG.to(maskgroup, {y:'10%', duration: 1, ease: "none"})
  .to('.hero-mask image', {scale:1.2, transformOrigin:'center',duration: 1, ease: "power1"}, '-=0.7')
  .to('.hero-mask image', {opacity:0,duration: 1, ease: "none"}, 0);
  ScrollTrigger.create({
    trigger: 'header',
	start: `0 top`,
    end:'center',
    toggleActions:'restart none none reverse',
    // markers: true,
    animation:animationSVG,
    invalidateOnRefresh: true
  });
}

//   Sub pages arrow
// floating arrow
const svgContainerSub = document.querySelector('.svg-container-sub');
if (svgContainerSub) {
  let maskgroupSub = document.querySelector('#m2 g');
  const animationSubSVG = gsap.timeline();
  animationSubSVG.to(maskgroupSub, {y:'35%', duration: 1, ease: "none"});
  ScrollTrigger.create({
    trigger: svgContainerSub,
	start: `0px top`,
    end:'bottom',
    toggleActions:'restart none none reverse',
    scrub: true,
    // markers: true,
    animation:animationSubSVG,
    invalidateOnRefresh: true
  });
}
let mmTwo = gsap.matchMedia();
mmTwo.add("(max-width: 768px)", () => {
    if (svgContainerSub) {
  let maskgroupSub = document.querySelector('#m2 g');
  const animationSubSVG = gsap.timeline();
  animationSubSVG.to(maskgroupSub, {y:'35%', duration: 1, ease: "none"});
  ScrollTrigger.create({
    trigger: svgContainerSub,
	start: `-200px top`,
    end:'bottom',
    toggleActions:'restart none none reverse',
    scrub: true,
    // markers: true,
    animation:animationSubSVG,
    invalidateOnRefresh: true
  });
}

})



document.addEventListener("DOMContentLoaded", function() {
    
     const menuLinks = document.querySelectorAll('.full-width-menu .menu-links ul li a');
    const currentUrl = `.${window.location.pathname}`;

    menuLinks.forEach(link => {
        // console.log(link.getAttribute('href'));
        const linkPath = new URL(link.href).pathname;
        if (currentUrl.includes(linkPath)) {
            link.classList.add('active');
        }
    });
});

// ScrollTrigger to fade in every section element, excluding the first two sections

if (document.querySelector('.hero')) {
    // ScrollTrigger to fade in every section element, excluding the first two sections
    const sections = document.querySelectorAll('section');
    const sectionsToAnimate = Array.from(sections).slice(2); // Exclude the first two sections

    sectionsToAnimate.forEach(section => {
        ScrollTrigger.create({
            trigger: section,
            start: "top center", 
            end: "center 70%",
            fastScrollEnd: true,
            animation: gsap.from(section, {opacity: 0, duration: 3, ease: "power2.out"}),
            toggleActions: 'restart none none reverse',
            // markers: true,
            scrub: true
        });
    });

  
}
// Function to find .html file in the URL
function findHtmlFileInUrl() {
    const url = window.location.href;
    const htmlFile = url.match(/[^\/]+\.html/);
    if (url.includes('-es.html')) {
        let finalurl = htmlFile[0];
        finalurl = finalurl.replace('-es.html', '.html');
        return goToUrl(finalurl);
    }else if (url.includes('.html') == false) {
        return goToUrl('index-es.html');
    }else{
        let finalurl = htmlFile[0];
        finalurl = finalurl.replace('.html', '-es.html');
        return goToUrl(finalurl);
    }
    
}
// Function to navigate to a different URL
function goToUrl(url) {
    window.location.href = url;
}
  // toggle button
    const toggleElement = document.querySelector('.toggle');

    if(toggleElement) {
        
        toggleElement.addEventListener('click', () => {
            findHtmlFileInUrl()
        toggleElement.classList.add('touched');
        const   isChecked = toggleElement.getAttribute('aria-checked') === 'true';
        toggleElement.setAttribute('aria-checked', !isChecked);
            document.querySelector('#languageCheck').classList.toggle('active');
    });
    }