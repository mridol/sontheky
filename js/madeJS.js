jQuery(document).ready(function($) {
	$(function(){
		var width = $(window).width(), height = $(window).height();
		if (width <= 800) {
			$('.nav').addClass('nav-small-screen').removeClass('nav');
			$('.nav-small-screen').hide();
			$('.button-black').addClass('button-alice').removeClass('button-black');
			$('.hvr-underline-from-center-black').addClass('hvr-underline-from-center-alice').removeClass('hvr-underline-from-center-black')

		    $('.menu-toggle').on('click', function(){
		        if($('.nav-small-screen').is(':visible')) {
		            $('.nav-small-screen').animate({ 'width': '0px' }, 'slow', function(){    
						$('.menu-icon-close').addClass('menu-icon').removeClass('menu-icon-close');
						$('.menu-icon').removeClass('fa-times').addClass('fa-bars');
						$('.menu-icon').animate({ 'margin-left': '20px' }, 'slow');
						$('.nav-small-screen').hide();
		            });
		            $('#main-content').animate({ 'margin-left': '0px' }, 'slow');
		        }
		        else {
		            $('.nav-small-screen').show();
		            $('.menu-icon').removeClass('fa-bars').addClass('fa-times');
		            $('.menu-icon').addClass('menu-icon-close').removeClass('menu-icon');
		            if (width > 480){
		            	$('.nav-small-screen').animate({ 'width': '240px' }, 'slow');
		            	$('.menu-icon-close').animate({ 'margin-left': '240px' }, 'slow');
		            	$('.wrapper-section').animate({ 'margin-left': '240px' }, 'slow');
		            }
		            else{
		            	$('.nav-small-screen').animate({ 'width': '120px' }, 'slow');
			            $('.menu-icon-close').animate({ 'margin-left': '120px' }, 'slow');
			            $('.wrapper-section').animate({ 'margin-left': '120px' }, 'slow');
		            }	            
		        }
		    });
		} 
		else {
			$('.nav-small-screen').addClass('nav').removeClass('nav-small-screen');
			$('.button-alice').addClass('button-black').removeClass('button-alice');
			$('.hvr-underline-from-center-alice').addClass('hvr-underline-from-center-black').removeClass('hvr-underline-from-center-alice');		
		};

		if(width >=980){
			var nav = $('.nav'), brand = $('.brand');
    		$(window).scroll(function(){
    			if($(this).scrollTop() > 100){
    				nav.addClass('menuScroll slideInDown ani');
    				brand.addClass('menuScroll slideInDown ani');
    			}
    			else if($(this).scrollTop() <= 100){
    				brand.removeClass('menuScroll slideInDown ani');
    				nav.removeClass('menuScroll slideInDown ani');
    			};
   			});
		};
	});
});