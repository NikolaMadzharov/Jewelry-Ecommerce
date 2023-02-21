import logo from './logo.svg';
import './App.css';
import {Header} from "./Components/IndexPage/Header";


function App() {
  return (
 

<div>

  <div className="hero_area">
    
     <Header/>
 
    <section className=" slider_section position-relative">
      <div className="design-box">
        <img src="images/design-1.png" alt="" />
      </div>
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
                    <img src="images/slider-img.png" alt="" />
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
                    <img src="images/slider-img.png" alt="" />
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
                    <img src="images/slider-img.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
   
  </div>

 

  <div className="item_section layout_padding2">
    <div className="container">
      <div className="item_container">
        <div className="box">
          <div className="price">
            <h6>
              Best PRICE
            </h6>
          </div>
          <div className="img-box">
            <img src="images/i-1.png" alt="" />
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
            <img src="images/i-2.png" alt="" />
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
            <img src="images/i-3.png" alt="" />
          </div>
          <div className="name">
            <h5>
              Earings
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>

 

  <section className="about_section layout_padding2-top layout_padding-bottom">
    <div className="design-box">
      <img src="images/design-2.png" alt="" />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="detail-box">
            <div className="heading_container">
              <h2>
                About Jewellery Shop
              </h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud
            </p>
            <div>
              <a href="/#">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="img-box">
            <img src="images/about-img.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>

  

  <section className="price_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          Our Jewellery Price
        </h2>
      </div>
      <div className="price_container">
        <div className="box">
          <div className="name">
            <h6>
              Diamond Ring
            </h6>
          </div>
          <div className="img-box">
            <img src="images/p-1.png" alt="" />
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
            <h6>
              Diamond Ring
            </h6>
          </div>
          <div className="img-box">
            <img src="images/i-2.png" alt="" />
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
            <h6>
              Diamond Ring
            </h6>
          </div>
          <div className="img-box">
            <img src="images/i-3.png" alt="" />
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
  </section>

  

  <section className="ring_section layout_padding">
    <div className="design-box">
      <img src="images/design-1.png" alt="" />
    </div>
    <div className="container">
      <div className="ring_container layout_padding2">
        <div className="row">
          <div className="col-md-5">
            <div className="detail-box">
              <h4>
                special
              </h4>
              <h2>
                Wedding Ring
              </h2>
              <a href="/#">
                Buy Now
              </a>
            </div>
          </div>
          <div className="col-md-7">
            <div className="img-box">
              <img src="images/ring-img.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>



  <section className="client_section">
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
  </section>

 

  <section className="contact_section layout_padding">
    <div className="design-box">
      <img src="images/design-2.png" alt="" />
    </div>
    <div className="container ">
      <div className="">
        <h2 className="">
          Contact Us
        </h2>
      </div>

    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <form action="">
            <div>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <input type="text" placeholder="Phone" />
            </div>
            <div>
              <input type="text" className="message-box" placeholder="Message" />
            </div>
            <div className="d-flex ">
              <button>
                SEND
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <div className="map_container">
            <div className="map-responsive">
        
            <iframe
  src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Eiffel+Tower+Paris+France"
  width="600"
  height="300"
 frameBorder={"0"}
  style={{ border: "0", width: "100%", height: "100%" }}
  title ={"Title"}
  allowFullScreen
></iframe>

           
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>



 
  <section className="info_section ">
    <div className="container">
      <div className="info_container">
        <div className="row">
          <div className="col-md-3">
            <div className="info_logo">
              <a href="/#">
                <img src="images/logo.png" alt="" />
                <span>
                  Lodge
                </span>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="info_contact">
              <a href="/#">
                <img src="images/location.png" alt="" />
                <span>
                  Address
                </span>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="info_contact">
              <a href="/#">
                <img src="images/phone.png" alt="" />
                <span>
                  +01 1234567890
                </span>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="info_contact">
              <a href="/#">
                <img src="images/mail.png" alt="" />
                <span>
                  demo@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="info_form">
          <div className="d-flex justify-content-center">
            <h5 className="info_heading">
              Newsletter
            </h5>
          </div>
          <form action="">
            <div className="email_box">
              <label htmlFor="email2">Enter Your Email</label>
              <input type="text" id="email2" />
            </div>
            <div>
              <button>
                subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="info_social">
          <div className="d-flex justify-content-center">
            <h5 className="info_heading">
              Follow Us
            </h5>
          </div>
          <div className="social_box">
            <a href="/#">
              <img src="images/fb.png" alt="" />
            </a>
            <a href="/#">
              <img src="images/twitter.png" alt="" />
            </a>
            <a href="/#">
              <img src="images/linkedin.png" alt="" />
            </a>
            <a href="/#">
              <img src="images/insta.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

 
  <section className="container-fluid footer_section">
    <p>
      &copy; <span id="displayYear"></span> All Rights Reserved By
      <a href="https://html.design/">Free Html Templates</a>
    </p>
  </section>
 

</div>


  );
}

export default App;
