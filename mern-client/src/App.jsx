//App.jsx: The App.jsx file often represents the root or main component of your application.
//It contains the high-level structure of your app, 
//including different sections, navigation bars, or other components that serve as a container for your entire application.

import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './componments/Navbar'
import MyFooter from './componments/MyFooter'

function App() {
 
  return (
    <>
    <Navbar/> 
     <div className='min-h-screen'> <Outlet/></div>
      
      <MyFooter/>
    </>
  )
}

export default App
