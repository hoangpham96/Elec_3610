/**Remove game from game list
 * 
 */
$(document).ready(function(){
	var user = getCookie("uID");
	
	//Remove game from game list
	$(".removeButton").click(function(){
		var gameToRemove = $(this).attr('id').split('-')[1];
		var gameName = $(this).attr('id').split('-')[2];
	   	var agree = confirm("This will remove "+gameName+" from your game list.\nDo you wish to continue ?");
	   	if(agree){
	   		$.post("/Elec_3610/removeGame", {uID: user, gID: gameToRemove}, function(data){
	   			if(data.includes("true")){
	   				alert(gameName + " has been removed.");
	   				deleteCookie("userDetail");
	   			}
	   			else{
	   				alert("We had some trouble deleting your game. Please try again");
	   			}
	   			location.reload();
	   		});
	   	}
	})
	
	//Remove all games in game list.
	$("#removeAll").click(function(){
	   	var agree = confirm("This will remove ALL games from your game list.\nDo you wish to continue ?");
	   	if(agree){
	   		$.post("/Elec_3610/removeGame", {uID: user, gID: "all"}, function(data){
	   			if(data.includes("true")){
					alert("All games have been removed.");
		   			deleteCookie("gameDetail");
				}
				else{
					alert("We had some trouble deleting your games. Please try again");
				}
   				location.reload();
	   		});
	   	}
	})
});
