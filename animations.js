import gsap from 'gsap';
import Flip from 'gsap/Flip';

var opening = gsap.timeline();

opening.from('#logo', {
    opacity: 0,
    duration: 1,
    ease: 'power1.inOut'
})
.to('#logo', {
    width: '25%',
    height: '25%',
    duration: 2,
    ease: 'power1.inOut'
})
.from('#tif-text', {
    opacity: 0,
    x: 200,
    duration: 1,
    ease: 'power1.inOut'
},"-=1")
.from('#live-session-text', {
    opacity: 0,
    x: -200,
    duration: 1,
    ease: 'power1.inOut'
}, '<')
.to('#hold-button', {
    opacity: 1,
    duration: 1,
    ease: 'power1.inOut'
}, "+=0.5")

gsap.registerPlugin(Flip);

var home = gsap.timeline({ paused: true });

home.to('#home-bar', {
    display: 'flex',
    duration: 0.25,
    ease: 'power1.inOut',
    onComplete: flipTexts
})
.to('#logo', {
    width: '240px',
    height: '160px',
    duration: 0.25,
    ease: 'power1.inOut'
}, '<')
.to('#hold-button', {
    opacity: 0,
    duration: 0.5,
    ease: 'power1.inOut'
}, '<')

function flipTexts() {
    const tifText = document.getElementById('tif-text');
    const liveSessionText = document.getElementById('live-session-text');
    const logo = document.getElementById('logo');

    const state = Flip.getState([tifText, liveSessionText, logo]);

    moveTexts(tifText, liveSessionText, logo);
    
    Flip.from(state, {
        duration: 0.25,
        ease: 'power1.inOut'
    });
}

function moveTexts(tif, session, logo) {
    const newLogoParent = document.getElementById('top-left');
    const newSessionParent = document.getElementById('top-right');
    const newTifParent = document.getElementById('bottom-left');

    newTifParent.appendChild(tif);
    newSessionParent.appendChild(session);
    newLogoParent.appendChild(logo);
}

export function homeStartAnimation() {
    home.play();
}
