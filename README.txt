I. How to start the project:

	1. Create new database 'elec3610' in MySQL
	2. Type "use elec3610" in MySQL
	3. Find the path for the project's init sql file included in this project
		Ex: F:\Users\Hoang\Desktop\Elec_3610\init.sql
	4. Type "source #" where # should be replaced by the path
		Ex: source F:\Users\Hoang\Desktop\Elec_3610\init.sql
		The tables and example data will be created
	5. Start Eclipse. Configure the TomCat server similar to the steps in Tutorial 8.
	6. Create a new dynamic project named exactly "Elec_3610"
	7. Replace the content of the newly created folder with this project.
		To be sure, right click on "Elec_3610" folder in Eclipse and click on refresh.
	8. Right click on TomCat server, click on "Add and Remove" then add this project to the server.
	9. Start the server.
	10. Go to "localhost:8080/Elec_3610/main_page.html" and start using the project.

	Login using username and password combinations (test, test) or (gmike, 1234) for example data.


II. How to register an account:
	1. Click on the "Register" link on top
	2. Fill out the form to register
	All the fields marked with * are required


III. How to edit personal information:
	1. Fill at least one of the boxes under the "Edit Account Information" section in the user account page
	2. Click on "Edit" button to the side
	3. Alert will pop up saying whether or not operation is successful or not.

	If password is changed, user have to log in again.


IV. How to save a game to the user's game list: 
	1. Click on a game image or the detail button under it to reach the game info page.
	2. After the game info page finishes loading, click save button.
	3. Alert will pop up saying whether or not operation is successful or not.  
	   User is automatically redirected to their user page. 
	4. Click on the image of one of the game in the game list to visit the game info page.
	or Click on the remove button under the game to remove the game from game list.
	or Click on the "Remove All" button to remove all games from game list.


V. How to change payment option:
	1. Click the update button under the payment information section in user account page.
	   There will be an overlay show up showing all of user’s payment option.
	2. Click “+” or the text next to it in the overlay to add payment option. 
	or Click "Edit" next to one of the existing payment option to edit it.
	or Click "Remove" next to one of the existing payment option to remove it.