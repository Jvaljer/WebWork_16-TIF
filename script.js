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
        trigger: '.vinyl-group',
        start: 'center center',
        scrub: 1
    },
    paused:true
});


vinyl.to('.vinyl-container', {
    position: 'fixed',
    alignItems: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    ease: 'power1.out',
})
.from('.vinyl-disk', {
    opacity: 0,
    x: '-100%',
    rotate: '-180deg',
    ease: 'power1.out',
},'<');

let vinylLabels = gsap.timeline({
    scrollTrigger: {
        trigger: '.labels-trigger',
        start: 'top bottom',
        scrub: 1,
    },
    paused: true
});

vinylLabels.from('.vinyl-labels', {
    opacity: 0,
})
.from('.vinyl-title', {
    x: '-48px'
}, '<')
.from('.vinyl-text', {
    opacity: 0,
    x: '-128px'
});

let vinylOut = gsap.timeline({
    scrollTrigger: {
        trigger: '.video-trigger',
        start: 'top bottom',
        end: 'bottom center',
        scrub: 1
    },
    paused: true
});

vinylOut.to('.vinyl-case', {
    x: '500%',
    opacity: 0
})
.to('.vinyl-disk', {
    x: '400%',
    opacity: 0
}, '<')
.to('.vinyl-title', {
    x: '300%',
    opacity: 0
}, '<')
.to('.vinyl-text', {
    x: '300%',
    opacity: 0
}, '<')