import React from "react";

export default () => (
  <section class="section section-on-footer" data-background="images/backgrounds/bg-dots.png">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="section-title">Contact Me</h2>
        </div>
        <div class="col-lg-8 mx-auto">
          <div class="bg-white rounded text-center p-5 shadow-down">
            <h4 class="mb-80">Interested in working together? <br/>We should queue up a chat.
              I’ll buy the coffee.</h4>
            <form action="#" class="row">
              <div class="col-md-6">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  class="form-control px-0 mb-4"
                />
              </div>
              <div class="col-md-6">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  class="form-control px-0 mb-4"
                />
              </div>
              <div class="col-12">
                <textarea
                  name="message"
                  id="message"
                  class="form-control px-0 mb-4"
                  placeholder="Type Message Here"
                ></textarea>
              </div>
              <div class="col-lg-6 col-10 mx-auto">
                <button class="btn btn-primary w-100">send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);
