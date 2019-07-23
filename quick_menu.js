$(function(){
	var $body = $("body");
    var $quick = $(".quick");
    
    // button click
	var $quick_btn = $quick.find("p > a");
    
    // quick menu
    var $quick_menu = $quick.find("ul");
    
    // mask
	var $bg_back = $(".bg_back");
    
    // quick menu status
    var quickStats = true;

	$quick_menu.slideUp();
	// $body.removeClass("on");

    $quick_btn.on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if ($quick_menu.is(':hidden')) {
            $bg_back.show();
            $quick_menu.slideUp();
        } else {
            $bg_back.hide();
            $quick_menu.slideDown();
        }
    });

    $bg_back.on('click', function(e) {
        $this = $(this);
        if (!$this.is('hidden')){
            $bg_back.hide();
            $quick_menu.slideDown();            
        }
    });

	// $quick_btn.click(function (e) {
	// 	e.preventDefault();
	// 	if (quickStats) {
	// 		$quick.addClass("on");
	// 		$quick_menu.slideDown();
	// 		$bg_back.addClass("on");
	// 		$body.addClass("on");
	// 		quickStats = false;	
		
	// 	}else {
	// 		$quick.removeClass("on");
	// 		$quick_menu.slideUp();
	// 		$bg_back.removeClass("on");
	// 		$body.removeClass("on");
	// 		quickStats = true;			
	// 	}	
	// });	

	// $(document).click(function(e) {
	// 	if($quick.hasClass("on")) { 
	// 		if(!$quick.has(e.target).length) { 				
	// 			$quick.removeClass("on");
	// 			$quick_menu.slideUp();
	// 			$bg_back.removeClass("on");
	// 			$body.removeClass("on");
	// 			quickStats = true;			
	// 		} ;
	// 	};
	// }); 
});