import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput } from 'flowbite-react';
import { useLoaderData, useParams } from 'react-router-dom';




const EditBook = () => {

const {id} = useParams ();
const {author,imageURL,category,bookDescription,bookTitle,bookPDFUrl} = useLoaderData()




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
  
    const handleUpdate = (event) =>  {
     event.preventDefault();
     const form = event.target;
  
     const author = form.author.value;
     const imageURL = form.imageURL.value;
     const category = form.categoryName.value;
     const bookDescription =form.bookDescription.value;
     const bookTitle= form.bookTitle.value;
     const bookPDFUrl = form.bookPDFUrl.value;
     
     const updatebookobj ={author,imageURL,category,bookDescription,bookTitle,bookPDFUrl}
     console.log(updatebookobj)
     

     //update books data using fetch patch method 
     fetch(`http://localhost:5000/book/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(updatebookobj)
     }).then(res => res.json()).then(data =>
     {alert("Book is Updated sucessfully !")
     // this will auto refresh the site but this is not working setAllBooks(data);
    } )
  
    }
  
  /*{author,imageURL,category,bookDescription,bookTitle,bookPDFUrl} */
    
    return (
      <div className='px-4 my-12'>
           <h2 className='mb-8 text-3xl font-bold'>
             Update The book Data
           </h2>
  
            {/*form start from here */}
  
           < form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4 ">
           
  
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
          defaultValue={author}
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
          defaultValue={imageURL}
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
          defaultValue={bookDescription}
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
          defaultValue={bookTitle}
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
          defaultValue={bookPDFUrl}
          placeholder="Book PDF URL" 
          required
           />
        </div>
  
        
  
      </div>
  
  
      <Button type="submit" className='mt-5'>Update Book</Button>
  
      </form>
      </div>
    )


 

}

export default EditBook


/*-------------------------------------------------------params----------------------------------------------------------------------------
this is in the router .jsx file  {
        path:"/admin/dashboard/edit-book/:id",
        element:<EditBook/>,
        loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
       }
        and this is in the  editbook.jsx import { useLoaderData, useParams } from 'react-router-dom';




const EditBook = () => {

const {id} = useParams ();
const {author,imageURL,category,bookDescription,bookTitle,bookPDFUrl} = useLoaderData()


ChatGPT
This code seems to be utilizing React Router for routing and data fetching. Let's break down what's happening:

Router Configuration:
The router is configured to handle a route pattern that includes an id parameter:

jsx
Copy code
{
  path: "/admin/dashboard/edit-book/:id",
  element: <EditBook />,
  loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
}
path: "/admin/dashboard/edit-book/:id": Defines a route pattern with a parameter named id.
element: <EditBook />: Specifies the component to render when this route is matched.
loader: ({params}) => fetch(http://localhost:5000/book/${params.id}`)`: This is a function that fetches data. 
It uses the fetch API to request data related to the book with the id specified in the route parameter. 
This data is then used within the EditBook component.
EditBook Component:
In the EditBook.jsx file, it seems you're using useParams and useLoaderData hooks from react-router-dom.

jsx
Copy code
import { useLoaderData, useParams } from 'react-router-dom';

const EditBook = () => {
  const { id } = useParams();
  const { author, imageURL, category, bookDescription, bookTitle, bookPDFUrl } = useLoaderData();
  // ...
}
useParams(): This hook from react-router-dom is used to access the route parameters. In this case, it retrieves the id parameter from the URL.
useLoaderData(): This is a custom hook provided by React Router's loader function. 
It likely fetches the data related to the book from the URL endpoint specified in the router configuration.
 This hook is used to access the fetched data within the EditBook component.
This setup allows the EditBook component to retrieve the id parameter from the URL and use the useLoaderData() hook 
to access the fetched data related to that particular book. The fetched data can then be used within the component for 
displaying book details or performing any necessary operations related to editing the book.

*/