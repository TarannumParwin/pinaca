import React, { useState } from "react"
import Head from "./Head"
import "./header.css"
import { Link } from "react-router-dom"

const Header = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <>
      <Head />
      <header>
        <div className='container paddingSmall'>
          <nav>
            <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
              <li>
                <Link to='/'>About</Link>
              </li>
              <li>
                <Link to='/culture'>Notification</Link>
              </li>
              <li>
                <Link to='/politics'>Users</Link>
              </li>
              <li>
                <Link to='/memes'>Register</Link>
              </li>
              <li>
                <Link to='/sports'>Diagram</Link>
              </li>
              <li>
                <Link to='/boxed'>Categories</Link>
              </li>
              <li>
                <Link to='/reviews'>Location</Link>
              </li>
              <li>
                <Link to='/reviews'>Logout</Link>
              </li>
            </ul>
            <button className='barIcon' onClick={() => setNavbar(!navbar)}>
              {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
