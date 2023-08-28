/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
});

sr.reveal(`.card`, {origin: 'bottom'});
sr.reveal(`.card_img`, {delay: 600, origin: 'bottom'});
sr.reveal(`.card_data`, {delay: 600, origin: 'bottom'});