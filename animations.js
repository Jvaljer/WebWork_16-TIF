import gsap from 'gsap';

var opening = gsap.timeline();

opening.to('#logo', {
    delay: 0.5,
    opacity: 1.0,
    position: 'relative',
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



