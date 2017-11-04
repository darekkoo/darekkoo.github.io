$(function () {
            $(window).scroll(function () {
                if ($(window).scrollTop() >= 50) {
                    $('#main-nav').addClass('scroll');

                }

                $(window).scroll(function () {
                    if ($(window).scrollTop() >= 50) {
                        $('#main-nav').addClass('scroll');
                        $('main-nav').css({
                            'transition':
                        })
                    } else {
                        $('#main-nav').removeClass('scroll');
                    }
                });
            });
