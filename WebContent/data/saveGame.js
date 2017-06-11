$(document).ready(function(){
   $("#u3482").click(function(){
		var gameID = getUrlParameter('gID');
   		var userID = getCookie("uID");
		$.post("/Elec_3610/saveGame", {gID: gameID, uID: userID}, function( data ) {
				deleteCookie("gameDetail");
			  $("body").html(data);
		});
   });
});