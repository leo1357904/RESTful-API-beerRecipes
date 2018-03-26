# RESTful-API-beerRecipes

	~~~RESTful API for [Beer Recipes] is an API programmed with Node.js + Express + Nodemon + MongoDB + Mongoose.
       It can be used easily by requesting with HTTP protocol to perform four operations termed as CRUD.
       Let's follow this guide to see how to use this strong appication.~~~

Setup Instruction:

 1. Install Node.js. Install MongoDB.
 2. Make "data\mydb" directory under "D:\mongoDB" -> "D:\MongoDB\data\mydb"
 3. Enter the where you install your MongoDB "D:\MongoDB\Server\3.6\bin"
 4. Import the beer recipes CSV file "mongoimport --db mydb --collection beerRecipes --file recipeData.csv"
 5. Create a directory which you want to put in the api. -> "D:\restfulApi"
 6. Under that directory, command as "npm init". This will make you a file "package.json".Replace it with mine.
 7. Command as "npm install --save-dev nodemon", "npm install express --save", and "npm install mongoose --save".
 8. Copy my "api" directory under your directory. ->"D:\restfulApi\api"
 9. command under api directory "D:\restfulApi> npm run start" to run the server
10. Use "Postman" to test HTTP requests "GET http://localhost:3000/beerRecipes"




API Usage Instruction:
	
	~~~First of all, let's take a look at the Beer Recipes Database.~~~
	
	Attributes in BeerRecipes Database:
	{
		BeerID: Number,
		Name: String,
        	URL: String,
        	Style: String,
        	StyleID: Number,
        	Size(L): Number,
        	OG: Number,
        	FG: Number,
        	ABV: Number,
        	IBU: Number,
        	Color: Number,
        	BoilSize: Number,
        	BoilTime: Number,
       	BoilGravity: Number,
        	Efficiency: Number,
        	MashThickness: Number,
        	SugarScale: String,
        	BrewMethod: String,
        	PitchRate: Number,
        	PrimaryTemp: Number,
        	PrimingMethod: String,
        	PrimingAmount: String
	}
	
	~~~After realizing the database, it's time to see how to use this API to satisfy our needs.
	   We have all our operations below.~~~
	   
	Read BeerID:n Beer Recipe        GET    http://localhost:3000/beerRecipes/n  (n:integer)
	Create a new Beer Recipe         POST   http://localhost:3000/beerRecipes    (use POST body to determine the value of each attribute.)
	Update BeerID:n Beer Recipe      PUT    http://localhost:3000/beerRecipes/n  (use PUT body to determine the value of each attribute.)
	Delete BeerID:n Beer Recipe      DELETE http://localhost:3000/beerRecipes/n
	
	List all the Beer Recipes        GET    http://localhost:3000/beerRecipes
	
	List Beer Recipes with FILTER!   
	Filters:					                            (use '&' to conect every filter you're using.) 
	{		                 GET    http://localhost:3000/beerRecipes?  (e.g. ./beerRecipes?BeerID[$gte]=5&Style=6&limit=10)
		
            BeerID  [$gte][$lte]        BeerID=n || BeerID[$lte]=m&BeerID[$gte]=n 
                    (search by BeerID, n:integer)  (search by a range of BeerID, m>=BeerID>=n, m,n:integer)
		Name		            Name=Vanilla Cream Ale || Name=Vanil   
                       (search by specific Name, actual "Name")  (search by Name LIKE Vanil)
		Style                       Style=Cream Ale || Name=Crea     
	     (search by specific Style, actual "Style_Name")  (search by Name LIKE Crea)
		
		StyleID                     StyleID=n    (search by specific StyleID, n:integer)
	
		Color   [$gte][$lte] 	    Color=n  || Color[$lte]=m&Color[$gte]=n   
	                   (search by Color, n:float)  (search by a range of Color, m>=BeerID>=n, m,n:float)                     
		orderBy			    orderBy="-BeerID" (sort by BeerID(Attribute), +:asc -:desc)
		
		skip			    skip=n (skip n Recipes, n:integer)
		
		limit			    limit=n (limit only n recipes to be responsed, n:integer)
		
		field                       field=BeerID+Style+StyleID.... (Attributes to be responsed. use '+' to connect Attributes)
	}
	
	
* How did you decide which technologies to use as part of your solution?

	I used Node.js and MongoDB to implement this RESTful API and used Express, Nodemon, and Mongoose to support developing and 		combining server and database. I googled "RESTful API" and found out Node.js is a good way to develop RESTful API fast. Then 		according to the article I found, it is recommended to use MongoDB connect the server and use Express, Nodemon, and Mongoose to 	support them. So I decided to use these techniques to complete my challenge.

* Are there any improvement you could make to your submission?

	I only created the fuction of the API. Therfore, I would like to add more Express middleware to return more details to the user. 	 Also, I would like to improve the function by making them smarter. For example, users and determine values of Style ans StyleID 	 in the POST fuction. However, it should be that when a StyleID is given, the Style name should be determined automatically, 		since there's a collection for StyleID and Style.

* What would you do differently if you were allocated more time?

	I'm trying to test my API on AWS Linux AMI instance, but I don't have time to complete this test. Also, I hadn't used Git to do 	the version control while I was developing the API. If I was allocated more time, I would learn to use Git to help me and learn 	how to operate AWS instance fluently to complete my test.





