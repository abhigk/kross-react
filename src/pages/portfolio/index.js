import React, {useState,useEffect} from "react";
import Clients from "../../components/sections/clients";
import homeatryBanner from "../../images/slides/homeatry.png";
import ktmgBanner from "../../images/slides/ktmg.png";
import alshiraa from "../../images/slides/Al-shiraa-arabians.png"
import networker from "../../images/slides/the-networker.png"
import networkerWeb from "../../images/slides/networkerWeb.png"

const data = [
  {
    category:['design','ui'],
    src:homeatryBanner,
    link:'project-single.html',
  },
  {
    category:['website','ui'],
    src:ktmgBanner,
    link:'project-single.html',
  },
  {
    category:['website','branding'],
    src:alshiraa,
    link:'project-single.html',
  },
  {
    category:['design','ui'],
    src:networker,
    link:'project-single.html',
  },
  {
    category:['website','illustration'],
    src:networkerWeb,
    link:'project-single.html',
  },
];

export default () => {

  const [projects,setProjects] = useState(data);

  const onSelected = (selectedCate) =>{
    let filterData = [];
    if(selectedCate=="all"){
      setProjects(data);
    }else{
      filterData = data.filter(item=>{
        return (item.category.indexOf(selectedCate)>=0);
      });

      setProjects(filterData);
    }


  // console.log('filter data clicked',filterData);


  };


  const ProjectCard = ({category,src,link}) =>{
    return(
        <div className="col-lg-4 col-6 mb-4 shuffle-item" data-groups={category}>
          <div className="position-relative rounded hover-wrapper">
            <img
                src={src}
                alt="portfolio-image"
                className="img-fluid rounded w-100 d-block"
            />
            <div className="hover-overlay">
              <div className="hover-content">
                <a className="btn btn-light btn-sm" href={link}>
                  view project
                </a>
              </div>
            </div>
          </div>
        </div>
    )
  };
  return(
  <>
    <section class="page-title bg-primary position-relative">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h1 class="text-white font-tertiary">Portfolio</h1>
          </div>
        </div>
      </div>

      <img src="images/illustrations/page-title.png" alt="illustrations" class="bg-shape-1 w-100"/>
      <img src="images/illustrations/leaf-pink-round.png" alt="illustrations" class="bg-shape-2"/>
      <img src="images/illustrations/dots-cyan.png" alt="illustrations" class="bg-shape-3"/>
      <img src="images/illustrations/leaf-orange.png" alt="illustrations" class="bg-shape-4"/>
      <img src="images/illustrations/leaf-yellow.png" alt="illustrations" class="bg-shape-5"/>
      <img src="images/illustrations/dots-group-cyan.png" alt="illustrations" class="bg-shape-6"/>
      <img src="images/illustrations/leaf-cyan-lg.png" alt="illustrations" class="bg-shape-7"/>
    </section>

    <section class="section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12">
            <div
                class="btn-group btn-group-toggle justify-content-center d-flex"
                data-toggle="buttons"
            >
              <label class="btn btn-sm btn-primary active"  onClick={()=> onSelected("all")}>
                <input type="radio" name="shuffle-filter" value="all" checked="checked"/>
                All
              </label>
              <label class="btn btn-sm btn-primary" onClick={()=> onSelected("design")}>
                <input type="radio" name="shuffle-filter" value="design" />
                UI/UX Design
              </label>
              <label class="btn btn-sm btn-primary" onClick={()=> onSelected("branding")}>
                <input type="radio" name="shuffle-filter" value="branding"/>
                BRANDING
              </label>
              <label class="btn btn-sm btn-primary" onClick={()=> onSelected("illustration")}>
                <input type="radio" name="shuffle-filter" value="illustration"/>
                ILLUSTRATION
              </label>
            </div>
          </div>
        </div>
        <div class="row shuffle-wrapper">
          {projects.map(x=>{
            return(
                <ProjectCard category={x.category} src={x.src} link={x.link} />
            )
          })}

          {/*<div class="col-lg-4 col-6 mb-4 shuffle-item" data-groups='["design","illustration"]'>*/}
          {/*  <div class="position-relative rounded hover-wrapper">*/}
          {/*    <img*/}
          {/*        src={homeatryBanner}*/}
          {/*        alt="portfolio-image"*/}
          {/*        class="img-fluid rounded w-100 d-block"*/}
          {/*    />*/}
          {/*    <div class="hover-overlay">*/}
          {/*      <div class="hover-content">*/}
          {/*        <a class="btn btn-light btn-sm" href="project-single.html">*/}
          {/*          view project*/}
          {/*        </a>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div class="col-lg-4 col-6 mb-4 shuffle-item" data-groups='["branding"]'>*/}
          {/*  <div class="position-relative rounded hover-wrapper">*/}
          {/*    <img*/}
          {/*        src={ktmgBanner}*/}
          {/*        alt="portfolio-image"*/}
          {/*        class="img-fluid rounded w-100 d-block"*/}
          {/*    />*/}
          {/*    <div class="hover-overlay">*/}
          {/*      <div class="hover-content">*/}
          {/*        <a class="btn btn-light btn-sm" href="project-single.html">*/}
          {/*          view project*/}
          {/*        </a>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div class="col-lg-4 col-6 mb-4 shuffle-item" data-groups='["illustration"]'>*/}
          {/*  <div class="position-relative rounded hover-wrapper">*/}
          {/*    <img*/}
          {/*        src={alshiraa}*/}
          {/*        alt="portfolio-image"*/}
          {/*        class="img-fluid rounded w-100 d-block"*/}
          {/*    />*/}
          {/*    <div class="hover-overlay">*/}
          {/*      <div class="hover-content">*/}
          {/*        <a class="btn btn-light btn-sm" href="project-single.html">*/}
          {/*          view project*/}
          {/*        </a>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div class="col-lg-4 col-6 mb-4 shuffle-item" data-groups='["design","branding"]'>*/}
          {/*  <div class="position-relative rounded hover-wrapper">*/}
          {/*    <img*/}
          {/*        src={networker}*/}
          {/*        alt="portfolio-image"*/}
          {/*        class="img-fluid rounded w-100 d-block"*/}
          {/*    />*/}
          {/*    <div class="hover-overlay">*/}
          {/*      <div class="hover-content">*/}
          {/*        <a class="btn btn-light btn-sm" href="project-single.html">*/}
          {/*          view project*/}
          {/*        </a>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div class="col-lg-4 col-6 mb-4 shuffle-item" data-groups='["illustration"]'>*/}
          {/*  <div class="position-relative rounded hover-wrapper">*/}
          {/*    <img*/}
          {/*        src={networkerWeb}*/}
          {/*        alt="portfolio-image"*/}
          {/*        class="img-fluid rounded w-100 d-block"*/}

          {/*    />*/}
          {/*    <div class="hover-overlay">*/}
          {/*      <div class="hover-content">*/}
          {/*        <a class="btn btn-light btn-sm" href="project-single.html">*/}
          {/*          view project*/}
          {/*        </a>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div class="col-lg-4 col-6 mb-4 shuffle-item" data-groups='["design"]'>*/}
          {/*  <div class="position-relative rounded hover-wrapper">*/}
          {/*    <img*/}
          {/*        src="images/portfolio/item-5.png"*/}
          {/*        alt="portfolio-image"*/}
          {/*        class="img-fluid rounded w-100 d-block"*/}
          {/*    />*/}
          {/*    <div class="hover-overlay">*/}
          {/*      <div class="hover-content">*/}
          {/*        <a class="btn btn-light btn-sm" href="project-single.html">*/}
          {/*          view project*/}
          {/*        </a>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div class="col-lg-4 col-6 mb-4 shuffle-item" data-groups='["branding"]'>*/}
          {/*  <div class="position-relative rounded hover-wrapper">*/}
          {/*    <img*/}
          {/*        src="images/portfolio/item-1.png"*/}
          {/*        alt="portfolio-image"*/}
          {/*        class="img-fluid rounded w-100 d-block"*/}
          {/*    />*/}
          {/*    <div class="hover-overlay">*/}
          {/*      <div class="hover-content">*/}
          {/*        <a class="btn btn-light btn-sm" href="project-single.html">*/}
          {/*          view project*/}
          {/*        </a>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div*/}
          {/*    class="col-lg-4 col-6 mb-4 shuffle-item"*/}
          {/*    data-groups='["design","illustration","branding"]'*/}
          {/*>*/}
          {/*  <div class="position-relative rounded hover-wrapper">*/}
          {/*    <img*/}
          {/*        src="images/portfolio/item-3.png"*/}
          {/*        alt="portfolio-image"*/}
          {/*        class="img-fluid rounded w-100 d-block"*/}
          {/*    />*/}
          {/*    <div class="hover-overlay">*/}
          {/*      <div class="hover-content">*/}
          {/*        <a class="btn btn-light btn-sm" href="project-single.html">*/}
          {/*          view project*/}
          {/*        </a>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div class="col-lg-4 col-6 mb-4 shuffle-item illustration" data-groups='["illustration"]'>*/}
          {/*  <div class="position-relative rounded hover-wrapper">*/}
          {/*    <img*/}
          {/*        src="images/portfolio/item-7.png"*/}
          {/*        alt="portfolio-image"*/}
          {/*        class="img-fluid rounded w-100 d-block"*/}
          {/*    />*/}
          {/*    <div class="hover-overlay">*/}
          {/*      <div class="hover-content">*/}
          {/*        <a class="btn btn-light btn-sm" href="project-single.html">*/}
          {/*          view project*/}
          {/*        </a>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
    <Clients/>
  </>
  )
};
