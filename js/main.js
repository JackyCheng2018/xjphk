$(function(){
	/* 选择出发地 */
	$(".departure_content_first_choose").click(function(){
		$(".departure_content_second").show();
		$(this).addClass("departure_content_first_choose2")
	});
	$(".departure_content_second li a").click(function(){
		$(".departure_content_second").hide();
		$(".departure_content_first_choose").removeClass("departure_content_first_choose2");
		$(".departure_content_first_choose").html($(this).html());
	})
})