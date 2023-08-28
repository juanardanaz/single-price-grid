/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
});

sr.reveal(`.card`, {origin: 'bottom'});
sr.reveal(`.footer`, {delay: 600, origin: 'bottom'});