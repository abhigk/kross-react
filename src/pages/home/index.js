import React from "react";
import Testimonials from "./testimonials";
import Skills from "../../components/sections/skills";
export default () => (
  <>
    <section class="hero-area bg-primary" id="parallax">
      <div class="container">
        <div class="row">
          <div class="col-lg-11 mx-auto">
            <h1 class="text-white font-tertiary">
              Hi! I’m <br /> Abhishek Khanna <br /> FullStack Developer and UI/UX designer
            </h1>
          </div>
        </div>
      </div>
      <div class="layer-bg w-100">
        <img class="img-fluid w-100" src="images/illustrations/leaf-bg.png" alt="bg-shape" />
      </div>
      <div class="layer" id="l2">
        <img src="images/illustrations/dots-cyan.png" alt="bg-shape" />
      </div>
      <div class="layer" id="l3">
        <img src="images/illustrations/leaf-orange.png" alt="bg-shape" />
      </div>
      <div class="layer" id="l4">
        <img src="images/illustrations/dots-orange.png" alt="bg-shape" />
      </div>
      <div class="layer" id="l5">
        <img src="images/illustrations/leaf-yellow.png" alt="bg-shape" />
      </div>
      <div class="layer" id="l6">
        <img src="images/illustrations/leaf-cyan.png" alt="bg-shape" />
      </div>
      <div class="layer" id="l7">
        <img src="images/illustrations/dots-group-orange.png" alt="bg-shape" />
      </div>
      <div class="layer" id="l8">
        <img src="images/illustrations/leaf-pink-round.png" alt="bg-shape" />
      </div>
      <div class="layer" id="l9">
        <img src="images/illustrations/leaf-cyan-2.png" alt="bg-shape" />
      </div>

      <ul class="list-unstyled ml-5 mt-3 position-relative zindex-1">
        <li class="mb-3">
          <a class="text-white" href="#">
            <i class="ti-facebook"></i>
          </a>
        </li>
        <li class="mb-3">
          <a class="text-white" href="#">
            <i class="ti-instagram"></i>
          </a>
        </li>
        <li class="mb-3">
          <a class="text-white" href="#">
            <i class="ti-dribbble"></i>
          </a>
        </li>
        <li class="mb-3">
          <a class="text-white" href="#">
            <i class="ti-twitter"></i>
          </a>
        </li>
      </ul>
    </section>

    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 mx-auto text-center">
            <p class="font-secondary paragraph-lg text-dark">
            I am an experienced FullStack Developer and UI/UX Designer. I have developed many expert level projects and
            design eye catchy websites and mobile apps. My expertise are developing responsive websites, hybrid mobile development,
            backend development and UI/UX Designing.
            </p>
            {/* <a href="about.html" class="btn btn-transparent">
              know more
            </a> */}
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="section-title">My Work</h2>
          </div>
        </div>
        <div className="row shuffle-wrapper">
          <div className="col-lg-4 col-6 mb-4 shuffle-item">
            <div className="position-relative rounded hover-wrapper">
              <img
                  src="images/portfolio/item-1.png"
                  alt="portfolio-image"
                  className="img-fluid rounded w-100"
              />
              <div className="hover-overlay">
                <div className="hover-content">
                  <a className="btn btn-light btn-sm" href="project-single.html">
                    view project
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-6 mb-4 shuffle-item">
            <div className="position-relative rounded hover-wrapper">
              <img
                  src="images/portfolio/item-2.png"
                  alt="portfolio-image"
                  className="img-fluid rounded w-100"
              />
              <div className="hover-overlay">
                <div className="hover-content">
                  <a className="btn btn-light btn-sm" href="project-single.html">
                    view project
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-6 mb-4 shuffle-item">
            <div className="position-relative rounded hover-wrapper">
              <img
                  src="images/portfolio/item-3.png"
                  alt="portfolio-image"
                  className="img-fluid rounded w-100"
              />
              <div className="hover-overlay">
                <div className="hover-content">
                  <a className="btn btn-light btn-sm" href="project-single.html">
                    view project
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-6 mb-4 shuffle-item">
            <div className="position-relative rounded hover-wrapper">
              <img
                  src="images/portfolio/item-4.png"
                  alt="portfolio-image"
                  className="img-fluid rounded w-100"
              />
              <div className="hover-overlay">
                <div className="hover-content">
                  <a className="btn btn-light btn-sm" href="project-single.html">
                    view project
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-6 mb-4 shuffle-item">
            <div className="position-relative rounded hover-wrapper">
              <img
                  src="images/portfolio/item-5.png"
                  alt="portfolio-image"
                  className="img-fluid rounded w-100"
              />
              <div className="hover-overlay">
                <div className="hover-content">
                  <a className="btn btn-light btn-sm" href="project-single.html">
                    view project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Skills />

    <section class="section">
      <div class="container">
        <div class="row justify-content-around">
          <div class="col-lg-12 text-center">
            <h2 class="section-title">Technology I Use</h2>
          </div>
          <div class="col-lg-3 col-md-4 text-center">
            <img src="images/experience/icon-1.png" alt="icon" />
            <h4 style={{ fontWeight: 'bold', paddingBottom: '10%'}}>Website & Backend Development</h4>
            <h5 >React JS (Frontend)</h5>
            <h5 >HTML & CSS (Frontend)</h5>
            <h5 >Booststrap (Frontend)</h5>
            <h5 >Node JS (BACKEND)</h5>


          </div>
          <div class="col-lg-3 col-md-4 text-center">
            <img src="images/experience/icon-2.png" alt="icon" />
            <h4 style={{ fontWeight: 'bold',  paddingBottom: '10%'}}>Hybrid Mobile Development</h4>
            <h5 >React Native (Frontend)</h5>
            <h5 >Node JS (Backend)</h5>

          </div>
          <div class="col-lg-3 col-md-4 text-center">
            <img src="images/experience/icon-3.png" alt="icon" />
            <h4 style={{ fontWeight: 'bold',  paddingBottom: '10%'}}>UI/UX Designing</h4>
            <h5 >Figma Framework</h5>
            <h5 >Sketch Framework</h5>
            <h5 >rZeplin Framework</h5>

          </div>
        </div>
      </div>
    </section>

    {/* <section class="section position-relative">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-title">Education</h2>
          </div>
          <div class="col-lg-6 col-md-6 mb-80">
            <div class="d-flex">
              <div class="mr-lg-5 mr-3">
                <i class="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block"></i>
              </div>
              <div>
                <p class="text-dark mb-1">2006</p>
                <h4>Marters in UX Design</h4>
                <p class="mb-0 text-light">Masassusets Institute of Technology</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 mb-80">
            <div class="d-flex">
              <div class="mr-lg-5 mr-3">
                <i class="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block"></i>
              </div>
              <div>
                <p class="text-dark mb-1">2004</p>
                <h4>Honours in Fine Arts</h4>
                <p class="mb-0 text-light">Harvard University</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 mb-80">
            <div class="d-flex">
              <div class="mr-lg-5 mr-3">
                <i class="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block"></i>
              </div>
              <div>
                <p class="text-dark mb-1">2000</p>
                <h4>Higher Secondary Certificat</h4>
                <p class="mb-0 text-light">Cardiff School</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 mb-80">
            <div class="d-flex">
              <div class="mr-lg-5 mr-3">
                <i class="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block"></i>
              </div>
              <div>
                <p class="text-dark mb-1">1998</p>
                <h4>Secondary School Certificate</h4>
                <p class="mb-0 text-light">Cardiff School</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        class="img-fluid edu-bg-image w-100"
        src="images/backgrounds/education-bg.png"
        alt="bg-image"
      />
    </section> */}

    {/* <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="section-title">Services</h2>
          </div>
          <div class="col-md-4 mb-4 mb-md-0">
            <div class="card hover-shadow shadow">
              <div class="card-body text-center px-4 py-5">
                <i class="ti-palette icon mb-5 d-inline-block"></i>
                <h4 class="mb-4">UI Design</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4 mb-md-0">
            <div class="card active-bg-primary hover-shadow shadow">
              <div class="card-body text-center px-4 py-5">
                <i class="ti-vector icon mb-5 d-inline-block"></i>
                <h4 class="mb-4">UX Design</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4 mb-md-0">
            <div class="card hover-shadow shadow">
              <div class="card-body text-center px-4 py-5">
                <i class="ti-panel icon mb-5 d-inline-block"></i>
                <h4 class="mb-4">Interaction Design</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}



    <Testimonials />

    {/*<section class="section pb-0">*/}
    {/*  <div class="container">*/}
    {/*    <div class="client-logo-slider d-flex align-items-center">*/}
    {/*      <a href="#" class="text-center d-block outline-0 p-4">*/}
    {/*        <img*/}
    {/*          class="d-unset img-fluid"*/}
    {/*          src="images/clients-logo/client-logo-1.png"*/}
    {/*          alt="client-logo"*/}
    {/*        />*/}
    {/*      </a>*/}
    {/*      <a href="#" class="text-center d-block outline-0 p-4">*/}
    {/*        <img*/}
    {/*          class="d-unset img-fluid"*/}
    {/*          src="images/clients-logo/client-logo-2.png"*/}
    {/*          alt="client-logo"*/}
    {/*        />*/}
    {/*      </a>*/}
    {/*      <a href="#" class="text-center d-block outline-0 p-4">*/}
    {/*        <img*/}
    {/*          class="d-unset img-fluid"*/}
    {/*          src="images/clients-logo/client-logo-3.png"*/}
    {/*          alt="client-logo"*/}
    {/*        />*/}
    {/*      </a>*/}
    {/*      <a href="#" class="text-center d-block outline-0 p-4">*/}
    {/*        <img*/}
    {/*          class="d-unset img-fluid"*/}
    {/*          src="images/clients-logo/client-logo-4.png"*/}
    {/*          alt="client-logo"*/}
    {/*        />*/}
    {/*      </a>*/}
    {/*      <a href="#" class="text-center d-block outline-0 p-4">*/}
    {/*        <img*/}
    {/*          class="d-unset img-fluid"*/}
    {/*          src="images/clients-logo/client-logo-5.png"*/}
    {/*          alt="client-logo"*/}
    {/*        />*/}
    {/*      </a>*/}
    {/*      <a href="#" class="text-center d-block outline-0 p-4">*/}
    {/*        <img*/}
    {/*          class="d-unset img-fluid"*/}
    {/*          src="images/clients-logo/client-logo-1.png"*/}
    {/*          alt="client-logo"*/}
    {/*        />*/}
    {/*      </a>*/}
    {/*      <a href="#" class="text-center d-block outline-0 p-4">*/}
    {/*        <img*/}
    {/*          class="d-unset img-fluid"*/}
    {/*          src="images/clients-logo/client-logo-2.png"*/}
    {/*          alt="client-logo"*/}
    {/*        />*/}
    {/*      </a>*/}
    {/*      <a href="#" class="text-center d-block outline-0 p-4">*/}
    {/*        <img*/}
    {/*          class="d-unset img-fluid"*/}
    {/*          src="images/clients-logo/client-logo-3.png"*/}
    {/*          alt="client-logo"*/}
    {/*        />*/}
    {/*      </a>*/}
    {/*      <a href="#" class="text-center d-block outline-0 p-4">*/}
    {/*        <img*/}
    {/*          class="d-unset img-fluid"*/}
    {/*          src="images/clients-logo/client-logo-4.png"*/}
    {/*          alt="client-logo"*/}
    {/*        />*/}
    {/*      </a>*/}
    {/*      <a href="#" class="text-center d-block outline-0 p-4">*/}
    {/*        <img*/}
    {/*          class="d-unset img-fluid"*/}
    {/*          src="images/clients-logo/client-logo-5.png"*/}
    {/*          alt="client-logo"*/}
    {/*        />*/}
    {/*      </a>*/}
    {/*    </div>*/}
    {/*  </div>*/}
    {/*</section>*/}

    {/*<section class="section">*/}
    {/*  <div class="container">*/}
    {/*    <div class="row">*/}
    {/*      <div class="col-12 text-center">*/}
    {/*        <h2 class="section-title">Blogs</h2>*/}
    {/*      </div>*/}
    {/*      <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">*/}
    {/*        <article class="card shadow">*/}
    {/*          <img class="rounded card-img-top" src="images/blog/post-3.jpg" alt="post-thumb" />*/}
    {/*          <div class="card-body">*/}
    {/*            <h4 class="card-title">*/}
    {/*              <a class="text-dark" href="blog-single.html">*/}
    {/*                Amazon increase income 1.5 Million*/}
    {/*              </a>*/}
    {/*            </h4>*/}
    {/*            <p class="cars-text">*/}
    {/*              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor*/}
    {/*              incididunt ut labore et dolore magna aliqua.*/}
    {/*            </p>*/}
    {/*            <a href="blog-single.html" class="btn btn-xs btn-primary">*/}
    {/*              Read More*/}
    {/*            </a>*/}
    {/*          </div>*/}
    {/*        </article>*/}
    {/*      </div>*/}
    {/*      <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">*/}
    {/*        <article class="card shadow">*/}
    {/*          <img class="rounded card-img-top" src="images/blog/post-4.jpg" alt="post-thumb" />*/}
    {/*          <div class="card-body">*/}
    {/*            <h4 class="card-title">*/}
    {/*              <a class="text-dark" href="blog-single.html">*/}
    {/*                Amazon increase income 1.5 Million*/}
    {/*              </a>*/}
    {/*            </h4>*/}
    {/*            <p class="cars-text">*/}
    {/*              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor*/}
    {/*              incididunt ut labore et dolore magna aliqua.*/}
    {/*            </p>*/}
    {/*            <a href="blog-single.html" class="btn btn-xs btn-primary">*/}
    {/*              Read More*/}
    {/*            </a>*/}
    {/*          </div>*/}
    {/*        </article>*/}
    {/*      </div>*/}
    {/*      <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">*/}
    {/*        <article class="card shadow">*/}
    {/*          <img class="rounded card-img-top" src="images/blog/post-2.jpg" alt="post-thumb" />*/}
    {/*          <div class="card-body">*/}
    {/*            <h4 class="card-title">*/}
    {/*              <a class="text-dark" href="blog-single.html">*/}
    {/*                Amazon increase income 1.5 Million*/}
    {/*              </a>*/}
    {/*            </h4>*/}
    {/*            <p class="cars-text">*/}
    {/*              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor*/}
    {/*              incididunt ut labore et dolore magna aliqua.*/}
    {/*            </p>*/}
    {/*            <a href="blog-single.html" class="btn btn-xs btn-primary">*/}
    {/*              Read More*/}
    {/*            </a>*/}
    {/*          </div>*/}
    {/*        </article>*/}
    {/*      </div>*/}
    {/*    </div>*/}
    {/*  </div>*/}
    {/*</section>*/}
  </>
);
