import React from "react";
import { SectionImage } from "./SectionSliderComponents/SectionImage";

export const ItemSelection = () =>{
    return (
        <div className="container">
        <div className="item_container">
          <div className="box">
            <div className="price">
              <h6>
                Best PRICE
              </h6>
            </div>
            <div className="img-box">
            <SectionImage image ={"https://e7.pngegg.com/pngimages/1014/979/png-clipart-wedding-ring-symbol-christian-views-on-marriage-wedding-wedding-anniversary-holidays.png"} />
            </div>
            <div className="name">
              <h5>
                Bracelet
              </h5>
            </div>
          </div>
          <div className="box">
            <div className="price">
              <h6>
                Best PRICE
              </h6>
            </div>
            <div className="img-box">
            <SectionImage image ={"https://e7.pngegg.com/pngimages/1014/979/png-clipart-wedding-ring-symbol-christian-views-on-marriage-wedding-wedding-anniversary-holidays.png"} />
            </div>
            <div className="name">
              <h5>
                Ring
              </h5>
            </div>
          </div>
          <div className="box">
            <div className="price">
              <h6>
                Best PRICE
              </h6>
            </div>
            <div className="img-box">
            <SectionImage image ={"https://e7.pngegg.com/pngimages/1014/979/png-clipart-wedding-ring-symbol-christian-views-on-marriage-wedding-wedding-anniversary-holidays.png"} />
            </div>
            <div className="name">
              <h5>
                Earings
              </h5>
            </div>
          </div>
        </div>
      </div>
    )
}