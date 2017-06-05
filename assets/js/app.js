$(document).ready(function() {
  //funcion para cambiar imagen con controles de puntos
      $('.controles').on('click',function(e){
        var pos=e.target;
        var imagenActual = $('.active');
        $('span').removeClass('color-activo');
        pos.classList.add('color-activo');
        img=$('.img-carrusel[alt='+pos.id+']');
        img.addClass('active').css('z-index', 10);
        imagenActual.removeClass('active').css('z-index', -10);
        console.log('span id'+ pos.id);
        console.log('alt imagen'+ img.attr('alt'));
      });

      $('.after').on('click', function() {
      //  $('img').removeClass('active');
        $('span').removeClass('color-activo');
        var imagenActual = $('.active');
        var spanActual=$('#'+imagenActual.attr('alt'));
        var imagenSiguiente = imagenActual.next();
        var spanSiguiente=spanActual.next();
        var ultimoImagen = $('#slider img:last-child');
        if (imagenSiguiente.length) {
            imagenActual.removeClass('active').css('z-index', -10);
            imagenSiguiente.addClass('active').css('z-index', 10);
            spanActual.removeClass('color-activo');
            spanSiguiente.addClass('color-activo');
            $('#slider img:first-child').insertAfter('#slider img:last-child');
            console.log(imagenActual);
            console.log(spanActual.attr("id"));
          }
       if (spanActual.attr('id')==7) {
         $('.icon-controller-record[id=1]').addClass('color-activo');
       }
    });
    $('.before').on('click', function() {
        var imagenActual = $('.active');
        var imagenAnterior = imagenActual.prev();
        var spanActual=$('#'+imagenActual.attr('alt'));
        var spanSiguiente=spanActual.prev();
        if (imagenAnterior.length) {
            spanActual.removeClass('color-activo');
            spanSiguiente.addClass('color-activo');
            imagenActual.removeClass('active').css('z-index', -10);
            imagenAnterior.addClass('active').css('z-index', 10);
            $('#slider img:last-child').insertBefore('#slider img:first-child');
        }
        if (spanActual.attr('id')==1) {
          $('.icon-controller-record[id=7]').addClass('color-activo');
        }
    });
});
