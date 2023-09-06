$(document).ready(function() {


	$(window).scroll(function () {
		if ($(window).width() > 768){
			if ($(this).scrollTop() > 125) {
           		 $('.navbar').addClass("navbar-stick");
	        } else {
	            $('.navbar').removeClass("navbar-stick");
	        }	
		}
    });


	if($(".typing").length>0) { 
		$('.typing').typeIt({

		     speed: 100,
		     autoStart: true,
		     loop: true,
		     breakLines: false
		});
	}
	

	if($("[data-fancybox]").length>0) {  
		$("[data-fancybox]").fancybox();
	}
	



	$('a.page-scroll').click(function(event) {
		var $anchor = $(this);
        $('html, body').stop().animate({ scrollTop: $($anchor.attr('href')).offset().top - 50  }, 1500);
        event.preventDefault();
    });

	$('body').scrollspy({ 
        target: '.navbar',
        offset: 80
    });

	$('.navbar-collapse ul li a.page-scroll').click(function() {
	    $('.navbar-toggle:visible').click();
	});



	if($("[data-toggle='tooltip']").length>0){  
		$("[data-toggle='tooltip']").tooltip();
	}
	
	
	var scroll_btn = $("a[href='#top']");
	scroll_btn.hide();
		$(window).scroll(function(){
			if ($(this).scrollTop() > 500) {
				scroll_btn.fadeIn();
			} else {
				scroll_btn.fadeOut();
			}
	    });
	    scroll_btn.click(function () {
			$("html, body").animate({ scrollTop: 0 }, "slow");               
			return false;
	});
}); 

