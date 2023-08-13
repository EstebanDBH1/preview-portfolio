let mainAnimation = () => {
  gsap.to(".co-header, .info-little, .footer-hero", {
    opacity: 1,
    ease: "power3.ease",
    duration: 1,
    stagger: 0.05,
    delay: 0.4,
  });

  gsap.to(".co-links-projects li .link-project", {
    y: 0,
    duration: 0.7,
    ease: "power3.ease",
    stagger: 0.04,
    delay: 0.7,
  });
};

mainAnimation();

let pageAnimation = () => {
  gsap.to(".title-project span", {
    y: 0,
    ease: "power3.ease",
    duration: 1,
  });
  gsap.to(".img-project-view", {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    duration: 1,
    ease: Expo.easeInOut,
    delay: 0.4,
  });
};
pageAnimation();
