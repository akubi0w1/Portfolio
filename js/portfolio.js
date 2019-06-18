var _window = $(window),
    _header = $('.nav'),
    heroBottom;

_window.on('scroll',function(){
    heroBottom = $('.header').height();
    if(_window.scrollTop() > heroBottom){
        $('.nav').addClass('fixed');
        // _header.addClass("fixed");
    }
    else{
        $('.nav').removeClass('fixed');
    }
});

_window.trigger('scroll');
