import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box logo'>
            
            <p>We provide best service and technology</p>
            <i className='fa fa-envelope'></i>
            <span> hello@pinacalabs.com </span> <br />
            <i className='fa fa-headphones'></i>
            <span> +91 60521488</span>
          </div>
          <div className='box'>
            <h3>About</h3>
            <div className='item'>
              
              <p>Google To Boost Android Security In Few Days</p>
            </div>
            <div className='item'>
             
              <p>Cespedes play the winning Baseball Game</p>
            </div>
          </div>
          <div className='box'>
            <h3>Notification</h3>
            <div className='item'>
            
              <p>US Promises to give Intel aid to locate the soldiers</p>
            </div>
            <div className='item'>
              
              <p>Renewable energy dead as industry waits for Policy</p>
            </div>
          </div>
          <div className='box'>
            <h3>Users</h3>
           
            <ul>
              <li>
                <span>Register</span> <label>(5)</label>
              </li>
              <li>
                <span>Diagram</span> <label>(6)</label>
              </li>
              <li>
                <span>Categories</span> <label>(7)</label>
              </li>
              <li>
                <span>Location</span> <label>(9)</label>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal  '>
        <div className='container flexSB'>
          <p>© all rights reserved</p>
          <p>
            made with <i className='fa fa-heart'></i>pinacalabs
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
