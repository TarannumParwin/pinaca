import React from "react"

import "./side.css"
import Slider from "react-slick"
import Heading from "../../../common/heading/Heading"
import { gallery } from "../../../../dummyData"

import SocialMedia from "../social/SocialMedia"


const Side = () => {
  

  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const catgeory = ["Karthik", "Raj", "Tushar", "Saikrishna", "Prashanth", "Prince", "Tejas", "Shiva"]
  return (
    <>
    
      <Heading title='Search' />
    
      <SocialMedia />

      <Heading title='Seamntic Search' />

      

      <section className='catgorys'>
       
        
        {catgeory.map((val) => {
          return (
            <div className='category category1'>
              <span>{val}</span>
            </div>
          )
        })}
      </section>

     
    </>
  )
}

export default Side
