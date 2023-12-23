import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>

       <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
               {/* left side */}
              <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-5xl font-bold leading-snug text-black'>Buy and sell your Books <span className='text-blue-700'>
                    the best prices </span>
                </h2>

                  <p className='md:w-4/5'>A dynamic book-selling web application offers an extensive catalog of diverse titles, catering to various interests. 
                   Seamlessly browse, purchase, and review books while enjoying personalized recommendations and user-friendly navigation.
                   Experience an intuitive platform fostering a love for reading.
                  </p>

                  <div>
                    <input type="search" name="search" id="search" placeholder='search a book' className='py-2 px-2 rounded-s-sm outline-none'/>
                    <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black
                    transition-all ease-in duration-200'>search</button>
                  </div>

              </div>
       
                {/* right side */}
              <div>
               <BannerCard></BannerCard>
              </div>

       </div>
     </div>
  )
}

export default Banner









/* tailwind css exolanation
<div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
px-4: Sets padding on all sides of the <div> to 4 units using Tailwind's shorthand notation. px stands for horizontal padding, and 4 denotes the padding size.
lg:px-24: This class applies different padding on larger screens (viewport width equal to or larger than the lg breakpoint). On screens meeting the lg criteria, it sets the horizontal padding to 24 units.
bg-teal-100: Sets the background color of the <div> to a shade of teal, specifically bg-teal-100. The 100 suffix typically represents lighter shades within the color palette.
flex: Activates Flexbox, a CSS layout model that allows flexible arrangement of elements. This class enables the <div> to use Flexbox properties for its children.
items-center: Aligns the children of the <div>

<div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
Activates Flexbox, a CSS layout model that allows flexible arrangement of elements. This class enables the <div> to use Flexbox properties for its children.
w-full: Sets the width of the <div> to 100% of its container's width. It spans the entire width of its parent element.
flex-col: Sets the flex-direction of the <div> to column. Items inside the <div> will be arranged vertically.
md:flex-row: On screens meeting the md breakpoint (medium-sized screens), this class changes the flex-direction to row. Items inside the <div> will be arranged horizontally.
justify-between: Distributes the items along the main axis (horizontal for row direction) with space between them, creating equal space between the items at the start and end of the container.
items-center: Aligns the children of the <div> along the cross-axis (vertically in a row or horizontally in a column) to center them.
gap-12: Sets the gap between the children elements to a size of 12 using Tailwind's utility classes. This creates space between the items inside the <div>.
py-40: Sets padding on the y-axis (top and bottom) of the <div> to 40 units. py stands for vertical padding, and 40 denotes the padding size

<h2 className='text-5xl font-bold leading-snug text-black'>
text-5xl: Sets the font size of the text to an extra-large size. The 5xl refers to a specific text size defined in Tailwind CSS.
font-bold: Specifies that the text should be displayed in a bold font weight. It makes the text appear thicker and more emphasized.
leading-snug: Sets the line height (also known as leading) to a snug or close-fitting value. This creates relatively tight spacing between lines of text, ensuring they are close together without excessive spacing

<button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black
                    transition-all ease-in duration-200'>
hover:bg-black: Changes the background color of the button to black when hovered over by the cursor. This effect occurs due to the hover pseudo-class in CSS.
transition-all ease-in duration-200: Defines a transition effect for all properties when there's a change. It eases in the changes over a duration of 200 milliseconds, providing a smooth transition effect

<input type="search" name="search" id="search" placeholder='search a book' className='py-2 px-2 rounded-s-sm outline-none'/>
<input type="search">: This specifies an input field with the type set to "search". The type="search" attribute tells the browser to display a search input field, which might have specific styling or behavior based on the browser.

name="search" and id="search": These attributes assign a name and an ID to the input field. The name attribute is typically used when submitting a form to identify the data associated with this input field. The id attribute provides a unique identifier for the input element, which can be useful for targeting it with JavaScript or CSS.
placeholder='search a book': The placeholder attribute sets the text that appears in the input field when it's empty. In this case, it suggests to the user that they should "search a book".
This input field is of type "search" and has a placeholder to guide users on what type of input is expected. It's commonly used in forms for searching functionality within web applications or websites
*/