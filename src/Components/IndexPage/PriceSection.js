import React from "react";
import { PriceSectionHeading } from "./PriceSection/PriceSectionHeading";
import { SectionImage } from "./SectionSliderComponents/SectionImage";

export const PriceSection = () =>{
    return (
       
        <div className="container">
          <div className="heading_container">
            <h2>
              Our Jewellery Price
            </h2>
          </div>
          <div className="price_container">
            <div className="box">
              <div className="name">
              <PriceSectionHeading heading = "test" />
              </div>
              <div className="img-box">
              <SectionImage image ={"https://e7.pngegg.com/pngimages/1014/979/png-clipart-wedding-ring-symbol-christian-views-on-marriage-wedding-wedding-anniversary-holidays.png"} />
              </div>
              <div className="detail-box">
                <h5>
                  $<span>1000.00</span>
                </h5>
                <a href="/#">
                  Buy Now
                </a>
              </div>
            </div>
            <div className="box">
              <div className="name">
              <PriceSectionHeading heading = "test2" />
              </div>
              <div className="img-box">
              <SectionImage image ={"https://e7.pngegg.com/pngimages/1014/979/png-clipart-wedding-ring-symbol-christian-views-on-marriage-wedding-wedding-anniversary-holidays.png"} />
              </div>
              <div className="detail-box">
                <h5>
                  $<span>1000.00</span>
                </h5>
                <a href="/#">
                  Buy Now
                </a>
              </div>
            </div>
            <div className="box">
              <div className="name">
              <PriceSectionHeading heading = "test3" />
              </div>
              <div className="img-box">
              <SectionImage image ={"https://e7.pngegg.com/pngimages/1014/979/png-clipart-wedding-ring-symbol-christian-views-on-marriage-wedding-wedding-anniversary-holidays.png"} />
              </div>
              <div className="detail-box">
                <h5>
                  $<span>1000.00</span>
                </h5>
                <a href="/#">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <a href="/#" className="price_btn">
              See More
            </a>
          </div>
        </div>
  
    )
}