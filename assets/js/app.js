$(document).ready(function(){
  $('.after').on('click', function(){
    var imagenActual=$('.active');
    var imagenSiguiente=imagenActual.next();
    console.log(imagenSiguiente);
    if(imagenSiguiente.length){
      imagenActual.removeClass('active').css('z-index',-10);
      imagenSiguiente.addClass('active').css('z-index',10);
    }
  });
  $('.before').on('click', function(){
    var imagenActual=$('.active');
    var imagenAnterior=imagenActual.prev();
        console.log(imagenAnterior);
    if(imagenAnterior.length){
      console.log("ingressa al if");
      imagenActual.removeClass('active').css('z-index',-10);
      imagenAnterior.addClass('active').css('z-index',10);
    }
  });
});
