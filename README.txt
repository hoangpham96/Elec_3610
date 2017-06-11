How to start the project:

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