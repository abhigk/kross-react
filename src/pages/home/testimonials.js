import React from "react";

import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows: false,
  adaptiveHeight: true,
  autoplay: true
};
export default () => (
  <section class="section bg-primary position-relative testimonial-bg-shapes">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="section-title text-white mb-5">Testimonials</h2>
        </div>
        <div class="col-lg-10 mx-auto testimonial-slider">
          <Slider {...settings}>
            <div class="text-center testimonial-content">
              <i class="ti-quote-right text-white icon mb-4 d-inline-block"></i>
              <p class="text-white mb-4">
              Abhishek is a good worker. He is fast and follows direction. Will work with him again in the future.
              </p>
              {/* <img
                class="img-fluid rounded-circle mb-4 d-inline-block"
                src="images/testimonial/client-1.png"
                alt="client-image"
              /> */}
              <h4 class="text-white" style={{ marginBottom: '4%'}}>Josh Axelman</h4>
              {/* <h6 class="text-light mb-4">CEO, Funder</h6> */}
            </div>

            <div class="text-center testimonial-content">
              <i class="ti-quote-right text-white icon mb-4 d-inline-block"></i>
              <p class="text-white mb-4">
              I have worked with Abhishek for almost 3 months. He has great communication and understanding of the project. 
              The work was completed faster than I expected and he always helps when I have doubts or concerns about features. 
              I recommend him and will be working with him in the future.
              </p>
              {/* <img
                class="img-fluid rounded-circle mb-4 d-inline-block"
                src="images/testimonial/client-1.png"
                alt="client-image"
              /> */}
              <h4 class="text-white" style={{ marginBottom: '4%'}}>Faheel Kamran</h4>
              {/* <h6 class="text-light mb-4">CEO, Funder</h6> */}
            </div>

            <div class="text-center testimonial-content">
              <i class="ti-quote-right text-white icon mb-4 d-inline-block"></i>
              <p class="text-white mb-4">
              Professionalism at its best!! Abhishek has very good knowledge of React-native + Backend. 
              Job well done by Abhishek and I would surely work with him again for upcoming versions. 
              Highly recommended
              </p>
              {/* <img
                class="img-fluid rounded-circle mb-4 d-inline-block"
                src="images/testimonial/client-1.png"
                alt="client-image"
              /> */}
              <h4 class="text-white" style={{ marginBottom: '4%'}}>Florian Eichhorn</h4>
            </div>

            <div class="text-center testimonial-content">
              <i class="ti-quote-right text-white icon mb-4 d-inline-block"></i>
              <p class="text-white mb-4">
              When you want your work quickly and cheaply done, Abhishek is your man. He can work fast and will try to make the project a success. I choose him based on his portfolio.
              There is a lot of potential and maybe taking on more assignments will give him the right experience to build products that meet professional requirements.
              </p>
              {/* <img
                class="img-fluid rounded-circle mb-4 d-inline-block"
                src="images/testimonial/client-1.png"
                alt="client-image"
              /> */}
              <h4 class="text-white" style={{ marginBottom: '4%'}}>Maurice Lourens</h4>
              {/* <h6 class="text-light mb-4">CEO, Funder</h6> */}
            </div>

            <div class="text-center testimonial-content">
              <i class="ti-quote-right text-white icon mb-4 d-inline-block"></i>
              <p class="text-white mb-4">
              This is the second time i have hired Abhishek because of his work efficiency and quality he provides and also this time he gave me the high quality of work . 
              He does everything at once with bug free work.
              </p>
              {/* <img
                class="img-fluid rounded-circle mb-4 d-inline-block"
                src="images/testimonial/client-1.png"
                alt="client-image"
              /> */}
              <h4 class="text-white" style={{ marginBottom: '4%'}}>Ramesh Krishna</h4>
              {/* <h6 class="text-light mb-4">CEO, Funder</h6> */}
            </div>

            <div class="text-center testimonial-content">
              <i class="ti-quote-right text-white icon mb-4 d-inline-block"></i>
              <p class="text-white mb-4">
              Abhishek delivered good work on this react development project and I enjoyed working with him.
Provided Quality work. Delivery of product is before milestone date.
Appreciate the work and the enthu about work.
              </p>
              {/* <img
                class="img-fluid rounded-circle mb-4 d-inline-block"
                src="images/testimonial/client-1.png"
                alt="client-image"
              /> */}
              <h4 class="text-white" style={{ marginBottom: '4%'}} >Hardik Kumar</h4>
              {/* <h6 class="text-light mb-4">CEO, Funder</h6> */}
            </div>
          </Slider>
        </div>
      </div>
    </div>

    <img src="images/backgrounds/map.png" alt="map" class="img-fluid bg-map" />
    <img src="images/illustrations/dots-group-v.png" alt="bg-shape" class="img-fluid bg-shape-1" />
    <img src="images/illustrations/leaf-orange.png" alt="bg-shape" class="img-fluid bg-shape-2" />
    <img src="images/illustrations/dots-group-sm.png" alt="bg-shape" class="img-fluid bg-shape-3" />
    <img
      src="images/illustrations/leaf-pink-round.png"
      alt="bg-shape"
      class="img-fluid bg-shape-4"
    />
    <img src="images/illustrations/leaf-cyan.png" alt="bg-shape" class="img-fluid bg-shape-5" />
  </section>
);
