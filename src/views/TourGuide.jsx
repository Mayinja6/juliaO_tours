import {
  client1,
  client2,
  client3,
  client4,
  client5,
  Img2,
  TourGuideImg,
} from "../assets";
import { Breadcrumb, Preloader, TraveleDivider } from "../components";

const TourGuide = () => {
  return (
    <>
      <Preloader />
      <Breadcrumb title={"Tour Guides"} />
      <div>
        <div className="flex items-center justify-center flex-col text-center mx-auto mb-10 relative text-white">
          <h5 className="hikelink__subtitle">TEAM MEMBERS</h5>
          <h2 className="hikelink__title text-black">OUR TOUR GUIDES</h2>
          <TraveleDivider otherStyles={"text-secondary_clr"} />
        </div>
        <div className="my__space relative mt-10 mb-[60px] flex flex-wrap items-center gap-5">
          <div className="mb-5 md:mb-10 relative w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]">
            <figure className="">
              <img src={TourGuideImg} className="w-full" alt="tour_guide" />
            </figure>
            <div
              className="-mt-16 mx-auto w-3/4 relative"
              style={{ boxShadow: " 0px 0px 35px 0px rgba(0, 0, 0, 0.05)" }}
            >
              <div className="p-4 bg-white text-center">
                <h3 className="text-[23px] font-semibold mb-[15px]">
                  William Scott
                </h3>
                <h5 className="text-[#0791BE] font-bold text-[14px] mb-[15px]">
                  Tour Supervisor
                </h5>
                <p className="text-[13px] mb-[15px]">
                  Whether you're looking to explore the stunning beaches or
                  historical places, we have a tour for you.
                </p>
                <ul className="flex justify-evenly">
                  <li className="mx-[5px]">
                    <a
                      href="/"
                      className="bg-primary_clr w-8 h-8 flex items-center justify-center text-[14px] text-white link__hover hover:bg-secondary_clr hover:text-white"
                    >
                      <i className="icon-social-facebook"></i>
                    </a>
                  </li>
                  <li className="mx-[5px]">
                    <a
                      href="/"
                      className="bg-primary_clr w-8 h-8 flex items-center justify-center text-[14px] text-white link__hover hover:bg-secondary_clr hover:text-white"
                    >
                      <i className="icon-social-twitter"></i>
                    </a>
                  </li>

                  <li className="mx-[5px]">
                    <a
                      href="/"
                      className="bg-primary_clr w-8 h-8 flex items-center justify-center text-[14px] text-white link__hover hover:bg-secondary_clr hover:text-white"
                    >
                      <i className="icon-social-instagram"></i>
                    </a>
                  </li>
                  <li className="mx-[5px]">
                    <a
                      href="/"
                      className="bg-primary_clr w-8 h-8 flex items-center justify-center text-[14px] text-white link__hover hover:bg-secondary_clr hover:text-white"
                    >
                      <i className="icon-social-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-5 md:mb-10 relative w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]">
            <figure className="">
              <img src={TourGuideImg} className="w-full" alt="tour_guide" />
            </figure>
            <div
              className="-mt-16 mx-auto w-3/4 relative"
              style={{ boxShadow: " 0px 0px 35px 0px rgba(0, 0, 0, 0.05)" }}
            >
              <div className="p-4 bg-white text-center">
                <h3 className="text-[23px] font-semibold mb-[15px]">
                  Jennie Bennett
                </h3>
                <h5 className="text-[#0791BE] font-bold text-[14px] mb-[15px]">
                  Travel Agent
                </h5>
                <p className="text-[13px] mb-[15px]">
                  Whether you're looking to explore the stunning beaches or
                  historical places, we have a tour for you.
                </p>
                <ul className="flex justify-evenly">
                  <li className="mx-[5px]">
                    <a
                      href="/"
                      className="bg-primary_clr w-8 h-8 flex items-center justify-center text-[14px] text-white link__hover hover:bg-secondary_clr hover:text-white"
                    >
                      <i className="icon-social-facebook"></i>
                    </a>
                  </li>
                  <li className="mx-[5px]">
                    <a
                      href="/"
                      className="bg-primary_clr w-8 h-8 flex items-center justify-center text-[14px] text-white link__hover hover:bg-secondary_clr hover:text-white"
                    >
                      <i className="icon-social-twitter"></i>
                    </a>
                  </li>

                  <li className="mx-[5px]">
                    <a
                      href="/"
                      className="bg-primary_clr w-8 h-8 flex items-center justify-center text-[14px] text-white link__hover hover:bg-secondary_clr hover:text-white"
                    >
                      <i className="icon-social-instagram"></i>
                    </a>
                  </li>
                  <li className="mx-[5px]">
                    <a
                      href="/"
                      className="bg-primary_clr w-8 h-8 flex items-center justify-center text-[14px] text-white link__hover hover:bg-secondary_clr hover:text-white"
                    >
                      <i className="icon-social-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-5 md:mb-10 relative w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]">
            <figure className="">
              <img src={TourGuideImg} className="w-full" alt="tour_guide" />
            </figure>
            <div
              className="-mt-16 mx-auto w-3/4 relative"
              style={{ boxShadow: " 0px 0px 35px 0px rgba(0, 0, 0, 0.05)" }}
            >
              <div className="p-4 bg-white text-center">
                <h3 className="text-[23px] font-semibold mb-[15px]">
                  James Hardy
                </h3>
                <h5 className="text-[#0791BE] font-bold text-[14px] mb-[15px]">
                  Travel Agent
                </h5>
                <p className="text-[13px] mb-[15px]">
                  Whether you're looking to explore the stunning beaches or
                  historical places, we have a tour for you.
                </p>
                <ul className="flex justify-evenly">
                  <li className="mx-[5px]">
                    <a
                      href="/"
                      className="bg-primary_clr w-8 h-8 flex items-center justify-center text-[14px] text-white link__hover hover:bg-secondary_clr hover:text-white"
                    >
                      <i className="icon-social-facebook"></i>
                    </a>
                  </li>
                  <li className="mx-[5px]">
                    <a
                      href="/"
                      className="bg-primary_clr w-8 h-8 flex items-center justify-center text-[14px] text-white link__hover hover:bg-secondary_clr hover:text-white"
                    >
                      <i className="icon-social-twitter"></i>
                    </a>
                  </li>

                  <li className="mx-[5px]">
                    <a
                      href="/"
                      className="bg-primary_clr w-8 h-8 flex items-center justify-center text-[14px] text-white link__hover hover:bg-secondary_clr hover:text-white"
                    >
                      <i className="icon-social-instagram"></i>
                    </a>
                  </li>
                  <li className="mx-[5px]">
                    <a
                      href="/"
                      className="bg-primary_clr w-8 h-8 flex items-center justify-center text-[14px] text-white link__hover hover:bg-secondary_clr hover:text-white"
                    >
                      <i className="icon-social-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-5 md:mb-10 relative w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]">
            <figure className="">
              <img src={TourGuideImg} className="w-full" alt="tour_guide" />
            </figure>
            <div
              className="-mt-16 mx-auto w-3/4 relative"
              style={{ boxShadow: " 0px 0px 35px 0px rgba(0, 0, 0, 0.05)" }}
            >
              <div className="p-4 bg-white text-center">
                <h3 className="text-[23px] font-semibold mb-[15px]">
                  Harry Wilson
                </h3>
                <h5 className="text-[#0791BE] font-bold text-[14px] mb-[15px]">
                  Travel Agent
                </h5>
                <p className="text-[13px] mb-[15px]">
                  Whether you're looking to explore the stunning beaches or
                  historical places, we have a tour for you.
                </p>
                <ul className="flex justify-evenly">
                  <li className="mx-[5px]">
                    <a
                      href="/"
                      className="bg-primary_clr w-8 h-8 flex items-center justify-center text-[14px] text-white link__hover hover:bg-secondary_clr hover:text-white"
                    >
                      <i className="icon-social-facebook"></i>
                    </a>
                  </li>
                  <li className="mx-[5px]">
                    <a
                      href="/"
                      className="bg-primary_clr w-8 h-8 flex items-center justify-center text-[14px] text-white link__hover hover:bg-secondary_clr hover:text-white"
                    >
                      <i className="icon-social-twitter"></i>
                    </a>
                  </li>

                  <li className="mx-[5px]">
                    <a
                      href="/"
                      className="bg-primary_clr w-8 h-8 flex items-center justify-center text-[14px] text-white link__hover hover:bg-secondary_clr hover:text-white"
                    >
                      <i className="icon-social-instagram"></i>
                    </a>
                  </li>
                  <li className="mx-[5px]">
                    <a
                      href="/"
                      className="bg-primary_clr w-8 h-8 flex items-center justify-center text-[14px] text-white link__hover hover:bg-secondary_clr hover:text-white"
                    >
                      <i className="icon-social-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-5 md:mb-10 relative w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]">
            <figure className="">
              <img src={TourGuideImg} className="w-full" alt="tour_guide" />
            </figure>
            <div
              className="-mt-16 mx-auto w-3/4 relative"
              style={{ boxShadow: " 0px 0px 35px 0px rgba(0, 0, 0, 0.05)" }}
            >
              <div className="p-4 bg-white text-center">
                <h3 className="text-[23px] font-semibold mb-[15px]">
                  Sally Watson
                </h3>
                <h5 className="text-[#0791BE] font-bold text-[14px] mb-[15px]">
                  Travel Guide
                </h5>
                <p className="text-[13px] mb-[15px]">
                  Whether you're looking to explore the stunning beaches or
                  historical places, we have a tour for you.
                </p>
                <ul className="flex justify-evenly">
                  <li className="mx-[5px]">
                    <a
                      href="/"
                      className="bg-primary_clr w-8 h-8 flex items-center justify-center text-[14px] text-white link__hover hover:bg-secondary_clr hover:text-white"
                    >
                      <i className="icon-social-facebook"></i>
                    </a>
                  </li>
                  <li className="mx-[5px]">
                    <a
                      href="/"
                      className="bg-primary_clr w-8 h-8 flex items-center justify-center text-[14px] text-white link__hover hover:bg-secondary_clr hover:text-white"
                    >
                      <i className="icon-social-twitter"></i>
                    </a>
                  </li>

                  <li className="mx-[5px]">
                    <a
                      href="/"
                      className="bg-primary_clr w-8 h-8 flex items-center justify-center text-[14px] text-white link__hover hover:bg-secondary_clr hover:text-white"
                    >
                      <i className="icon-social-instagram"></i>
                    </a>
                  </li>
                  <li className="mx-[5px]">
                    <a
                      href="/"
                      className="bg-primary_clr w-8 h-8 flex items-center justify-center text-[14px] text-white link__hover hover:bg-secondary_clr hover:text-white"
                    >
                      <i className="icon-social-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-5 md:mb-10 relative w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]">
            <figure className="">
              <img src={TourGuideImg} className="w-full" alt="tour_guide" />
            </figure>
            <div
              className="-mt-16 mx-auto w-3/4 relative"
              style={{ boxShadow: " 0px 0px 35px 0px rgba(0, 0, 0, 0.05)" }}
            >
              <div className="p-4 bg-white text-center">
                <h3 className="text-[23px] font-semibold mb-[15px]">
                  Sandy Warth
                </h3>
                <h5 className="text-[#0791BE] font-bold text-[14px] mb-[15px]">
                  Travel Guide
                </h5>
                <p className="text-[13px] mb-[15px]">
                  Whether you're looking to explore the stunning beaches or
                  historical places, we have a tour for you.
                </p>
                <ul className="flex justify-evenly">
                  <li className="mx-[5px]">
                    <a
                      href="/"
                      className="bg-primary_clr w-8 h-8 flex items-center justify-center text-[14px] text-white link__hover hover:bg-secondary_clr hover:text-white"
                    >
                      <i className="icon-social-facebook"></i>
                    </a>
                  </li>
                  <li className="mx-[5px]">
                    <a
                      href="/"
                      className="bg-primary_clr w-8 h-8 flex items-center justify-center text-[14px] text-white link__hover hover:bg-secondary_clr hover:text-white"
                    >
                      <i className="icon-social-twitter"></i>
                    </a>
                  </li>

                  <li className="mx-[5px]">
                    <a
                      href="/"
                      className="bg-primary_clr w-8 h-8 flex items-center justify-center text-[14px] text-white link__hover hover:bg-secondary_clr hover:text-white"
                    >
                      <i className="icon-social-instagram"></i>
                    </a>
                  </li>
                  <li className="mx-[5px]">
                    <a
                      href="/"
                      className="bg-primary_clr w-8 h-8 flex items-center justify-center text-[14px] text-white link__hover hover:bg-secondary_clr hover:text-white"
                    >
                      <i className="icon-social-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="my__space relative z-[2]">
          <div className="sm:px-2 py-10 bg-secondary_clr flex flex-row items-center flex-wrap justify-center">
            <div className="min-w-[190px] py-[10px] px-[15px] sm:px-[30px]">
              <figure>
                <img src={client1} alt="client_img" />
              </figure>
            </div>
            <div className="min-w-[190px] py-[10px] px-[15px] sm:px-[30px]">
              <figure>
                <img src={client2} alt="client_img" />
              </figure>
            </div>
            <div className="min-w-[190px] py-[10px] px-[15px] sm:px-[30px]">
              <figure>
                <img src={client3} alt="client_img" />
              </figure>
            </div>
            <div className="min-w-[190px] py-[10px] px-[15px] sm:px-[30px]">
              <figure>
                <img src={client4} alt="client_img" />
              </figure>
            </div>
            <div className="min-w-[190px] py-[10px] px-[15px] sm:px-[30px]">
              <figure>
                <img src={client5} alt="client_img" />
              </figure>
            </div>
          </div>
        </div>
        <div
          className="my__space bg-no-repeat bg-cover bg-center bg-fixed pt-[195px] pb-[75px] relative night_overlay_before -mt-20"
          style={{
            backgroundImage: `url(${Img2})`,
          }}
        >
          <div className="w-full sm:w-[85%] md:w-3/4 lg:w-2/3 relative text-white">
            <div>
              <h5 className="hikelink__subtitle text-white before:bg-white">
                INVOLVE NOW
              </h5>
              <h2 className="hikelink__title font-black leading-[1.2]">
                BE A PART OF OUR TEAM. JOIN US NOW !!
              </h2>
              <h4 className="leading-[1.3] mb-[35px] font-semibold text-[15px]">
                Our experienced travel agents will work with you to create a
                customized itinerary that meets all of your travel needs and
                preferences. And with our wide range of tour options, you're
                sure to find something that fits your budget and interests.{" "}
                <br />
                <br />
                So why wait? Start planning your dream vacation today! Simply
                browse through our website to see all of the amazing tours we
                offer, and don't hesitate to contact us with any questions. We
                can't wait to help you plan the trip of a lifetime.
              </h4>
              <div>
                <button className="hikelink__btn py-4">JOINS US NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourGuide;
