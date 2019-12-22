$(document).ready(() => {
    $('#hero-more').on('click',() => {
        jump('section:eq(1)')
    })
    vListSetup();
    servicesSetup();
});


servicesSetup = () => {
    heroItem = $('.services-list .hero-container');
    vListItem = $('.services-list .vertical-list .list-item');
    $(vListItem).on('click', (e) => {
        index = $(vListItem).index(e.currentTarget);
        $('.services-list .vertical-list .list-item.active').removeClass('active');
        $(`.services-list .vertical-list .list-item:eq(${index})`).addClass('active');
        $('.services-list .hero-container.active').removeClass('animated fadeIn');        
        $('.services-list .hero-container.active').removeClass('active animated fadeIn');
        $(heroItem[index]).addClass('active animated fadeIn');
    });
}