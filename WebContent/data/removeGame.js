/**Remove game from game list
 * 
 */
$(document).ready(function(){
	//Remove game from game list
	$(".removeButton").click(function(){
		var gameToRemove = $(this).attr('id').split('-')[1];
		var gameName = "";
	   	var agree = confirm("This will remove "+gameName+" from your game list.\nDo you wish to continue ?");
	   	if(agree){
//	   		$.post("/Elec_3610/remove", {type:gameToRemove}, function(data){
//	   			
//	   		});
	   	}
	})
	
	//Remove all games in game list.
	$("#removeAll").click(function(){
	   	var agree = confirm("This will remove ALL games from your game list.\nDo you wish to continue ?");
	   	if(agree){
//	   		$.post("/Elec_3610/remove", {type:"all"}, function(data){
//	   			
//	   		});
	   	}
	})
});
