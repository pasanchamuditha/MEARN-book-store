import React, { useEffect, useState } from 'react'
import Bookcard from '../componments/Bookcard';

const BestSellerBooks = () => {
    const [books,setBooks] =useState([]);

    useEffect(()=> {
       fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data.slice(0,6)))
    },[])

  return (
    <div>
        <Bookcard books = {books} headline="Best seller Books"/>
    </div>
  )
}

export default BestSellerBooks


//fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data.slice(0,6))) slise use only 6 books will apper in the faviourite books
// parent 

/*n the BestSellerBooks.jsx file, this code represents the parent component.
It renders the Bookcard component (<Bookcard />) and passes two props to it:
books={books}: Passes the books state from the parent (BestSellerBooks) to the Bookcard component.
headline="Best seller Books": Passes a string prop named headline with the value "Best seller Books" to the Bookcard component. */

// mama index .js back end eke all books kiyana eke  get code commnet krpu eka ayi kala



/*how does connect backend with front end import React, { useEffect, useState } from 'react': Imports necessary modules from React to use hooks like useState and useEffect.

const [books, setBooks] = useState([]);: Initializes a state variable books using the useState hook. books holds an empty array initially,
and setBooks is a function used to update the value of books.

useEffect(() => { fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => console.log(data)) }, []);:

The useEffect hook is called when the component mounts ([] as the dependency array), mimicking componentDidMount in class components.
Inside the useEffect, a fetch request is made to http://localhost:5000/all-books (assuming it's the backend API endpoint).
It uses the Fetch API to send an HTTP GET request to the specified endpoint.
The response is converted to JSON using res.json().
The resulting data is logged to the console using console.log(data).
return (<div>BestSellerBooks</div>);: Renders a simple div with the text "BestSellerBooks".

Regarding the backend and frontend connection:

The fetch function in the useEffect is making a GET request to http://localhost:5000/all-books. 
This assumes that there's a backend server running locally on port 5000 and exposes an endpoint /all-books that responds with a JSON representation of all books.
In a typical setup, the backend should handle requests to this endpoint by querying a database or performing other operations to retrieve the book data. 
Then, it responds with the data (usually as JSON).
The frontend (BestSellerBooks component) fetches this data using the fetch API, processes the response, and logs the data to the console in this example.
In a real application, you'd likely set the retrieved data into the books state using setBooks instead of just logging it to the console. 
This would allow you to use that data to render something meaningful in your React component, like a list of favorite books


The useState hook (const [books, setBooks] = useState([]);) initializes the state variable books with an empty array.
This line is executed first during the initialization of the component.
The useEffect hook, with an empty dependency array ([]), is executed after the initial render, immediately after the component mounts. 
So, in this specific scenario, the useEffect will execute after the initial state has been set using useState.

*/

