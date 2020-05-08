import React from "react";

const Card = ({ name, precentage, color }) => (
  <div class="card shadow text-center">
    <div
      class="position-relative rounded-top progress-wrapper"
      data-color="#fdb157"
      style={{ backgroundColor: color }}
    >
      <div class="wave" data-progress={`${precentage}%`} style={{ bottom: `${precentage}%` }}></div>
    </div>
    <div class="card-footer bg-white">
      <h4 class="card-title">{name} ({precentage}%)</h4>
    </div>
  </div>
);

const skillsData = [
  { name: "Web Development", precentage: 100, color: "#fdb157" },
  { name: "Hybrid Mobile Development", precentage: 100, color: "#9473e6" },
  { name: "Backend Development", precentage: 100, color: "#bdecf6" },
  { name: "UI/UX", precentage: 90, color: "#ffbcaa" },
];

export default () => (
  <section class="section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-title">Skills</h2>
        </div>
        {skillsData.map((data, index) => (
          <div key={index} class="col-lg-3 col-sm-6 mb-4 mb-lg-0">
            <Card {...data} />
          </div>
        ))}
      </div>
    </div>
  </section>
);
