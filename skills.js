particlesJS("particles-js", {
    particles: {
        number: { value: 100 },
        size: { value: 3 },
        move: {
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out"
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00ffff",
            opacity: 0.4,
            width: 1
        },
        anim: { enable: true }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
        },
        modes: {
            repulse: { distance: 100, duration: 1 }
        }
    },
    retina_detect: true
});
