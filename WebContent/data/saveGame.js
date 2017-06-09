$(document).ready(function(){
   $("#u3482").click(function(){
		var gameID = getUrlParameter('gID');
   		var userID = getCookie("uID");
		$.post("/Elec_3610/save", {gID: gameID, uID: userID}, function( data ) {
			  $("body").html(data);
		});
   });
});