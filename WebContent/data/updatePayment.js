function reloadPayments(payments){
	var nPayment = payments.length;
	//Configuring the sizes
	$("#addPayment").css({"top":130+nPayment*75});
	$("#paymentOK").css({"top":130+nPayment*75+75});
	$("#centerBox").css({"height":130+nPayment*75+75+75});
	
	//Change game list
	if(nPayment > 0){
		var htmlCode = "<div id='payments'><!-- For all payments -->\n";
		
		//List payment options
		for(var i=0; i< payments.length; i++){
			var payment = payments[i].split('-');
			var cardTypeName = payment[0];
			switch(cardTypeName){
				case "AMEX":
					cardTypeName = "amex";
					break;
				case "VISA":
					cardTypeName = "visa";
					break;
				case "MAST":
					cardTypeName = "mastercard";
					break;
			}
			lastFour = payment[1].substring(payment[1].length-4,payment[1].length);

			//Adding each payment option
			var paymentPlacement = 75*i;
			var htmlDiv = "\n<div class='payment' style='top: "+paymentPlacement+"px'><!-- For one payment -->\n" +
						  "\n<div  class='ax_default icon cardType'>\n" +
						  "<img class='img cardTypeimg' src='images/cards/"+cardTypeName+".png'/>\n" +
						  "</div>\n" +
						  "\n<div class='ax_default box_3 cardName'>\n<div class='cardNamediv'>\n</div>\n" +
						  "<div class='text cardNameText'>\n<p><span>XXXX-XXXX-XXXX-"+lastFour+"</span></p>\n</div>\n" +
						  "</div>\n" +
						  "\n<div id='cardEdit-"+(i+1)+"' class='ax_default primary_button cardEdit'>\n" +
						  "<div class='cardEditdiv'></div>\n" +
						  "<div class='text cardEditText'>\n" +
						  "<p><span>EDIT</span></p>\n" +
						  "</div>\n" +
						  "</div>\n" +
						  "<div id='cardRemove-"+(i+1)+"' class='ax_default primary_button cardRemove'>\n" +
						  "<div class='cardRemovediv'></div>\n" +
						  "<div class='text cardRemoveText'>\n" +
				          "<p><span>REMOVE</span></p>\n" +
				          "</div>\n"+
				          "</div>\n"+
				          "</div>\n";
			htmlCode += htmlDiv;
		}			      
		htmlCode += "\n</div>";
		$("#payments").replaceWith(htmlCode);
	}
}

/**
 * When click on update in payment section
 */
$(document).ready(function(){
	var payments = removeQuotes(getCookie("paymentDetail")).split("_ ");
	payments.pop();

	reloadPayments(payments);
	
	
	$("#u1390").click(function(){
		//Show everything once update is clicked
		$("#bgrblur").css("visibility","visible");
		$("#paymentBox").css("visibility","visible");
		$("#boxHeader").css("visibility","visible");
		$("#addPayment").css("visibility","visible");
		$(".payment").css("visibility","visible");
		$("#paymentOK").css("visibility","visible");
		
		//When add card is clicked
		$("#addPayment").click(function(){
			$("#addPayment").css("visibility","hidden");
			$(".payment").css("visibility","hidden");
			$("#paymentOK").css("visibility","hidden");
			$("#paymentBox").css("height","320px");
			$("#addpaymentOK").css("visibility","visible");
			$("#boxHeader").css({"top": "30px", "left": "260px"});
			$("#boxHeaderText").replaceWith("<div id='boxHeaderText' class='text'><p><span>Add new card</span></p></div>");
			$("#addPaymentForm").css("visibility","visible");
			$("#addPaymentInput").css("visibility","visible");
			
			$("#addpaymentOK").click(function(){
				var cardType = $("#rf1textbox").val();
				var cardNum = $("#rf2textbox").val();
				var cardExpiry = $("#rf3textbox").val();
				var cardCCV = $("#rf4textbox").val();
				console.log(cardType);
			})
		})
		
		//When edit is clicked
		$(".cardEdit").click(function(){
			var cardToEdit = $(this).attr('id').split('-')[1];
		})
		
		//When remove is clicked
		$(".cardRemove").click(function(){
			var cardToRemove = $(this).attr('id').split('-')[1];
		})
		
		//When OK is clicked
		$("#paymentOK").click(function(){
			$("#bgrblur").css("visibility","hidden");
			$("#paymentBox").css("visibility","hidden");
			$("#boxHeader").css("visibility","hidden");
			$("#addPayment").css("visibility","hidden");
			$(".payment").css("visibility","hidden");
			$("#paymentOK").css("visibility","hidden");
		});
	});
	

})	
