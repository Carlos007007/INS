$(document).ready(function(){
  /***** Mostrar/Ocultar menu mobil *****/
  $(".show-close-menu-m").click(function(){
    var menu=$(".navigation");
    if(menu.css("opacity")=="0"){ 
      menu.addClass("show-navigations");
      $(this).css({ "color":"#FFCA28" });
    }else{ 
      menu.removeClass("show-navigations"); 
      $(this).css({ "color":"#fff" });
    }
  });
	/***** Mostrar/ocultar mega-menu *****/
  $('.btm-mega-menu').click(function(e){
    e.preventDefault();
 		var megamenu=$(".mega-menu");
 		if(megamenu.css("opacity")=="0"){ 
 			megamenu.addClass("show-mega-menu"); 
 			$('.btm-mega-menu').css({ "color":"#FFA726" });
 		}else{ 
 			megamenu.removeClass("show-mega-menu");
 			$('.btm-mega-menu').css({ "color":"#fff" });
 		}
  });  
  /***** Abrir link en una nueva ventana *****/
  $(".open-link-newTab").click(function(e){
 		e.preventDefault();
 		var HrefLink=$(this).attr("href");
 		window.open(HrefLink,'_blank');
  });
  /***** Moverse el la pagina institucion con Scroll *****/
	$('.scroll-navigation-ins ul li').click(function(){
		var seccion=$(this).attr('data-href');
	$('body,html').animate({
	  scrollTop:$(seccion).offset().top-70
	},1000);
	return false; 
	});
  /***** boton ir arriba *****/
  $('.btn-up').click(function(){
    $('body,html').animate({scrollTop:'0px'}, 300);
  });
  /*****Mostrar y ocultar boton ir arriba *****/
  $(window).scroll(function(){
    if($(this).scrollTop() >= 500){
      $('.btn-up').fadeIn();
    }else{
      $('.btn-up').fadeOut();
    }
  });
	/***** Mapa de GoogleMaps del Instituto *****/
	var map;
	function initialize() {
	  var myLatlng = new google.maps.LatLng(13.869727, -88.628943);
	  var mapOptions = {
	    zoom: 16,
	    center: new google.maps.LatLng(13.869727, -88.628943),
	    mapTypeId: google.maps.MapTypeId.HYBRID
	  };
	  map = new google.maps.Map(document.getElementById('mapa-ins'),
	    mapOptions);
	  var marker = new google.maps.Marker({
	    position: myLatlng,
	    map: map,
	    title: 'Instituto Nacional de Sensuntepeque'
	  });
	}
	google.maps.event.addDomListener(window, 'load', initialize);


});