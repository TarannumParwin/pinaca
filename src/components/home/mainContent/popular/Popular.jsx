import React from "react"
import "./Popular.css"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { popular } from "../../../../dummyData"
import Heading from "../../../common/heading/Heading"

const Popular = () => {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 2,
    speed: 500,
    rows: 4,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 4,
        },
      },
    ],
  }
  return (
    <>
      <section className='popular'>
        <Heading title='PINACA INNER EYE' />
        <div className='content'>
          <Slider {...settings}>
            {popular.map((val) => {
              return (
                <div className='items'>
                  <div className='box shadow'>
                    <div className='images row'>
                      
                      <div class='category category1'>
                        <span>{val.catgeory}</span>
                     
                    </div>
                  
                    <div 
                    style={{marginTop:'10px'}}className='text row'>
                      <h1 className='title'><span>{val.title}</span></h1>
                     
                     
                     </div>
                  
                  </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Popular
