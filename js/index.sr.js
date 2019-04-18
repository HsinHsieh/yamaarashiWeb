$(document).ready(() => {
    ScrollReveal({ duration: 1000 });

    bannerBG = {
        reset: true,
        duration: 2000,
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        scale: 1.05,
        opacity: 1
    }
    ScrollReveal().reveal(".banner-bg", bannerBG);

    logo_img = { reset: true };
    logo_p = { delay: 200, reset: true };
    ScrollReveal().reveal(".logo > img", logo_img);
    ScrollReveal().reveal(".logo > p", logo_p);

    section_img = {
        scale: .95,
        duration: 800,
        opacity: .6,
        easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
        delay: 200
    }
    ScrollReveal().reveal(".section-img", section_img);

    section_title = {
        duration: 1000,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
        delay: 260
    }
    ScrollReveal().reveal(".section-title", section_title);

    section = {
        duration: 800,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
        delay: 320
    }
    ScrollReveal().reveal(".section-words, .section-button", section);

    bannerSM = {
        reset: true,
        duration: 8000,
        easing: 'cubic-bezier(1, 1, 0, 0)',
        scale: 1.1,
        opacity: 1
    }
    ScrollReveal().reveal(".banner-sm > img", bannerSM);
});