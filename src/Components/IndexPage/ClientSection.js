import React from "react";

export const ClientSection = () =>{
    return (
        <div className="container">
          <div className="heading_container">
            <h2>
              Testimonial
            </h2>
          </div>
          <h4 className="secondary_heading">
            What is says our customer
          </h4>
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="client_container">
                  <div className="client-id">
                    <div className="img-box">
                      <img src="images/client.png" alt="" />
                    </div>
                    <div className="name">
                      <h5>
                        Aliqua
                      </h5>
                      <h6>
                        Consectetur adipiscing
                      </h6>
                    </div>
                  </div>
                  <div className="detail-box">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="client_container">
                  <div className="client-id">
                    <div className="img-box">
                      <img src="images/client.png" alt="" />
                    </div>
                    <div className="name">
                      <h5>
                        Aliqua
                      </h5>
                      <h6>
                        Consectetur adipiscing
                      </h6>
                    </div>
                  </div>
                  <div className="detail-box">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="client_container">
                  <div className="client-id">
                    <div className="img-box">
                      <img src="images/client.png" alt="" />
                    </div>
                    <div className="name">
                      <h5>
                        Aliqua
                      </h5>
                      <h6>
                        Consectetur adipiscing
                      </h6>
                    </div>
                  </div>
                  <div className="detail-box">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

        </div>
    )
}