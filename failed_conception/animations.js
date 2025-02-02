import gsap from 'gsap';
import Flip from 'gsap/Flip';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(Flip);
gsap.registerPlugin(ScrollTrigger);

let opening = gsap.timeline({ paused: true});

// Would be even cooler to draw the logo SVG with GSAP
opening.to('#opening', { opacity: 1.0, delay: 1.5, duration: 2})
.from('#logo', {
    scale: 3,
    x: '250px',
    duration: 1,
    ease: 'power1.out',
})
.from('#tif-text', {
    opacity: 0,
    duration: 0.75,
    x: 200,
    ease: 'power1.inOut',
})
.from('#session-text', {
    opacity: 0,
    duration: 0.75,
    x: -200,
    ease: 'power1.inOut',
}, '<')
.to('#hold-button', {
    opacity: 1,
    duration: 2,
    ease: 'power3.out',
}, '+=0.5')

let home = gsap.timeline({ paused: true});

home.to('#home', {display: 'flex', duration: 0.5, ease: 'power1.out'})
.to('#hold-button', {
    opacity: 0,
    duration: 0.5,
    ease: 'power1.out',
    onComplete: () => {
        document.getElementById('hold-button').style.display = 'none';
    }
}, '<')
.to('#home', {
    opacity: 1,
    duration: 2,
    ease: 'power1.out',
    onStart: () => {
        reParent();
    }
},'<')
.from('#home-image', {
    height: '0px',
    duration: 1,
    ease: 'power1.out',
})
.from('#credits', {
    opacity: 0,
    x: 500,
    duration: 2,
    ease: 'power1.out',
})
.to('#scroll-indicator', {
    display: 'flex',
    duration: 0.1,
    ease: 'power1.out',
    onComplete: () => {
        scroll.play();
        ScrollTrigger.refresh();
    }
})
.to('#scroll-indicator', {
    opacity: 1,
    duration: 0.5,
    ease: 'power1.out',
})

let scroll = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 0.05 });

scroll.to('.scroll-arrow:nth-child(1)', {
    opacity: 1,
    y: 4,
    duration: 0.5,
    ease: 'power1.out',
})
.to('.scroll-arrow:nth-child(2)', {
    opacity: 1,
    y: 4,
    duration: 0.5,
    ease: 'power1.out',
}, '-=0.25')
.to('.scroll-arrow:nth-child(3)', {
    opacity: 1,
    y: 4,
    duration: 0.5,
    ease: 'power1.out',
}, '-=0.25')

let homeScroll = gsap.timeline({
    scrollTrigger: {
        // TODO: fix this...
    }
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded");
    opening.play();
})

const tif = document.querySelector('#tif-text');
const session = document.querySelector('#session-text');
const logo = document.querySelector('#logo');

const tifAnchor = document.querySelector('#tif-anchor');
const sessionAnchor = document.querySelector('#session-anchor');
const logoAnchor = document.querySelector('#logo-anchor');

function reParent() {
    const state = Flip.getState([tif, session, logo])

    tifAnchor.appendChild(tif);
    sessionAnchor.appendChild(session);
    logoAnchor.appendChild(logo);

    Flip.from(state, {
        absolute: true,
        stagger: 0.1,
        duration: 1,
        ease: 'power1.out'
    });
}

const startButton = document.getElementById('hold-button');

startButton.addEventListener('click', () => {
    const computedBefore = window.getComputedStyle(startButton, '::before');
    const computedButton = window.getComputedStyle(startButton);

    const beforeWidth = computedBefore.width;
    const buttonWidth = computedButton.width;

    if (beforeWidth === buttonWidth) {
        home.play();
    }
})