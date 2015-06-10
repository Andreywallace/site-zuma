



// Menu Scroolling
$(document).ready(function () {

    var menu = $('.menu');
    var origOffsetY = menu.offset().top;

    function scroll() {
        
        if ($(window).scrollTop() >= (origOffsetY)) {
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



// Vídeo de background
$(document).ready(function () {

    $(".player").mb_YTPlayer();

});


// Remover linhas da sessão de o que fazemos
$(document).ready(function () {

  if($(window).width() >= 3140) {
    
       $('div').removeClass('line');
  }
});






