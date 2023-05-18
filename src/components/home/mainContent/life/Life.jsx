import React from "react";
import Slider from "react-slick";
import { lifestyle } from "../../../../dummyData";
import Heading from "../../../common/heading/Heading";

import "../Ppost/ppost.css";

const Life = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="popularPost life">
        <Heading title="PINACA INNER EYE" />
        <div className="content">
          {/* <Slider {...settings}> */}
          {lifestyle.map((val) => {
            return (
              <div className="items">
                <div className="box shadow">
                  <div  class="category category1">
                    <span>{val.catgeory}</span>
                  </div>
                
                <div className="text">
                  <h1 className="title">{val.title}</h1>
                </div>
                </div>
              </div>
            );
          })}
          {/* </Slider> */}
        </div>
      </section>
    </>
  );
};

export default Life;
