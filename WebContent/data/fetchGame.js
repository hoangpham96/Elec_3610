$(document).ready(function(){
	var gameID = getUrlParameter('gID');
	var imageID = getUrlParameter('imgID');
	var gameName = getUrlParameter('gName');
	
	//Replace picture and title
	if(imageID != null){
		$("#u3596_img").replaceWith("<img id='u3596_img' class='img' src='images/games/"+imageID+".jpg'>");
	}
	if(gameName != null){
		$("#u3475").replaceWith("<div id='u3475' class='text' style='visibility: visible;'><p><span>"+gameName+"</span></p><p><span><br></span></p></div>");
		$("#u3449").replaceWith("<div id='u3449' class='text' style='visibility: visible;'><p><span>You're reviewing: "+gameName+"</span></p><p><span>How do you rate this product?</span></p><p><span><br></span></p></div>");
	}
	
	//Fetching if gameID is known
	if(gameID != null && (gameName == null || imageID == null) ){
		$.post("/Elec_3610/fetchGame", {gID: gameID}, function( data ) {
			  document.location.replace(data);
		});
	}
	
	//Fetching if imageID is known
	if(imageID != null && (gameName == null || gameID == null) ){
		$.post("/Elec_3610/fetchGame", {imgID: imageID}, function( data ) {
			  document.location.replace(data);
		});
	}
	
	//Fetching if gameName is known
	if(gameName != null  && (imageID == null || gameID == null) ){
		$.post("/Elec_3610/fetchGame", {gameName: gameName}, function( data ) {
			  document.location.replace(data);
		});
	}
});