/**
 * When click on update in payment section
 */
$(document).ready(function(){
	$("#u1390").click(function(){
		//Show everything once update is clicked
		$("#bgrblur").css("visibility","visible");
		$("#paymentBox").css("visibility","visible");
		$("#paymentInfo").css("visibility","visible");
		$("#plusSign").css("visibility","visible");
		$("#addNew").css("visibility","visible");
		$(".cardType").css("visibility","visible");
		$(".cardName").css("visibility","visible");
		$(".cardEdit").css("visibility","visible");
		$(".cardRemove").css("visibility","visible");
		$("#paymentOK").css("visibility","visible");
	});
})	
