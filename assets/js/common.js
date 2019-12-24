$(window).on('scroll', () => {    
    sections = $('section').not('#hero').children().not('svg');    
    $(sections).each((index, section) => {        
        isScrolled($(section),
            () => {
                $(section).addClass('animated fadeInUp');                
            },
        );
    });
});

