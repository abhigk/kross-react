import React from "react";
import Clients from "../../components/sections/clients";
export default () => (
  <>
    <section class="page-title-alt bg-primary position-relative">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="text-white font-tertiary">About Me</h1>
          </div>
        </div>
      </div>

      <img
        src="images/illustrations/leaf-bg-top.png"
        alt="illustrations"
        class="bg-shape-1 w-100"
      />
      <img src="images/illustrations/dots-group-sm.png" alt="illustrations" class="bg-shape-2" />
      <img src="images/illustrations/leaf-yellow.png" alt="illustrations" class="bg-shape-3" />
      <img src="images/illustrations/leaf-orange.png" alt="illustrations" class="bg-shape-4" />
      <img src="images/illustrations/dots-group-cyan.png" alt="illustrations" class="bg-shape-5" />
      <img src="images/illustrations/leaf-cyan-lg.png" alt="illustrations" class="bg-shape-6" />
    </section>

    <section class="section pt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <p style={{ fontWeight: 'bold', fontSize: '22px'}}>
              FullStack Developer with 3+ years of experience in designing and developing user interfaces, 
              testing, debugging and delivering the final product with a best quality in the market.
              Proven ability in optimizing web and mobile functionalities that improve data retrieval and
              workflow efficiencies.
            </p>
       
          </div>
          <div class="col-md-4 text-center drag-lg-top">
            <div class="shadow-down mb-4">
              <img
                src="images/about/author.jpg"
                alt="author"
                class="img-fluid w-100 rounded-lg border-thick border-white"
              />
            </div>
            <img src="images/about/signature.png" alt="signature" class="img-fluid" />
            <h4>Abhishek Khanna</h4>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="row justify-content-around">
          <div class="col-lg-12 text-center">
            <h2 class="section-title">Work Process</h2>
          </div>
          <div class="col-lg-3 col-md-4 text-center hover-shadow pt-3">
            <div class="">
              <img src="images/icons/plan.png" class="mb-4" alt="icon" />
              <h4 class="mb-4">Research and Plan</h4>
              <p>
                Research and planning is essential part to make a project success. 
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 text-center hover-shadow pt-3">
            <img src="images/icons/design.png" class="mb-4" alt="icon" />
            <h4 class="mb-4">Design and Develop</h4>
            <p>
              Designing prototypes and develop that prototype in some frontend and backend framework.
            </p>
          </div>
          <div class="col-lg-3 col-md-4 text-center hover-shadow pt-3">
            <img src="images/icons/print.png" class="mb-4" alt="icon" />
            <h4 class="mb-4">Deliver</h4>
            <p>
              Delivery is last step after Designing, Developing and Testing.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section bg-cover" data-background="images/backgrounds/team-bg.png">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="section-title">Project Management Tools I Use While Doing Work</h2>
          </div>
          <div class="col-md-4 col-sm-6 mb-4 mb-md-0">
            <div class="card text-center">
              <img src="images/team/member-1.png" class="card-img-top" />
              <div class="card-body">
                <h4 class="card-title">TRELLO</h4>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 mb-4 mb-md-0">
            <div class="card text-center">
              <img src="images/team/member-2.png" class="card-img-top" />
              <div class="card-body">
                <h4 class="card-title">ZOHO PLATFORM</h4>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 mb-4 mb-md-0">
            <div class="card text-center">
              <img src="images/team/member-3.png" class="card-img-top" />
              <div class="card-body">
                <h4 class="card-title">JIRA</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Clients />
  </>
);
