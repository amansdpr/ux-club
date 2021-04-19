	// add this JS to assets/js/main.js file
	//  Sidebar Js for Course page
    var boxWidth = $("#collapse-sidebar").width();
    $("#hide-sidebar").click(function(){
        $("#collapse-sidebar").addClass('active').animate({
            width: 0
        }, 200);
		$('#open-sidebar').addClass('active');
    });
    $("#open-sidebar").click(function(){
		$(this).removeClass('active');
        $("#collapse-sidebar").removeClass('active').animate({
            width: boxWidth
        }, 200);
    });