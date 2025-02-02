import gsap from 'gsap';
import Flip from 'gsap/Flip';

gsap.registerPlugin(Flip);
gsap.registerPlugin(DrawSVGPlugin);

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
.to('#home', {
    opacity: 1,
    duration: 2,
    ease: 'power1.out',
    onStart: () => {
        reParent();
    }
})
.to('#hold-button', {
    opacity: 0,
    duration: 0.5,
    ease: 'power1.out',
    onComplete: () => {
        document.getElementById('hold-button').style.display = 'none';
    }
}, '<')
.from('#home-image', {
    height: '4px',
    duration: 1,
    ease: 'power1.out',
})


document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded");
    opening.play();
})

const openingTexts = document.querySelector('.opening-text');

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
        console.log("home.play()");
        home.play();
    }
})

