import React from "react"
import Slider from "react-slick"
import { ppost } from "../../../../dummyData"
import Heading from "../../../common/heading/Heading"
import "./ppost.css"


const Ppost = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  }
  return (
    <>
      <section className='popularPost'>
        <Heading title='PINACA INNER EYE' />
        <div className='content'>
          <Slider {...settings}>
            {ppost.map((val) => {
              return (
                <div className='items'>
                  <div className='box shadow'>
                    {/* <div className='images'> */}
                      {/* <div className='img'>
                        <img src={val.cover} alt='' />
                      </div> */}
                      <div class='category category1'>
                        <span>{val.name}</span>
                      {/* </div> */}
                    </div>
                    <div className='text'>
                      <h1 className='title'>{val.emailid}...</h1>
                      <div className='date'>
                      
                        <label>{val.catgeory}</label>
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

export default Ppost
