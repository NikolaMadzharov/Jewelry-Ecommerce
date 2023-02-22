import React, { useState } from "react";
import { SectionImage } from "./SectionSliderComponents/SectionImage";
import { SectionSliderDescription } from "./SectionSliderComponents/SectionSliderDescription";

export const AboutSection = () => {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>About Jewellery Shop</h2>
              </div>
              <SectionSliderDescription
                description="dfsdfsdfsadfsdfsdsfsfsfdsfsdfs"
              />
              <div>
                {showText ? (
                  <>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed ac nulla at mi pharetra convallis. Pellentesque ac nisl
                    nec mauris aliquam vestibulum.
                    <button onClick={handleClick}>Read less</button>
                  </>
                ) : (
                  <>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    <button onClick={handleClick}>Read more</button>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-box">
              <SectionImage
                image="https://e7.pngegg.com/pngimages/1014/979/png-clipart-wedding-ring-symbol-christian-views-on-marriage-wedding-wedding-anniversary-holidays.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
