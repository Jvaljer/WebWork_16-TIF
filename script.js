import gsap, { Elastic } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let videoHeight, liveVideo;

document.addEventListener('DOMContentLoaded', () => {
    videoHeight = document.querySelector('.video-illustration').getBoundingClientRect().height;
    liveVideo = document.querySelector('.video-play');
});

let holdBtn = document.getElementById('click-hold-btn');

holdBtn.addEventListener('mousedown', () => {
    const interval = setInterval(() => {
        const computedBefore = window.getComputedStyle(holdBtn, '::before');
        const computedButton = window.getComputedStyle(holdBtn);

        const beforeWidth = parseInt(computedBefore.width, 10);
        const buttonWidth = parseInt(computedButton.width, 10) * 0.95;

        console.log(`${beforeWidth} compared to ${buttonWidth}`);
        
        if (beforeWidth >= parseInt(buttonWidth)) {
            opening.play();
            clearInterval(interval); // Stop checking once triggered
        }
    }, 50); // Check every 50ms

    // Stop checking if the mouse is released
    document.addEventListener('mouseup', () => clearInterval(interval), { once: true });
});

const scrollWidget = gsap.timeline({repeat: -1, defaults: {ease: "power1.inOut"}});

scrollWidget
.to(".arrow-icon", {
    y: 4,
    opacity: 0.25,
    duration: 0.75,
    stagger: 0.25,
    ease: "power2.out"
})
.to(".arrow-icon", {
    y: -2, 
    opacity: 0.75, 
    duration: 0.5, 
    stagger: 0.25,
    ease: "power2.out"
}, ">-0.25")

const opening = gsap.timeline({paused: true});

opening.to('.click-hold', {
    opacity: 0,
    scale: 0,
    onComplete: () => {
        document.querySelector(".click-hold").style.display = 'none';
    }
})
.from('.bar-image', {
    height: '2px',
    opacity: 0,
    duration: 1.5
}, '+=0.75')
.from('#logo', {
    y: '100px',
    opacity: 0,
    duration: 1
})
.from('#session-text', {
    y: '100px',
    opacity: 0,
    duration: 1.5
}, '-=0.5')
.from('#tif-text', {
    opacity: 0,
    duration: 1.5
})
.from('#credit-text', {
    opacity: 0,
    duration: 1.5,
}, '<')
.from('.scroll-indicator', {
    opacity: 0,
    scale: 0.25,
    duration: 1.5,
    onStart: () => {
        scrollWidget.play();
    }
}, '+=1');

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

let video = gsap.timeline({
    scrollTrigger: {
        trigger: '.video',
        start: 'top bottom',
        end: 'top top',
        scrub: 1
    }
});

video.to('.video', {
    position: 'fixed',
    top: 0,
    opacity: 1,
})
.to('.video-illustration', {
    backgroundSize: '0px 100%',
    onComplete: () => {
        liveVideo.play();
    }
});

let videoEnd = gsap.timeline({
    scrollTrigger: {
        trigger: '.album-trigger',
        start: 'center center',
        end: 'bottom top',
        scrub: 1,
        onEnter: () => {
            liveVideo.pause();
        }
    }
})

videoEnd.to('.video', {
    opacity: 0,
    display: 'none'
})

let album = gsap.timeline({
    scrollTrigger: {
        trigger: '.album',
        start: 'top bottom',
        end: 'bottom+=100vh bottom',
        scrub: 1
    },
    paused: true,
});

album.to('.album', {
    position: 'fixed',
    top: 0,
})
.from('.album-cover', {
    y: '50vh',
    opacity: 0,
    ease: 'power1.inOut',
})
.from('.album-title', {
    x: '200px',
    opacity: 0
})
.from('.album-song-name', {
    x: '100px',
    opacity: 0,
    duration: 0.5,
    stagger: {
        each: 0.2,
        from: 'end'
    }
})
.from('.album-icon', {
    x: '-50px',
    opacity: 0,
    duration: 1,
    stagger: {
        each: 0.25,
        from: 'end'
    }
}, '<');