import React from "react";
import Clients from "../../../components/sections/clients";
import teamex from "../../../images/works/teamex-project.png"
export default (props) => {

    const data = props.location.state.displayData;
    return(
    <>
        <section class="page-title-alt bg-primary position-relative">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="text-white font-tertiary">Teamex</h1>
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
                    <div className="col-md-7 text-center ">
                        <div className="shadow-down mb-4">
                            <img
                                src={data.src}
                                alt="author"
                                className="img-fluid w-100 rounded-lg border-thick border-white"
                            />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <p style={{fontSize: "x-large"}}>
                            {data.content}
                        </p>

                    </div>
                </div>
            </div>
        </section>

    </>
)};
