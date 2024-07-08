import React from 'react'
import { NavLink } from 'react-router-dom'

function Error() {
  return (
    <section id='error-page'>

  
   <div className=" content">
    <br />
    <h2 className='header'>404</h2>
    <h4>Sorry ! page not found</h4>
    <p>
        Oops ! It seems like the page you are trying to access doesn't exist
        or has been moved. Please check the URL and try again....

    </p>
    <div className="btns">
        <NavLink to="/">Go to Home</NavLink>
        <NavLink to="/contact">report problem</NavLink>
    </div>

   </div>
   </section>
  )
}

export default Error