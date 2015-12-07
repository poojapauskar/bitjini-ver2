
/* Javascript Document */
$( document ).ready(function() { 

  /* ---------- */
 /* $( window ).ready(function() {
  
    var wHeight = $(window).height();

    $('.slide')
      .height(wHeight)
      .scrollie({
        scrollOffset : -50,
        scrollingInView : function(elem) {
                   
          var bgColor = elem.data('background');
          
          $('body').css('background-color', bgColor);
          
        }
      });

  });*/
  /* -------------- */
  
	$('.content').mousewheel(function(event, delta) {
		event.preventDefault();
		this.scrollLeft -= (delta * 30);
		return false;
	});
  

  $anchodeuna = $('.content li').width();
  $cuantas = $('.content li').length;
  $anchototal = $anchodeuna * $cuantas;
  //alert('$anchodeuna: '+ $anchodeuna + ', $anchototal: '+  $anchototal);
  $('.content ul').css('width', $anchototal);
  $anchototal_menosuna = $anchodeuna * ($cuantas - 1);
  
  var minX = -$anchototal_menosuna-100; // farthest to left it can go
  var maxX = 100; // farthest to right it can go
  var yPosition = 0; // set to your y position
  
  /*$("div.content_in").draggable({
        axis: "x",
        cursor: "move",
        containment: [minX,yPosition,maxX,yPosition]
  });

  $("div.content_y").draggable({
        axis: "y",
        cursor: "move",
        containment: [minX,yPosition,maxX,yPosition]
  });*/
  

  /*$(document ).mouseup(function() {
  
  
    $posicion = parseInt($('.content_in').css('left'));
    if ($posicion > 0 ) {
      $('.content_in').animate({left: 0});
    }
    
    if ($posicion < -$anchototal_menosuna ) {
      $('.content_in').animate({left: -$anchototal_menosuna});
    }  

  });  */
  
  
});

/*  falta un poco de easing en los limites */ 

/* ojo: al hacer drag y cambiar la propiedad left de content_in, el movimiento con la rueda del mouse queda limitado por esa propiedad.
Hay que ponerla a cero cuando se maneje la rueda? */