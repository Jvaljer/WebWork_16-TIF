import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const opening = gsap.timeline({paused:true});

const home = gsap.timeline({paused:true});


const homeScroll = gsap.timeline({
    scrollTrigger: {
        trigger: '.home-bar',
        start: 'top-=32 top',
        scrub: 1
    },
    paused:true
});


homeScroll.to('.home-bar', {
    position: 'fixed',
    top: '32px',
    opacity: 0.5,
    ease: 'power1.out',
})
.to('.bar-image', {
    height: '4px',
    ease: 'power1.out',
}, '<')
.to('#logo', {
    height: '2vw',
    ease: 'power1.out',
}, '<')
.to('#session-text', {
    fontSize: '1.25vw',
    ease: 'power1.out',
}, '<')
.to('.bar-top', {
    height: '2vw',
    ease: 'power1.out',
}, '<')
.to('.bar-bottom', {
    opacity: 0,
    ease: 'power1.out',
}, '<')
.to('#tif-text', {
    fontSize: '1.5vw',
    opacity: 0,
    ease: 'power1.out',
}, '<')
.to('#credit-text', {
    fontSize: '1vw',
    opacity: 0,
    ease: 'power1.out',
}, '<')
.to('.bar-bottom', {
    display: 'none',
    ease: 'power1.out',
});

let vinyl = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: 'bottom+=64px center',
        scrub: 1,
        markers: true
    },
    paused:true
});

vinyl.to('.vinyl', {
    backgroundColor: 'red',
    ease: 'power1.out',
}, '<')
