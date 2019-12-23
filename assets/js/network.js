$(document).ready(() => {
    $('#hero-more').on('click',() => {
        jump('section:eq(1)')
    })
    vListSetup();
    servicesSetup();
});