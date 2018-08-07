$(document).ready(function(){

  $(".nj-link").click(function(){

        var h=$($(this).attr("href")).offset().top;
        $("body,html").animate({scrollTop:h},1000)
    });

    
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
	
})