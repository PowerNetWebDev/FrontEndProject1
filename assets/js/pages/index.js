// THIS SCRIPT IS NEEDED BY INDEX PAGE
// REQUIRE JQUERY AND IT'S DEPENDENCY AND ANIMATE.CSS TO WORK PROPERLY

// WHEN THE DOCUMENT IS READY
$(document).ready(() => {
    timelineSetup('#strength-list');
    secFade();
});

// WHILE USER SCROLL THE PAGE
$(window).on('scroll', () => {
    secFade();
});

// SECTION FADE TRANTITION SETUP
// I HOPE I FOUND ANOTHER WAY TO SIMPLIFIED THIS SCRIPT
secFade = () => {
    // COMPANY DECRIPTION
    section = $('section#bio .container');
    isScrolled(section,
        () => {
            $(section).addClass('animated');
            $(section).find('.col-md-5:eq(0)').addClass('animated fadeInRight');
            $(section).find('.col-md-7:eq(0)').addClass('animated fadeInUp');
        },
    );

    // SERVICES
    section = $('section#feat .row');
    isScrolled(section,
        () => {
            $(section).addClass('animated');
            $(section).find('.col-md-6:eq(0)').addClass('animated fadeInLeft');
            $(section).find('.col-md-6:eq(0) p').addClass('animated fadeInUp');
            $(section).find('.col-md-6:eq(1)').addClass('animated fadeInRight');
            $(section).find('.col-md-6:eq(1) p').addClass('animated fadeInUp');
        },
    );

    // COMPANY STRENGTH
    section = $('section#strength .section-title');
    isScrolled(section,
        () => {
            $(section).addClass('animated fadeInUp');
        },
    );
    if ($(window).width() >= 992) {
        section = $('#strength-list .timeline-vr');
        isScrolled(section,
            () => {
                $(section).addClass('animated fadeIn');
            },
        );
        section = $('#strength-list .timeline-item');
        isScrolled(section,
            () => {
                $(section).addClass('animated fadeInUp');;
            },
        );
    }

    // CLIENTS
    section = $('section#client .section-title');
    isScrolled(section,
        () => {
            $(section).addClass('animated fadeInUp');
        },
    );
    if ($(window).width() >= 992) {
        section = $('section#client .row');
        isScrolled(section,
            () => {
                $(section).addClass('animated fadeInUp');
                $(section).find('.col-lg-4:eq(0)').addClass('animated fadeInLeft');
                $(section).find('.col-lg-4:eq(2)').addClass('animated fadeInRight');
                $(section).find('.col-lg-4:eq(3)').addClass('animated fadeInLeft');
                $(section).find('.col-lg-4:eq(5)').addClass('animated fadeInRight');
            },
        );
    }

    // OUR OFFICE
    section = $('section#loc .section-title');
    isScrolled(section,
        () => {
            $(section).addClass('animated fadeInUp');
        },
    );
    section = $('section#loc .gmap_canvas');
    isScrolled(section,
        () => {
            $(section).addClass('animated fadeInUp');
            $(section).find('.col-lg-4:eq(0)').addClass('animated fadeInLeft');
            $(section).find('.col-lg-4:eq(2)').addClass('animated fadeInRight');
            $(section).find('.col-lg-4:eq(3)').addClass('animated fadeInLeft');
            $(section).find('.col-lg-4:eq(5)').addClass('animated fadeInRight');
        },
    );
}