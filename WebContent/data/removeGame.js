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
//	   		$.post("/Elec_3610/remove", {type:gameToRemove, uid:user}, function(data){
//	   			
//	   		});
	   	}
	})
	
	//Remove all games in game list.
	$("#removeAll").click(function(){
	   	var agree = confirm("This will remove ALL games from your game list.\nDo you wish to continue ?");
	   	if(agree){
//	   		$.post("/Elec_3610/remove", {type:"all", uid:user}, function(data){
//	   			
//	   		});
	   	}
	})
});
