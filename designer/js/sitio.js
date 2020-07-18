
//animacion del nav para quitar y añadir clases 

 $(window).scroll(function () {

    var nav__ul__li = $('.nav__ul__li');
    var nav = $('nav');
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        nav__ul__li.addClass("margenes");
        nav.addClass("pegajoso");
    } else {
        nav__ul__li.removeClass("margenes");
        nav.removeClass("pegajoso");
    }
 });



