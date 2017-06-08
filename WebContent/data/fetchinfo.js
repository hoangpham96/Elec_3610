function removeQuotes(str){
	if (str.charAt(0) === '"' && str.charAt(str.length -1) === '"')
	{
	    return str.substr(1,str.length -2);
	}
}

$(document).ready(function(){
	var fetched = false;
	var user = getCookie("userDetail");
	var games = getCookie("gameDetail");
	var payments = getCookie("paymentDetail");
	
	if (user!=null){
		fetched = true;
	}
//	user.replace(/['"]+/g, '');
	
	user = removeQuotes(user);
	games = removeQuotes(games);
	payments = removeQuotes(payments);

	console.log(user.split("-"));
	console.log(games.split(", "));
	console.log(payments.split(", "));
	
	
	
	if (!fetched){
		$.post("/Elec_3610/fetch", {username: getCookie("username")});
	}
});