import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
//react icons
import { FaBarsStaggered, FaBlog, FaMarker, FaXmark } from "react-icons/fa6";
import { AuthContext } from '../contects/AuthProvider';
//As you know already, useState(initialState) returns an array where the first item is the state value. 
//Luckily, the second item is a function that updates the state!
//const [isMenuOpen(variable), setMenuOpen(funtion that change this variable) ] = useState(false);
//This line uses the useState hook, which is a function provided by React that allows functional components to have state (manage and update data).
//It declares a state variable named isMenuOpen and a corresponding function setMenuOpen to update this variable.
// The useState hook takes an initial value for the state, which in this case is false

const Navbar = () => {
// State to manage menu open/close and sticky behavior
  const [isMenuOpen, setMenuOpen ] = useState (false);
  const [isStickey, setIsStickey ] = useState (false);

  const {user} = useContext(AuthContext);
  console.log(user);

//define togglemenu 
// Function to toggle the menu
//When a button or element calls toggleMenu(), it changes the value of isMenuOpen.
//setMenuOpen(!isMenuOpen) toggles isMenuOpen between true and false.
// If it's true, it becomes false, and vice versa.

  const toggleMenu = () =>{
    setMenuOpen(!isMenuOpen);
  }

// Effect to handle scroll behavior
// Function to check scroll position and set sticky state

                    useEffect(()=>{
                        const handleScroll =() =>{
                               if(window.scrollY>100){
                               setIsStickey(true)
                            }
                              else{
                               setIsStickey(false)
                            }
}

// Event listener to track scroll and update sticky state
window.addEventListener("scroll",handleScroll);
// Cleanup: remove event listener to avoid memory leaks
return() =>{
    window.addEventListener("scroll",handleScroll);
}
},[])




//define some nav items
//define nav items 
const navItems =[
    {link:"Home",path:"/"},
    {link:"About",path:"/about"},
    {link:"Shop",path:"/shop"},
    {link:"Sell your Books",path: "/admin/dashboard"},
    {link:"Blog",path:"/blog"},
]

//<FaBlog /> component appears to be using an icon from the FontAwesome library, 
//representing a blog or some blogging functionality, which is placed before the text "Books" in the link.
//These class names are likely part of a larger styling system, possibly using a utility-first CSS framework like Tailwind CSS.
//In such frameworks, classes are predefined to encapsulate specific CSS properties, making it easier to apply styles directly within JSX or HTML without writing custom CSS.
//The backticks (``) you're seeing in the code snippet are part of JavaScript's template literals. 
//In React or JSX, they allow you to embed expressions or variables within a string.
  return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
        <nav className={`py-4 lg:px-24 px-4 ${isStickey ? "stickey top-0 left-0 right-0 bg-blue-300":""}`}>
           <div className='flex justify-between items-center text-base gap-8 '>
              
                {/*herf will route pages but it will send http reguests and riply but in the React use link using Link react will not 
                send http requests inted it will route to nessary page withut refresh the whole page*/}
                {/*navItems.map(({link,path}) => <Link key ={path} to={path}
                This part of the code snippet uses the map function to iterate through an array called navItems.
                 For each item in the navItems array, it performs an operation specified within the map function*/}
                {/*nav items for large devices*/}
                {/*<Link key ={path} to={path}>In React, the <Link> component is typically used in applications built with React Router for navigating between different pages or views within the app
                 without reloading the entire page */}
                {/*Fablog means the logo*/}

                <Link to="/" className='text-2x1 font-bold text-blue-700 flex item-center gap -2'><FaBlog class name ='inline-block'/>Books</Link>
                <ul className='md:flex space-x-12 hidden'>
                     {
                        
                        navItems.map(({link,path}) => <Link key ={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>{link}</Link>)
                     }
                </ul>

                  {/*btn for laptop devices*/}
                  <div className ='space-x-12 hidden lg:flex items-center'>
                    <botton><FaBarsStaggered className ='w-5 hover:text-blue-700'/></botton>
                  {/*
                    user ? user.email :""
                    */}
                  </div>


                  {/*btn for mobile devices*/}
                  <div className='md:hidden'>
                      <botton onClick = {toggleMenu} className='text-black focus:outline none'>
                        {
                            isMenuOpen ? <FaXmark className='h-5 w-5 text-black'/> : <FaBarsStaggered className='h-5 w-5 text-black'/>
                        }
                      </botton>
                  </div>
           </div>

           {/*nav items for the small devices*/}
          <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0left-0" : "hidden" }`}>
          {
                        navItems.map(({link,path}) => <Link key ={path} to={path} className='block text-base text-white uppercase cursor-pointer'>{link}</Link>)
          }
          </div>
        </nav>
    </header>
  )
}

export default Navbar
