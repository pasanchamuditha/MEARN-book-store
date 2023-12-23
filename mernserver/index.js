const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
//cores kiyanne different domain walata acess krnwnm dana word ekek


//middleware
app.use(cors());
app.use(express.json());
//this will connect with the front end

//rl36hqJprS8jOdg5
//mongo db password got book-store

//mongo db configuratuins
//objectID work as primary key in the database
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://book-store:rl36hqJprS8jOdg5@cluster0.i8svd25.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

//create collection for the data base
//book collection is data base name
const bookscollections = client.db("BookInventory").collection("books");







//insert book to this data base using post method
//Database Interaction: const result = awaibookscollections.insertOne(data);It seems like this code is interacting with a database.
// It uses bookscollections (presumably a collection in a database) to insert a new document (data) into the collection using the insertOne method. 
//This could be MongoDB with insertOne being a method to insert a single document into the collection.
/*After inserting the data into the bookscollections collection, 
  the response sent back to the requester (res.send(result)) will be the result of the database operation. 
  This could include information about the success of the insertion, an ID for the newly inserted document, 
  or any error information encountered during the process, depending on the database driver or framework being used. */

//insert book to this data base using post method  
app.post("/upload-book",async(req,res)=>{
  const data = req.body;
  const result = await bookscollections.insertOne(data);
  res.send(result);
})

//if we use My SQL insted of mongo db this is the code
//
/*const mysql = require('mysql');

// Creating a MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'your-mysql-host', // Replace with your MySQL host
  user: 'your-mysql-username', // Replace with your MySQL username
  password: 'your-mysql-password', // Replace with your MySQL password
  database: 'your-database-name' // Replace with your MySQL database name
});

// Handling POST request to "/upload-book" endpoint
app.post("/upload-book", async (req, res) => {
  const data = req.body; // Getting data from the request body

  // Obtaining a connection from the pool
  pool.getConnection((err, connection) => {
    if (err) {
      // Sending a 500 status with an error message if there's a connection error
      res.status(500).json({ error: 'Error connecting to database' });
      return;
    }

    // Inserting data into the 'books' table using a query
    connection.query('INSERT INTO books SET ?', data, (error, results) => {
      connection.release(); // Releasing the connection after the query is executed

      if (error) {
        // Sending a 500 status with an error message if there's an insertion error
        res.status(500).json({ error: 'Error inserting data into database' });
        return;
      }

      // Sending a success status with a success message and insertion result
      res.status(200).json({ message: 'Book inserted successfully', result: results });
    });
  });
});
*/ 






/*const result = await books.toArray();: Here, toArray() is called on the result obtained from the find() method. 
This method converts the query result (which might be a cursor or a promise) into an array containing the actual data/documents
retrieved from the database. The await keyword is used here to wait for this conversion to finish before proceeding.
res.send(result);: Finally, the retrieved data, now in the form of an array (stored in the result variable),
is sent as the response to the client using res.send().
Using toArray() in this context allows you to convert the results of the MongoDB query into a format that's easier to work with in JavaScript, 
as an array of objects or documents. This array can then be manipulated, iterated through, or sent as a response to an HTTP request. */

//meaning of the toarry() function 
//Using an array in this context is a common way to handle multiple results retrieved from a database or any data source.
//When working with databases like MongoDB, querying often returns multiple documents or records that match the specified criteria.

//get books from the data base using get method
app.get("/all-books",async(req,res)=>{
  const books = bookscollections.find();
  const result = await books.toArray();
  res.send(result);
})







// update a book to data base use patch or update method 
// patch means only a part will be update 
app.patch("/book/:id",async(req,res)=>{

//Retrieves the book ID from the request parameters (:id) provided in the URL
  const id = req.params.id;

//Retrieves the data to update the book from the request body. 
//In a PATCH request, this body contains the fields that need to be updated for the book identified by the given ID
  const updatebookdata = req.body;

//Creates a filter to specify which book to update based on its unique _id field. 
//It's assumed that this route uses MongoDB (indicated by the use of ObjectId) and targets the _id field of the documents in the bookscollections.
  const filter = { _id: new ObjectId (id) };

//Specifies additional options for the update operation. 
//In this case, upsert: true indicates that if no matching document is found based on the provided filter, 
//a new document should be created (upserted).
  const options = { upsert: true };

 // Constructs an update operation using the $set operator in MongoDB. 
 //This operator ensures that only the specified fields in updatebookdata are updated without overwriting the entire document.
  const updateDoc = {$set:{...updatebookdata}}


//update
//Executes the update operation using updateOne() from the bookscollections collection.
// It finds a single document that matches the filter and applies the specified updates
const result = await bookscollections.updateOne(filter, updateDoc,options);
res.send(result);
})

/*filter: This parameter specifies the selection criteria for the document to be updated. 
It defines which document(s) in the collection should be modified based on certain conditions.
In the provided code snippet, filter is constructed using _id to target a specific document by its unique identifier.
updateDoc: This parameter represents the modifications or changes to be applied to the matched document(s) that satisfy the filter condition.
In the code, it's constructed using the $set operator, 
which instructs MongoDB to update the document with the specified fields without replacing the entire document. 
The spread operator {...updatebookdata} likely contains the fields and their updated values received from the request body.
options: The options parameter provides additional settings for the update operation. 
In the given code, { upsert: true } is used. This option, upsert, specifies that if no document matches the filter, a new document should be inserted (an "upsert" operation).
It ensures that if the document specified by the filter doesn't exist, MongoDB creates a new document based on the filter and update document (updateDoc) */




//delete book data

app.delete("/book/:id",async(req,res)=>{
  const id = req.params.id;
  const filter = { _id: new ObjectId (id) };
  const result = await bookscollections.deleteOne(filter);
  res.send(result);
})







//search book by the catogory name

app.get("/all-books", async(req,res)=>
{
let query ={};

if(req.query?.category)
{
query = { category :  req.query.category }
}
 
  const result = await bookscollections.find(query).toArray();
  res.send(result);
  
})










//Get single book data by Id to front end //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


app.get("/book/:id",async(req,res)=>{
  const id = req.params.id;
  const filter = { _id: new ObjectId (id) };
  const result = await bookscollections.findOne(filter);
  res.send(result);
})













//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





















    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);




app.get('/', (req, res) => {
  res.send('Hellooooooo World!')
})



/*app.listen(port, () => { console.log(Example app listening on port ${port}) }):

This code instructs the Express.js app to start listening on a specific port.
app.listen() is a method that starts the Express.js server.
port is a variable that holds the port number on which the server will listen for incoming requests. It is typically predefined in the code.
The callback function ( ) => { console.log(Example app listening on port ${port}) } is executed once the server starts successfully.
Inside this callback function:
It logs a message to the console indicating that the server has started and is listening on the specified port. */

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


