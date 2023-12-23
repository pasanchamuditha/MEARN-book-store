import React, { useState } from 'react'

import { Button, Checkbox, Label, Select, TextInput } from 'flowbite-react';


const UploadBook = () => {


//book catogory gravity down list //
const bookCategories =[
                        "Fiction ",
                        "Non-fiction",
                        "Mystery",
                        "Programming",
                        "Science Fiction",
                        "Horror",
                        "Classic",
                        "Fantasy",

                       ]
//book selection //

  const [selectedBookCategory,setSelectedBookCategory] = useState(bookCategories[0]);
  const handleChangeSelectedValue =(event) =>{
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }




  //handle Book submition

  const handleBookSubmit = (event) =>  {
   event.preventDefault();
   const form = event.target;

   const author = form.author.value;
   const imageURL = form.imageURL.value;
   const category = form.categoryName.value;
   const bookDescription =form.bookDescription.value;
   const bookTitle= form.bookTitle.value;
   const bookPDFUrl = form.bookPDFUrl.value;
   
   const bookobj ={author,imageURL,category,bookDescription,bookTitle,bookPDFUrl}
   console.log(bookobj)

   //send to the book details to mongo db data base
                     fetch("http://localhost:5000/upload-book",{
    method:"POST",
    headers: {
      "content-type":"application/json",
    },
    body: JSON.stringify(bookobj)
    }).then(res =>res.json()).then( data =>{
    alert("Book uploaded sucessfully!!")
    form.reset();
    })

  }

/*{author,imageURL,category,bookDescription,bookTitle,bookPDFUrl} */
  
  return (
    <div className='px-4 my-12'>
         <h2 className='mb-8 text-3xl font-bold'>
           Upload A book
         </h2>

          {/*form start from here */}

         < form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4 ">
         

          {/* {first Row //////////////////////////////////////////////////////////////////}{Author name} */}
    <div className='flex gap-8'>
    <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label 
          htmlFor="author" 
          value="Author name" 
          />
        </div>

        <TextInput 
        id="author" 
        name='author'
        type="text" 
        placeholder="Author name" 
        required
         />
      </div>




              {/* {Image URL} */}

      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label 
          htmlFor="imageURL" 
          value="Book image URL" 
          />
        </div>

        <TextInput 
        id="imageURL" 
        name='imageURLr'
        type="text" 
        placeholder="Book image URL" 
        required
         />
      </div>



    </div>


       {/*{Second Row////////////////////////////////////////////////}*/}       
       {/* { --(catogory) 2nd row first element}-- */}
       <div className='flex gap-8'>
      
    <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label 
          htmlFor="inputState" 
          value="Book category" 
          />
        </div>
       
         <Select id='inputState' name='categoryName'className='w-full rounded' value={selectedBookCategory}
         onChange={handleChangeSelectedValue}>
          {
              bookCategories.map((option) => <option key={option} value={option}>{option}</option>)

          }

         </Select>
      </div>


              {/* {Book dicription} */}

      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label 
          htmlFor="bookDescription" 
          value="Book Description" 
          />
        </div>

        <TextInput 
        id="bookDescription" 
        name='bookDescription'
        type="text" 
        placeholder="Book Description" 
        required
         />
      </div>

    </div>
   
          {/*Third row ///////////////////////////////////////////////////////////////////////////////////////// */}
          {/*Book Title */}
          <div className='flex gap-8'>
    <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label 
          htmlFor="bookTitle" 
          value="Book Title" 
          />
        </div>

        <TextInput 
        id="bookTitle" 
        name='bookTitle'
        type="text" 
        placeholder="Book Title" 
        required
         />
      </div>




              {/* {PDF URL} */}

      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label 
          htmlFor="bookPDFUrl" 
          value="Book PDF URL" 
          />
        </div>

        <TextInput 
        id="bookPDFUrl" 
        name='bookPDFUrl'
        type="text" 
        placeholder="Book PDF URL" 
        required
         />
      </div>

      

    </div>


    <Button type="submit" className='mt-5'>Upload Book</Button>

    </form>
    </div>
  )
}

export default UploadBook












//<Label> component or function that generates a label for an input field. 
//It has htmlFor attribute specifying the corresponding input's ID and a value attribute representing the label text.
//<TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book name" required />: This seems to be a custom <TextInput> component
// or function generating an input field for entering the book title. It has attributes like id, name, type (set to "text"), placeholder (displayed when no input is provided),
// and required (indicating the field is mandatory)



/*unctional Component - UploadBook:

javascript
Copy code
const UploadBook = () => {
    // ... code
}
This is a functional component named UploadBook. It seems to handle the UI for uploading a book and includes a dropdown menu for selecting the book category.

State and Initialization:

javascript
Copy code
const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);
This line initializes a state variable selectedBookCategory using the useState hook. It defaults to the first element in the bookCategories array.

Handling Dropdown Changes:

javascript
Copy code
const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
}
This function handleChangeSelectedValue is triggered every time the dropdown selection changes. It logs the selected value to the console and updates the selectedBookCategory state with the new value.

Rendering Dropdown and Labels:

javascript
Copy code
<div className='flex gap-8'>
    <div className='lg:w-1/2'>
        <div className="mb-2 block">
            <Label 
                htmlFor="inputState" 
                value="Book category" 
            />
        </div>
   
        <Select 
            id='inputState' 
            name='categoryName'
            className='w-full rounded' 
            value={selectedBookCategory}
            onChange={handleChangeSelectedValue}
        >
            {
                bookCategories.map((option) => 
                    <option key={option} value={option}>
                        {option}
                    </option>
                )
            }
        </Select>
    </div>
</div>
This section renders the dropdown menu using the Select component. 
It maps through the bookCategories array to create option elements within the Select component, populating the dropdown list with each book category. 
The value of each option is set to the category name, and the onChange event triggers the handleChangeSelectedValue function when a new option is selected.

The dropdown menu, therefore, displays a list of book categories and allows the user to select one. When a selection is made, 
it updates the selectedBookCategory state to the chosen value */



/*----------------------------------------------------------- how does front end communicate with back end----------------------------




 
   //send to the book details to mongo db data base
   //This code is a part of the React front end. It creates an object bookobj containing details of a book extracted from a form.
   //Then it uses the fetch API to make a POST request to http://localhost:5000/upload-book, sending the bookobj as JSON in the request body.
   // Once the request is successful, it alerts the user that the book has been uploaded
-------------------------------front end------------------------------------------------------------------------------------------------
                     fetch("http://localhost:5000/upload-book",{
    method:"POST",
    headers: {
      "content-type":"application/json",
    },
    body: JSON.stringify(bookobj)
    }).then(res =>res.json()).then( data =>{
    alert("Book uploaded sucessfully!!")
    })

  }
----------------------------------backend-------------------------------------------------------
   app.post("/upload-book", async (req, res) => {
  const data = req.body;
  const result = await bookscollections.insertOne(data);
  res.send(result);
});
This code is the backend part, presumably using Node.js with Express. It listens for POST requests at the route /upload-book. When it receives a request, it extracts the data from the request body (req.body), assuming it's in JSON format. Then it inserts this data into a MongoDB collection (bookscollections.insertOne(data)).

//Communication Flow:
//The React front end collects book details from a form and sends a POST request to http://localhost:5000/upload-book containing these details as JSON.
//The Node.js/Express backend, listening at /upload-book, receives this request.
// It extracts the data from the request body.
//It then uses MongoDB to insert this data into a collection (presumably named bookscollections).
//After the data is successfully inserted, the backend sends a response back to the front end.
//The front end, upon receiving the response, triggers an alert indicating that the book has been uploaded successfully.
//In summary, the front end and back end communicate through HTTP requests. The front end sends book details via a POST request to a specific route in the backend. The backend receives this request, processes the data, interacts with a database (MongoDB in this case), and sends a response back to the front end to confirm the operation's success.




------------------------------------------------------------------onSubmit ----------------------------------------------------------------



< form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4 ">

<Button type="submit" className='mt-5'>Upload Book</Button>



//Yes, that's correct! The onSubmit attribute in the form component is specifying what function to call when the form is submitted. In this case, handleBookSubmit is the function that's called when the form is submitted.
//And yes, the submit action can be triggered from a button inside the form. The type="submit" attribute in the Button component indicates that this button is of type "submit," meaning when clicked, it triggers the form submission.
//Here's how it works:
//The user fills out the form fields with book details.
//Upon clicking the "Upload Book" button (which is a submit type button inside the form), the onSubmit event is triggered on the form.
//The handleBookSubmit function is then executed due to the onSubmit={handleBookSubmit} attribute in the form component.
//Inside handleBookSubmit, the form data is collected and processed, and then the fetch API is used to send a POST request to the specified endpoint, containing the book details.
//So, yes, the onSubmit part of the form is directly connected to the button of type "submit," and clicking that button triggers the submission of the form, causing the handleBookSubmit function to be called.
------------------------------------------------------Why onSubmit "S" is upper case---------------------------------------------------------------

//n HTML, attributes are case-insensitive. Whether you use onsubmit, onSubmit, or even OnSuBmIt, it'll be recognized as the onsubmit event attribute.
//In React, it's common to use camelCase for event handler props, which follows JavaScript conventions. For example, onChange, onClick, etc.
//However, in JSX, event names (like onSubmit) are specified using camelCase, just like regular JavaScript, but they map to their lowercase equivalents in HTML.
//So, while onSubmit in JSX looks like camelCase, it will ultimately render as onsubmit in the resulting HTML. Both onSubmit and onsubmit are valid and equivalent in terms of handling the form submission event


--------------------------------------------------explain this part--------------------------------------------------------------------------------- 

  const handleBookSubmit = (event) =>  {
   event.preventDefault();
   const form = event.target;

   const author = form.author.value;

event.preventDefault();
//This line prevents the default behavior of the form submission. By default, when a form is submitted, the browser refreshes the page or performs a full-page load.
//Calling preventDefault() prevents this default action.

//const form = event.target;
//event.target refers to the element that triggered the event, in this case, the form element.
//This line assigns the form element to the variable form, allowing access to its properties and values.
//Extracting Form Field Values:
//The subsequent lines extract specific values from various form fields using form.fieldName.value.
//For example:
//form.author.value retrieves the value entered in the author field.
//form.imageURL.value retrieves the value entered in the imageURL field.
//Similarly, values for other fields like category, bookDescription, bookTitle, and bookPDFUrl are obtained.
//Creating bookobj:
//These extracted values are used to construct a JavaScript object called bookobj.
//Each field from the form (author, imageURL, category, bookDescription, bookTitle, and bookPDFUrl) is assigned as a property of this object.
//The purpose of this function is to handle the form submission event. It prevents the default form submission behavior to avoid a page refresh, gathers data entered by the user in the form fields, and constructs an object (bookobj) containing this data. This object can then be used for further processing, such as sending it to a server for storage or displaying it to the user for confirmation.

--------------------------------event element----------------------------------------------------------------------------------------------------------------------------------
event.preventDefault();

This line prevents the default behavior of the form submission. By default, when a form is submitted, the browser refreshes the page or performs a full-page load. Calling preventDefault() prevents this default action.
const form = event.target;

event.target refers to the element that triggered the event, in this case, the form element.
This line assigns the form element to the variable form, allowing access to its properties and values.
Extracting Form Field Values:

The subsequent lines extract specific values from various form fields using form.fieldName.value.
For example:
form.author.value retrieves the value entered in the author field.
form.imageURL.value retrieves the value entered in the imageURL field.
Similarly, values for other fields like category, bookDescription, bookTitle, and bookPDFUrl are obtained.
Creating bookobj:

These extracted values are used to construct a JavaScript object called bookobj.
Each field from the form (author, imageURL, category, bookDescription, bookTitle, and bookPDFUrl) is assigned as a property of this object.
The purpose of this function is to handle the form submission event. 
It prevents the default form submission behavior to avoid a page refresh, gathers data entered by the user in the form fields, and constructs an object (bookobj) containing this data. This object can then be used for further processing, such as sending it to a server for storage or displaying it to the user for confirmation.

User
is this (event ) is a parameter of the const handlebooksubmit function? or what is it
ChatGPT
Yes, event is indeed a parameter of the handleBookSubmit function.
 In JavaScript, when you define a function that's intended to handle events (such as a form submission), you can specify a parameter that represents the event object.

In this case:

javascript
Copy code
const handleBookSubmit = (event) => {
  // Function body handling the event
}
Here, event is the parameter that will hold the event object passed by the system when the event (in this case, the form submission) occurs. 
This object contains information about the event, like the element that triggered it, the type of event, and other related data.
Within the function body, this event object is then utilized to interact with the event, access its properties, prevent default behavior,
 and perform other actions based on the event's occurrence.
User
does event include = form datas such as author details  
ChatGPT
Yes, the event object in a form submission typically does not directly contain the form data such as author, imageURL, etc. 
Instead, it holds information related to the event itself, such as which element triggered the event, the type of event, and the context in which the event occurred.
To access form data in a form submission event handler, you usually reference the form element itself and then access individual form inputs within it to retrieve their values.

For example:

javascript
Copy code
const handleBookSubmit = (event) => {
  event.preventDefault(); // Prevents the default form submission behavior

  const form = event.target; // Accessing the form element

  // Accessing individual form input values
  const author = form.author.value;
  const imageURL = form.imageURL.value;
  // ... other form input values
}
In this case, the event.target refers to the form element that triggered the submission event. 
You then access the individual form fields (like form.author, form.imageURL, etc.) to retrieve their values by using .value.
User
which element triggered the event, which elemnt triggered the event
ChatGPT
In the context of a form submission, the element that triggers the event is typically the <form> element itself.
When a user submits a form by pressing a submit button inside that form, the form element is triggered, causing a form submission event.
 The form submission can also be triggered programmatically using JavaScript.
For example:

html
Copy code
<form onSubmit={handleBookSubmit}>
  <!-- Form inputs -->
  <input type="text" name="author" />
  <input type="text" name="imageURL" />
  <!-- Other form fields -->
  
  <!-- Submit button -->
  <button type="submit">Submit</button>
</form>
In this case, when the user clicks the submit button within the <form> element, the handleBookSubmit function is triggered due to the onSubmit event attached to the form. 
The <form> element itself is what triggers the form submission event.













*/