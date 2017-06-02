$(document).ready(function() {

    $('.after').on('click', function() {
        var imagenActual = $('.active');
        var imagenSiguiente = imagenActual.next();
        var ultimoImagen = $('#slider img:last-child');
        console.log(imagenActual);
        console.log(ultimoImagen);

        /*  if(imagenActual==ultimoImagen){
            $('#slider img:first-child').insertBefore('#slider img:last-child');
          }*/
        if (imagenSiguiente.length) {
            imagenActual.removeClass('active').css('z-index', -10);
            imagenSiguiente.addClass('active').css('z-index', 10);
            $('#slider img:last-child').insertBefore('#slider img:first-child');
        }
    });
    $('.before').on('click', function() {
        var imagenActual = $('.active');
        var imagenAnterior = imagenActual.prev();
        console.log(imagenAnterior);
        if (imagenAnterior.length) {
            console.log("ingressa al if");
            imagenActual.removeClass('active').css('z-index', -10);
            imagenAnterior.addClass('active').css('z-index', 10);
            $('#slider img:last-child').insertBefore('#slider img:first-child');
        }
    });
});
