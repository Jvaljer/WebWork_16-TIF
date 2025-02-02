import gsap from 'gsap';
import Flip from 'gsap/Flip';

gsap.registerPlugin(Flip);

let opening = gsap.timeline({ paused: true});

opening.to('#opening', { opacity: 1.0, delay: 0.5, duration: 1})

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM content is loaded !");
    opening.play();
})