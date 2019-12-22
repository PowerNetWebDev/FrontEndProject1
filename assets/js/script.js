// Onload event
$(document).ready(() => {
    timelineSetup('#strength-list');
    navFade();
    secFade();
});

// Onscroll event
$(window).on('scroll', () => {
    navFade();
    secFade();
});

isScrolled = (el, funcWhile) => {
    elTop = $(el).offset().top;
    elBot = $(el).offset().top + $(el).outerHeight(true);
    scrollTop = $(window).scrollTop() + $('.navbar:eq(0)').outerHeight(true);
    scrollBot = $(window).scrollTop() + $(window).height();
    notAnimated = !($(el).hasClass('animated'));
    if (notAnimated) {
        if (scrollBot > elTop && scrollTop < elTop) {
            funcWhile();
        }
        if (scrollTop > elTop) {
            $(section).addClass('animated');
        }
    }
}

// Navbar fade in by scroll
navFade = () => {
    navbar = $('.navbar:eq(0)');
    hero = $('section#hero');
    heroBottom = hero.offset().top + hero.outerHeight(true) / 2;
    scrollTop = $(window).scrollTop();
    opacity = scrollTop > heroBottom ? 1 : (scrollTop / heroBottom);
    navbar.css({
        "background-color": `rgba(255,255,255,${opacity})`,
        "box-shadow": `0 8px 48px 8px rgba(33, 33, 33, ${(0.1 * opacity)})`,
        "border-bottom": `0.5px solid rgba(0,0,0,${opacity / 8}`
    });
}

// Navigation to specific element
jump = (selector) => {
    el = $(selector);

    window.scrollTo({
        top: el.offset().top,
        behavior: 'smooth'
    });
}

// item strength config
timelineSetup = (selectorId) => {
    $(selectorId).append('<span class="timeline-vr"></span>');
    $(selectorId).find('.timeline-item').append('<span class="timeline-arrow"></span>');
    $(selectorId).find('.timeline-item').append('<span class="timeline-dot"></span>');
    $(selectorId).find('.timeline-item:odd .timeline-body .timeline-img').addClass('order-md-2');
    $(selectorId).find('.timeline-item:odd .timeline-body .timeline-txt').addClass('order-md-1');

    timeline = $(selectorId).find('.timeline-body');
    timelineHeight = $(timeline[timeline.length - 1]).offset().top + $(timeline[timeline.length - 1]).outerHeight(true) - $(timeline[0]).offset().top;
    vr = $(selectorId).find('.timeline-vr');

    $(vr).css({
        'height': timelineHeight + 'px',
    })
}

// Fade Trantition Section
secFade = () => {
    // Bio
    section = $('section#bio .container');
    isScrolled(section,
        () => {
            $(section).addClass('animated');
            $(section).find('.col-md-5:eq(0)').addClass('animated fadeInRight');
            $(section).find('.col-md-7:eq(0)').addClass('animated fadeInUp');
        },
    );

    // Services
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

    // Strength
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

    // Clients
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
}