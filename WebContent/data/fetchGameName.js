var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

$(document).ready(function(){
	var imageID = getUrlParameter('imgID');
	var gameName = getUrlParameter('gameName');
	console.log(imageID);
	console.log(gameName)
	
	if(imageID != null){
		$("#u3596_img").replaceWith("<img id='u3596_img' class='img' src='images/games/"+imageID+".jpg'>");
	}
	if(gameName != null){
		$("#u3475").replaceWith("<div id='u3475' class='text' style='visibility: visible;'><p><span>"+gameName+"</span></p><p><span><br></span></p></div>");
	}
	
	//Fetching game name
	if(imageID != null && gameName == null){
		$.post("/Elec_3610/fetchgamename", {imgID: imageID}, function( data ) {
			  document.location.replace(data);
		});
	}
});