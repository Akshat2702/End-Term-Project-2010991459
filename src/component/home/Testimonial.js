import React from "react";
import Carousel from "react-multi-carousel";

function Testimonial() {
  return (
    <div className="testimonial-section">
      <section className="home-section" id="featured-section">
        <div className="container">
          <div className="testimonialHeading">
            <div className="section-heading-testimonial">
              <h2 className="testimonialHead">
                Customer
                <br />
                Testimonials
              </h2>
              <hr className="orangeLine" align="left" />
            </div>
          </div>
          <div className="testimonials">
            <div className="customervideo">
              <div className="clientDetails">
                <Carousel
                  additionalTransfrom={0}
                  arrows={false}
                  autoPlay
                  autoPlaySpeed={3000}
                  centerMode={false}
                  className=""
                  containerClass="container"
                  dotListClass=""
                  draggable
                  focusOnSelect={false}
                  infinite
                  itemClass=""
                  keyBoardControl
                  minimumTouchDrag={80}
                  renderButtonGroupOutside={false}
                  renderDotsOutside={false}
                  responsive={{
                    desktop: {
                      breakpoint: {
                        max: 3000,
                        min: 1024,
                      },
                      items: 1,
                    },
                    mobile: {
                      breakpoint: {
                        max: 464,
                        min: 0,
                      },
                      items: 1,
                    },
                    tablet: {
                      breakpoint: {
                        max: 1024,
                        min: 464,
                      },
                      items: 1,
                    },
                  }}
                  showDots
                  sliderClass=""
                  slidesToSlide={1}
                  swipeable
                // removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                >
                  <div className="testimonial-details">
                    <div className="meta clicworthDetails">
                      These guys helped me all through the time till we found our dream place.
                      Thanks a Ton!
                    </div>
                    <div className="testimonial-image image">
                      <img
                        alt=""
                        src="https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png"
                        width={75}
                        height={75}
                        layout="intrinsic"
                      />
                    </div>
                    <div className="testimonial-text">
                      <div className="customer">
                        Prajwal &amp; Priyanka Mishra
                      </div>
                      <span className="date text-uppercase">
                        <span className="small-text">
                          Property owner, Ansal Woodsbury Apartments
                        </span>
                        <br />
                        Zirakpur
                      </span>
                    </div>
                  </div>
                  <div className="testimonial-details">
                    <div className="meta clicworthDetails">
                      Best in tech application and an amazing bunch of people to assist!
                    </div>
                    <div className="testimonial-image image">
                      <img
                        alt=""
                        src="https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png"
                        width={75}
                        height={75}
                        layout="intrinsic"
                      />
                    </div>
                    <div className="testimonial-text">
                      <div className="customer">Sahilpreet Singh</div>
                      <span className="date text-uppercase">
                        <span className="small-text">
                          Property owner at Highland Park Homes
                        </span>
                        <br />
                        Zirakpur
                      </span>
                    </div>
                  </div>
                  <div className="testimonial-details">
                    <div className="meta clicworthDetails">
                      Very responsive to queries and even  quicker to initiate the buying, selling or renting of flats.
                      Fantastic Stuff!
                    </div>
                    <div className="testimonial-image image">
                      <img
                        alt=""
                        src="https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png"
                        width={75}
                        height={75}
                        layout="intrinsic"
                      />
                    </div>
                    <div className="testimonial-text">
                      <div className="customer">
                        Sahil &amp; Preeti Gupta
                      </div>
                      <span className="date text-uppercase">
                        <span className="small-text">
                          Property owner at Avantika Apartments
                        </span>
                        <br />
                        Delhi
                      </span>
                    </div>
                  </div>
                  <div className="testimonial-details">
                    <div className="meta clicworthDetails">
                      They really know about what customers exactly want.
                      Their services are really good.
                    </div>
                    <div className="testimonial-image image">
                      <img
                        alt=""
                        src="https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png"
                        width={75}
                        height={75}
                        layout="intrinsic"
                      />
                    </div>
                    <div className="testimonial-text">
                      <div className="customer">Rohan Bindal</div>
                      <span className="date text-uppercase">
                        <span className="small-text">
                          Property owner at Techno Park Society
                        </span>
                        <br />
                        Ghaziabad
                      </span>
                    </div>
                  </div>
                  <div className="testimonial-details">
                    <div className="meta clicworthDetails">
                      It took just 3 days for me to finalize the perfect and before I knew, I was ready to move in.
                      Absolutely Mind Blowing Stuff!
                    </div>
                    <div className="testimonial-image image">
                      <img
                        alt=""
                        src="https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png"
                        width={75}
                        height={75}
                        layout="intrinsic"
                      />
                    </div>
                    <div className="testimonial-text">
                      <div className="customer">Akshat Saxena</div>
                      <span className="date text-uppercase">
                        <span className="small-text">
                          Property owner at Hazlewood Apartments
                        </span>
                        <br />
                        Zirakpur
                      </span>
                    </div>
                  </div>
                </Carousel>
                <div className="reviews">
                  {/* <div className="testimonial-play">
                    <span className="play-circle-testimonial">
                      <i className="icon-caret-right"></i>
                    </span>
                  </div> */}
                  <img
                    alt=""
                    src="https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png"
                    width={75}
                    height={75}
                    layout="intrinsic"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
