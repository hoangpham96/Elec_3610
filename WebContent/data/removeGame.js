/**Remove game from game list
 * 
 */
$(document).ready(function(){
	//Remove game from game list
	$(".removeButton").click(function(){
		var user = getCookie("uid");
		var gameToRemove = $(this).attr('id').split('-')[1];
		var gameName = $(this).attr('id').split('-')[2];
	   	var agree = confirm("This will remove "+gameName+" from your game list.\nDo you wish to continue ?");
	   	if(agree){
//	   		$.post("/Elec_3610/remove", {uID:user, gID:gameToRemove}, function(data){
//	   			if(data == "true"){
//	   				alert(gameName + " has been removed.");
//	   			}
//	   			else{
//	   				alert("We had some trouble deleting your game. Please try again");
//	   			}
//	   			location.reload();
//	   		});
	   	}
	})
	
	//Remove all games in game list.
	$("#removeAll").click(function(){
	   	var agree = confirm("This will remove ALL games from your game list.\nDo you wish to continue ?");
	   	if(agree){
//	   		$.post("/Elec_3610/remove", {uID:user, gID:"all"}, function(data){
//   			if(data == "true"){
//					alert(gameName + " has been removed.");
//				}
//				else{
//					alert("We had some trouble deleting your games. Please try again");
//				}
//	   		});
	   	}
	})
});
