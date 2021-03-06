import React from "react";
import Contact from "./contact";
export default () => (
  <>
    <Contact />
    <footer class="bg-dark footer-section">
      <div class="section">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <h5 class="text-light">Email</h5>
              <p class="text-white paragraph-lg font-secondary">khannaabhishek94@email.com</p>
            </div>
            <div class="col-md-4">
              <h5 class="text-light">Phone</h5>
              <p class="text-white paragraph-lg font-secondary">+91 9988528141</p>
            </div>
            <div class="col-md-4">
              <h5 class="text-light">Address</h5>
              <p class="text-white paragraph-lg font-secondary">
                INDIA
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="border-top text-center border-dark py-5">
        {/* <p class="mb-0 text-light">
          Copyright ©
          <script>var CurrentYear = new Date().getFullYear() document.write(CurrentYear)</script> a
          theme by <a href="https://themefisher.com">themefisher.com</a>
        </p> */}
      </div>
    </footer>
  </>
);
