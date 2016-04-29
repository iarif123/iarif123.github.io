/* User experience animations. Dependencies include the jQuery library, Waypoints plugin and Visibility plugin. - Shafqat Dulal */
$(document).ready(function() {
    $('.background').css('height', $(window).height() + 'px');
    fadeInIntro();
    enableResize();
    stickyNav();
    alternateExperiencePositions();
    enableSmoothScroll();
    experiencesAnimations();
});

function enableResize() {
    $(window).on('resize', function(event) {
        $('.background').css('height', $(window).height() + 'px');
    });
}

function stickyNav() {
    $('#content').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });
}

function enableSmoothScroll() {
    $("a[href^='#']").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });
}

function alternateExperiencePositions() {
    $(".experience").each(function(index, el) {
        if (index % 2 != 0) {
            $(this).css('transform', 'rotateY(180deg)');
            $(this).children().css('transform', 'scaleX(-1)');
            $(this).find('.exp-info').css('transform-origin', '40%');
        }
    });
}


function fadeInIntro() {
    $('#overlay').css('display', 'none');
    $('#main-title').css('display', 'none');
    $('#small').css('display', 'none');
    setTimeout(function() {
        $('#overlay').fadeIn(500);
    }, 750);
    setTimeout(function() {
        $('#main-title').fadeIn(500);
        $('#small').fadeIn(2000);
    }, 2000);
    setTimeout(function() {
        $('#bouncing-arrow').show(500);
    }, 3500);
}



function experiencesAnimations() {
    $(window).scroll(function(event) {
        $('.experience').each(function(index, el) {
            if ($(this).visible(true) && !$(this).hasClass('visible')) {
                $(this).find('.image').delay(125).animate({
                    right: '0px',
                    opacity: '1'
                }, 500);
                $(this).find('.exp-info').delay(125).animate({
                    left: '0px',
                    opacity: '1'
                }, 500);
                $(this).addClass('visible');
            }
        });
    });
}


