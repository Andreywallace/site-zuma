




var num = 50; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() >= $(window).height()-100) {
        $('.menu').addClass('fixed');
        $('#sobre').addClass('margin-top-fluid');
         if($(window).width() >= 768) {
                $('.opcao-menu').css({"padding":"15px 20px 15px 20px"}); 
                $('.opcao-menu').css({"font-size":"16px"}); 
            }
             $('.opcao-menu-brand').css({"padding":"0px 20px 0px 20px"});
        
    } else {
        $('.menu').removeClass('fixed');
         if($(window).width() >= 768) {
                $('.opcao-menu').css({"padding":"40px 20px 40px 20px"});
                $('.opcao-menu').css({"font-size":"20px"});
                $('.opcao-menu-brand').css({"padding":"25px 20px 25px 20px"});
            }
            
    }
});


$(function () {
    $('#sobre, #fazemo, #trabalhos').css({
        'min-height': $(window).innerHeight()+100
    });

    $(window).resize(function () {
        $('#sobre, #fazemo, #trabalhos').css({
            'min-height': $(window).innerHeight()+100
        });
    });
});


/*
// Menu Scroolling
$(document).ready(function () {

    var menu = $('.menu');
    var origOffsetY = menu.offset().top;

 function scroll() {
        
        if ($(window).scrollTop() >= ($(window).height())) {
            $('.menu').addClass('sticky');
            $('#sobre').addClass('margin-top-fluid');
            $('.content').addClass('menu-padding');
            if($(window).width() >= 768) {
                $('.opcao-menu').css({"padding":"15px 20px 15px 20px"}); 
                $('.opcao-menu').css({"font-size":"16px"}); 
            }
             $('.opcao-menu-brand').css({"padding":"0px 20px 0px 20px"});
                
        } else {
            $('.menu').removeClass('sticky');
            $('#sobre').removeClass('margin-top-fluid');
            $('.content').removeClass('menu-padding');
            if($(window).width() >= 768) {
                $('.opcao-menu').css({"padding":"40px 20px 40px 20px"});
                $('.opcao-menu').css({"font-size":"20px"});
                $('.opcao-menu-brand').css({"padding":"25px 20px 25px 20px"});
            }
            
        
            
        }
    }

    document.onscroll = scroll;   

});


/* smooth scrolling for nav sections */
$('#custom-bootstrap-menu a').click(function(){
    var link = $(this).attr('href');
    var posi = $(link).offset().top;
    
  $('body,html').animate({scrollTop:posi},900);
});

/* smooth scrolling for nav sections */
$('#brand ').click(function(){
    var link = $(this).attr('href');
    var posi = $(link).offset().top;
  
  $('body,html').animate({scrollTop:0},900);
});




// Remover linhas da sessão de o que fazemos
$(document).ready(function () {

  if($(window).width() >= 3140) {
    
       $('div').removeClass('line');
  }
});


// Video Background
$(function() {
	
	// IE detect
	function iedetect(v) {

	    var r = RegExp('msie' + (!isNaN(v) ? ('\\s' + v) : ''), 'i');
		return r.test(navigator.userAgent);
			
	}

	// For mobile screens, just show an image called 'poster.jpg'. Mobile
	// screens don't support autoplaying videos, or for IE.
	if(screen.width < 800 || iedetect(8) || iedetect(7) || 'ontouchstart' in window) {
	
		(adjSize = function() { // Create function called adjSize
			
			$width = $(window).width(); // Width of the screen
			$height = $(window).height(); // Height of the screen
			
			// Resize image accordingly
			$('#container').css({
				'background-image' : 'url(poster.jpg)', 
				'background-size' : 'cover', 
				'width' : $width+'px', 
				'height' : $height+'px'
			});
			
			// Hide video
			$('video').hide();
			
		})(); // Run instantly
		
		// Run on resize too
		$(window).resize(adjSize);
	}
	else {

		// Wait until the video meta data has loaded
		$('#container video').on('loadedmetadata', function() {
			
			var $width, $height, // Width and height of screen
				$vidwidth = this.videoWidth, // Width of video (actual width)
				$vidheight = this.videoHeight, // Height of video (actual height)
				$aspectRatio = $vidwidth / $vidheight; // The ratio the video's height and width are in
						
			(adjSize = function() { // Create function called adjSize
							
				$width = $(window).width() ; // Width of the screen
				$height = $(window).height() -100; // Height of the screen
							
				$boxRatio = $width / $height; // The ratio the screen is in
							
				$adjRatio = $aspectRatio / $boxRatio; // The ratio of the video divided by the screen size
							
				// Set the container to be the width and height of the screen
				$('#container').css({'width' : $width+'px', 'height' : $height+'px'}); 
							
				if($boxRatio < $aspectRatio) { // If the screen ratio is less than the aspect ratio..
					// Set the width of the video to the screen size multiplied by $adjRatio
					$vid = $('#container video').css({'width' : $width*$adjRatio+'px'}); 
				} else {
					// Else just set the video to the width of the screen/container
					$vid = $('#container video').css({'width' : $width+'px'});
				}
								 
			})(); // Run function immediately
						
			// Run function also on window resize.
			$(window).resize(adjSize);
						
		});
	}
	
});


// PARALAXX
$(document).ready(function(){
    $window = $(window);
    //Captura cada elemento section com o data-type "background"
    $('section[data-type="background"]').each(function(){
        var $scroll = $(this);   
            //Captura o evento scroll do navegador e modifica o backgroundPosition de acordo com seu deslocamento.            
            $(window).scroll(function() {
                var yPos = -($window.scrollTop() / $scroll.data('speed')); 
                var coords = '50% '+ yPos + 'px';
                $scroll.css({ backgroundPosition: coords });    
            });
   });  
});




