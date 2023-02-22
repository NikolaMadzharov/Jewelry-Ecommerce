import React from "react";
import { SectionSliderDescription } from "./SectionSliderComponents/SectionSliderDescription";
import {SectionImage} from "./SectionSliderComponents/SectionImage";

export const SectionSlider = () =>{
    return(
        <section className=" slider_section position-relative">
      
        <div className="slider_number-container d-none d-md-block">
          <div className="number-box">
            <span>
              01
            </span>
            <hr />
            <span className="jwel">
              J <br/>
              e <br/>
              w <br/>
              e <br/>
              l <br/>
              l <br/>
              e <br/>
              r <br/>
              y
            </span>
            <hr />
            <span>
              02
            </span>
          </div>
        </div>
        <div className="container">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">01</li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1">02</li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2">03</li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail_box">
                      <h2>
                        <span> New Collection</span>
                        <hr /> 
                      </h2>
                      <h1>
                        Jewellery
                      </h1>
                     <SectionSliderDescription description ="dasfafasfasfassfas" />
                      <div>
                        <a href="/#">Shop Now</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                    <SectionImage image ={"https://e7.pngegg.com/pngimages/1014/979/png-clipart-wedding-ring-symbol-christian-views-on-marriage-wedding-wedding-anniversary-holidays.png"} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail_box">
                      <h2>
                        <span> New Collection</span>
                        <hr />
                      </h2>
                      <h1>
                        Jewellery
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet consec tetur adipiscing elit elit at felislacinia
                        aptent taciti sociosqu ad litora torquent per conubia nostra
                      </p>
                      <div>
                        <a href="/#">Shop Now</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <SectionImage image= {"https://www.freepnglogos.com/uploads/wedding-ring-png/wedding-ring-engagement-ring-png-transparent-engagement-ring-2.png"} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail_box">
                      <h2>
                        <span> New Collection</span>
                        <hr />
                      </h2>
                      <h1>
                        Jewellery
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet consec tetur adipiscing elit elit at felislacinia
                        aptent taciti sociosqu ad litora torquent per conubia nostra
                      </p>
                      <div>
                        <a href="/#">Shop Now</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <SectionImage image = {"https://e7.pngegg.com/pngimages/102/482/png-clipart-wedding-ring-jewellery-diamond-gemstone-diamond-ring-love-ring.png"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
      </section>
    )
};