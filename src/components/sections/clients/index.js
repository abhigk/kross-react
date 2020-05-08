import React from "react";
import Slider from "react-slick";

const settings = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default () => (
  <section class="section">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="section-title">My Niche</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="">
            <Slider className="client-logo-slider d-flex align-items-center" {...settings}>
              <a href="#" class="text-center d-block outline-0 p-4">
                <h3 style={{ fontWeight: 'bold', color: '#a8a8a8', fontSize: '30px'}}>React JS</h3>
              </a>
              <a href="#" class="text-center d-block outline-0 p-4">
                {/* <img
                  class="d-unset img-fluid"
                  src="images/clients-logo/client-logo-2.png"
                  alt="client-logo"
                /> */}
                                <h3 style={{ fontWeight: 'bold', color: '#a8a8a8', fontSize: '30px'}}>Node JS</h3>

              </a>
              <a href="#" class="text-center d-block outline-0 p-4">
              <h3 style={{ fontWeight: 'bold', color: '#a8a8a8', fontSize: '30px'}}>React Native</h3>

              </a>
              <a href="#" class="text-center d-block outline-0 p-4">
              <h3 style={{ fontWeight: 'bold', color: '#a8a8a8', fontSize: '30px'}}>HTML</h3>

              </a>
              <a href="#" class="text-center d-block outline-0 p-4">
              <h3 style={{ fontWeight: 'bold', color: '#a8a8a8', fontSize: '30px'}}>CSS</h3>

              </a>
              <a href="#" class="text-center d-block outline-0 p-4">
              <h3 style={{ fontWeight: 'bold', color: '#a8a8a8', fontSize: '30px'}}>Bootstrap</h3>

              </a>
              <a href="#" class="text-center d-block outline-0 p-4">
              <h3 style={{ fontWeight: 'bold', color: '#a8a8a8', fontSize: '30px'}}>UI/UX</h3>

              </a>

            </Slider>
          </div>
        </div>
      </div>
    </div>
  </section>
);
