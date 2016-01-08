/* Javascript Document */
$( document ).ready(function() { 
  $(".solar").addClass("visible");
  /*$("#sun").addClass("visible1");
  $("#oh").addClass("visible1");
  $("#oh1").addClass("visible1");
  $("#oh2").addClass("visible1");*/
  /*$(".solar").removeClass("visible");*/


/*var scrolLeft = $(window).scrollLeft();
var windw = $(window).width();//important
var documet = $(document).width();
$(window).scroll(function() {
    if($(window).scrollLeft() + windw == documet){
        console.log("right!");
        location.href="#1"; 
    }
});*/


$('#next3').hover(function(){
            $(".solar").removeClass("visible");
            $("#sun").removeClass("visible1");
            $("#oh").removeClass("visible1");
            $("#oh1").removeClass("visible1");
            $("#oh2").removeClass("visible1");
        });



$(".solar").on("scroll", function () {

  /* location.href="#abc";*/
   /* $(".oval").addClass("fixed1");
    $(".oval1").addClass("fixed1");
    $(".oval2").addClass("fixed1");*/
    /*$("#oh").addClass("fixed1");
    $("#oh1").addClass("fixed1");
    $("#oh2").addClass("fixed1");*/

   /* $("#oh").style.position = "fixed";*/
    
    });


if (screen.width <= 800) {
    $('#3').hide();
    $('#5').show();
  }else{
    $('#5').hide();
    $('#3').show();
  }


$(".content").on("scroll", function () {

        location.href="#3";
        /*alert("Started scrolling!");*/
 
        var cur = $(this).scrollLeft();
        if (cur == 0) {
            location.href="#1"; 
        } 
        else {
            var max = $(this)[0].scrollWidth - $(this).parent().width();
            if (cur == max) {
                location.href="#2";
            } else {
                /*$('#container').addClass('shadow-right shadow-left');*/
            }
        }
    });



/*$("#abc1").on("scroll", function () {

        location.href="#abc1";
 
        var cur = $(this).scrollTop();
        if (cur == 0) {
        } 
        else {
            var max = $(this)[0].scrollHeight - $(this).parent().height();
            if (cur == max) {
                location.href="#def1";
            } else {
                
            }
        }
    });*/

/*$(".content").on("scroll", function () {
        var cur = $(this).scrollRight();
        if (cur == 0) {
            location.href="#1"; 
        } 
        else {
            
        }
    });*/




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


/*
$('.img1').hover(
       function(){ $('#leftgear').addClass('img2') }
)*/

$('.img1').hover(function(){
            $(this).children('#leftgear').css("display","block");
            $(this).children('#rightgear').css("display","block");
        }, function() {
            $(this).children('#leftgear').css("display","none");
            $(this).children('#rightgear').css("display","none");
        });


  $(window).scroll(function() {
var theta = $(window).scrollTop() / 10 % Math.PI;
$('#leftgear').css({ transform: 'rotate(' + theta + 'rad)' });
$('#rightgear').css({ transform: 'rotate(-' + theta + 'rad)' });
});
  
  $('.content').mousewheel(function(event, delta) {
    event.preventDefault();

    this.scrollLeft -= (delta * 120);
    return false;
  });

  $('body').mousewheel(function(event, delta) {
    event.preventDefault();
    this.scrollTop -= (delta * 110);
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



var $w = $(window);
var $d = $('#oh');
var $d1 = $('#oh1');
var $d2 = $('#oh2');
$w.scroll(function(){
  $d.css('left',formula400())

  $d1.css('left',formula500())
  $d2.css('left',formula600())
});
function formula400(){
   var scroll = $(document).scrollTop();
     window.objX = 300*Math.cos(scroll/400);
     window.objY = 150*Math.sin(scroll/400);

     var el = $("#oh");
    var position = el.position();
    /*console.log( "left: " + position.left + ", top: " + position.top );*/

     if(position.left < -200){
      /*$('#oh').css('width', '160px').css('height','160px');*/
        var image = document.getElementById('oh');
        if (image.src.match("android")) {
            image.src = "android1.png";
        }
     }else{
      var image = document.getElementById('oh');
            image.src = "android.png";
        
     }

     if(position.top > 0){
        /*$('#oh').css('width', '160px').css('height','160px');*/
        $('#oh').css('width', '120px').css('height','120px');
     }else{
        $('#oh').css('width', '80px').css('height','80px');
        
     }

    $('.oval').css('width', '600px').css('height','300px');

    /*return $('#oh').css('background-color','red');*/  
    return $('#oh').css('transform', 'translate(' + window.objX + 'px,' + window.objY + 'px)');
  
 /* return Math.sin($w.scrollTop()/100)*300*/
}
function formula500(){
   var scroll = $(document).scrollTop();
     window.objX = 460*Math.cos(scroll/600);
     window.objY = 200*Math.sin(scroll/600);

     var e2 = $("#oh1");
    var position = e2.position();
    console.log( "left: " + position.left + ", top: " + position.top );

     if(position.left < -200){
        /*$('#oh').css('width', '160px').css('height','160px');*/
        var image = document.getElementById('oh1');
        if (image.src.match("ios1")) {
            image.src = "ios2.png";
        }
     }else{
        var image = document.getElementById('oh1');
            image.src = "ios1.png";
        
     }

     if(position.top > 0){
        /*$('#oh').css('width', '160px').css('height','160px');*/
        $('#oh1').css('width', '120px').css('height','120px');
     }else{
        $('#oh1').css('width', '80px').css('height','80px');
        
     }

     $('.oval1').css('width', '920px').css('height','400px');

    return $('#oh1').css('transform', 'translate(' + window.objX + 'px,' + window.objY + 'px)');
  
 /* return Math.sin($w.scrollTop()/100)*300*/
}
function formula600(){
   var scroll = $(document).scrollTop();
     window.objX = 580*Math.cos(scroll/800);
     window.objY = 270*Math.sin(scroll/800);

     var e3 = $("#oh2");
    var position = e3.position();
    /*console.log( "left: " + position.left + ", top: " + position.top );*/

     if(position.left < -200){
        /*$('#oh').css('width', '160px').css('height','160px');*/
        var image = document.getElementById('oh2');
        if (image.src.match("mobile")) {
            image.src = "mobile1.png";
        }
     }else{
        var image = document.getElementById('oh2');
            image.src = "mobile.png";
        
     }

     if(position.top > 0){
        /*$('#oh').css('width', '160px').css('height','160px');*/
        $('#oh2').css('width', '120px').css('height','120px');
     }else{
        $('#oh2').css('width', '80px').css('height','80px');
        
     }

     $('.oval2').css('width', '1160px').css('height','540px');

    return $('#oh2').css('transform', 'translate(' + window.objX + 'px,' + window.objY + 'px)');
  
 /* return Math.sin($w.scrollTop()/100)*300*/
}
console.log('foo');
