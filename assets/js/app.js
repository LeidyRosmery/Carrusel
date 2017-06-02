$(document).ready(function(){
  $('.after').on('click', function(){
    var imagenActual=$('.active');
    var imagenSiguiente=imagenActual.next();
    if(imagenSiguiente.length){
      imagenActual.removeClass('active').css('z-index',-10);
      imagenSiguiente.addClass('active').css('z-index',10);
    }
  });
});
