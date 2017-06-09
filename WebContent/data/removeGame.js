/**Remove game from game list
 * 
 */
$(document).ready(function(){
	$("#removeAll").click(function(){
   	var agree = confirm("This will remove ALL games from your game list.\nDo you wish to continue ?");
   	console.log(agree);
	})
});
