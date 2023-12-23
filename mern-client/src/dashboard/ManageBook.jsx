import React, { useEffect, useState } from 'react'
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';

const ManageBook = () => {

const [allBooks,setAllBooks] = useState([]);

useEffect (() => {
fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setAllBooks(data));

},[])

// delete a book 
const handleDelete = (id) => {
console.log(id);

fetch(`http://localhost:5000/book/${id}`,{
  method: "DELETE",
}).then(res => res.json()).then(data =>
   {alert("Book is deleted sucessfully !")
   // this will auto refresh the site but this is not working setAllBooks(data);
  } )



}


  return (
    <div className='px-4 my-12'>
       <h2 className='mb-8 text-3xl font-bold'>
           Manage your books
         </h2>

                  {/*table for book data */}
                  <Table className='lg:w-[1180px]'>
        <Table.Head>
          <Table.HeadCell>Number</Table.HeadCell>
          <Table.HeadCell>Book name</Table.HeadCell>
          <Table.HeadCell>Aurthor name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Prices</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>

        {/*map operation to map db data */}
         {
            allBooks.map((book,index) => <Table.Body className="divide-y" key={book._id} >
               <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
             {index+1}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
             {book.bookTitle}
            </Table.Cell>
            <Table.Cell>{book.author}</Table.Cell>
            <Table.Cell>{book.category}</Table.Cell>
            <Table.Cell>$10.00</Table.Cell>

            <Table.Cell>

              <Link  className='font-medium text-cyan-600 hover:underline  dark:text-cyan-500 mr-5' 
              to={`/admin/dashboard/edit-book/${book._id}`}>
                 Edit
                 

              </Link>
              <button onClick={() => handleDelete(book._id)} className='bg-red-600 px-3 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>
                        Delete
                 </button>

            </Table.Cell>
            

          </Table.Row>
            </Table.Body> )
         
         }
         

      </Table>
           
    </div>
  )
}

export default ManageBook

//----------------------------------------------------------map-operation---------------------------------------------------------------------------------------
/*

 .................allBooks.map((book,index) => <Table.Body className="divide-y" key={book._id} >
               <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
             01..........................


This code iterates through each item in the allBooks array. For each book, it generates a Table.Body component containing a Table.Row with several Table.Cell components.

Each Table.Cell contains different pieces of information:

//The first cell contains the text "01".
//The second cell contains the text "Apple MacBook Pro 17".
//The third cell contains the text "Sliver".
//The fourth cell contains the text "Laptop".
//The fifth cell contains the text "$2999".
//The sixth cell contains an anchor (<a>) element with the text "Edit" and a link ("#").
//Each row is styled differently using classes for background color, 
//text color, and other styles based on whether the UI is in light mode (bg-white, text-gray-900) or dark mode (dark:border-gray-700, dark:bg-gray-800, dark:text-white, dark:text-cyan-500).
//The key={book._id} is used to uniquely identify each row. 
//This is important when rendering arrays of elements in React to help React efficiently update the components when the array changes.
//Overall, this code seems to be rendering a table layout with hard-coded data for books,
//but it's structured in a way that suggests it could be dynamically generating rows based on the contents of the allBooks array.



--------------------------------------${book._id}--------------------------------------------------------------

//The backticks () in JavaScript denote a template literal, allowing you to embed expressions within a string. 
//When using ${}`, you can inject variables or execute expressions inside a string.
//In this case, ${book._id} within the template literal is used to dynamically insert the book._id value into the string. 
//This construct is often used in React applications, specifically in JSX, to create dynamic URLs or strings based on the values of variables or properties.
//The code you've shown is likely part of a React application that utilizes React Router.
The <Link> component from React Router is used for navigation between different routes in the application.
javascript
Copy code
<Link className="font-medium text-cyan-600 hover:underline dark:text-cyan-500" to={`/admin/dashboard/edit-book/${book._id}`}>
  Edit
</Link>
//Here, the to prop of the <Link> component is a string that represents the URL to which the user should be directed when clicking the link. 
//The backticks and ${} notation allow the inclusion of the book._id value within the URL. For instance, if book._id is "abc123",
//the resulting URL would be something like /admin/dashboard/edit-book/abc123.
//This dynamic URL construction ensures that when the link is rendered for each book, 
//it directs the user to a unique edit page for that particular book based on its book._id.




*/