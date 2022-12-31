import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import {
  About4,
  About5,
  About6,
  activity1,
  activity2,
  activity3,
  activity4,
  activity5,
  activity6,
  BannerPattern,
  client1,
  client2,
  client3,
  client4,
  client5,
  DestinationImg,
  Img1,
  Img2,
  TourGuideImg,
} from "../assets";
import { Newsletter, Preloader, TraveleDivider } from "../components";
const Home = () => {
  return (
    <>
      <Preloader />
      <main>
        {/* BAnner Section */}
        <section
          className="w-full my__space py-[200px] md:py-[230px] text-center relative bg-no-repeat bg-cover bg-center bg-fixed day_overlay_before"
          style={{
            backgroundImage: `url(${Img1})`,
          }}
        >
          <div className="relative text-white">
            <h2 className="text-[32px] sm:text-[45px] md:text-[50px] lg:text-[80px] font-black leading-[1.2] text-white mb-10 lg:mb-[30px] uppercase">
              EXPRIENCE THE NATURE'S BEAUTY
            </h2>
            <p className="mb-[45px] lg:mb-8 text-white text-[14px] sm:w-3/4 mx-auto">
              Welcome to our tour agency website! Whether you're looking to
              explore the stunning beaches of Thailand, discover the rich
              history of Europe, or embark on an African safari, we have a tour
              for you.
            </p>
            <a href="#about" className="hikelink__btn text-[14px] py-4">
              CONTINUE READING
            </a>
          </div>
        </section>
        <section className="relative mb-[100px]">
          <div
            className={`h-[144px] -mt-[70px] w-full bg-cover bg-no-repeat content-['']`}
            style={{ backgroundImage: `url(${BannerPattern})` }}
          ></div>
          <div className="my__space -mt-[210px] lg:-mt-[160px]">
            <div className="bg-white p-5 lg:p-10 flex flex-wrap items-end">
              <div className="p-3 w-full sm:w-1/3 md:w-1/4 lg:w-1/5 relative">
                <label htmlFor="destination" className="block text-[14px] mb-2">
                  Search Destination*
                </label>
                <input
                  type="text"
                  name="destination"
                  placeholder="Enter Destination"
                  className="rounded-[2px] w-full bg-[#F1F1F1] px-2 py-3 text-[14px] focus:outline-none"
                />
              </div>
              <div className="p-3 w-full sm:w-1/3 md:w-1/4 lg:w-1/5 relative">
                <label htmlFor="pay-number" className="block text-[14px] mb-2">
                  Pax Number*
                </label>
                <input
                  type="text"
                  name="pay-number"
                  className="rounded-[2px] w-full bg-[#F1F1F1] px-2 py-3 text-[14px] focus:outline-none"
                  placeholder="No.of People"
                />
              </div>
              <div className="p-3 w-full sm:w-1/3 md:w-1/4 lg:w-1/5 relative">
                <label
                  htmlFor="checkin-date"
                  className="block text-[14px] mb-2"
                >
                  Checkin Date*
                </label>
                <input
                  type="date"
                  name="checkin-date"
                  className="rounded-[2px] w-full bg-[#F1F1F1] px-2 py-3 text-[14px] focus:outline-none"
                />
              </div>
              <div className="p-3 w-full sm:w-1/3 md:w-1/4 lg:w-1/5 relative">
                <label
                  htmlFor="checkout-date"
                  className="block text-[14px] mb-2"
                >
                  Checkout Date*
                </label>
                <input
                  type="date"
                  name="checkout-date"
                  className="rounded-[2px] bg-[#F1F1F1] px-2 py-3 text-[14px] focus:outline-none w-full"
                />
              </div>
              <div className="p-3 w-full sm:w-1/3 md:w-1/4 lg:w-1/5 relative">
                <input
                  type="submit"
                  className="hikelink__btn py-4 w-full"
                  value="INQUIRE NOW"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Popular Deatinations */}
        <section className="my__space">
          <div className="flex items-center justify-center text-center flex-col">
            <h5 className="hikelink__subtitle">POPULAR DESTINATIONS</h5>
            <h2 className="hikelink__title font-black">
              TOP NOTCH DESTINATIONS
            </h2>
            <TraveleDivider otherStyles={"text-secondary_clr"} />
          </div>
          <div className="my-12 relative flex items-center justify-evenly md:justify-start lg:justify-evenly flex-wrap gap-2">
            <div
              className="travele__tour relative p-2 mb-4 bg-white max-w-[350px] sm:w-[calc(50%-8px)] md:w-[calc(33.33%-8px)] lg:w-[calc(25%-8px)]"
              style={{ boxShadow: "0px 0px 25px 0px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="travele__tour_img relative w-full h-full night_overlay_before">
                <img
                  src={DestinationImg}
                  className="max-w-full h-full"
                  alt=""
                />
              </div>
              <div className="my-2 text-center">
                <h3 className="mb-1">
                  <Link
                    className="font-bold text-[18px] transition-all hover:text-primary_clr duration-300"
                    to="/destinations"
                  >
                    Disney Land
                  </Link>
                </h3>
                <span className="text-[14px] font-bold uppercase text-secondary_clr">
                  England
                </span>
              </div>
              <div className="absolute top-5 pb-4 text-white right-4">
                <Rating readOnly precision={0.1} value={4.9} size="small" />
              </div>
            </div>
            <div
              className="travele__tour relative p-2 mb-4 bg-white max-w-[350px] sm:w-[calc(50%-8px)] md:w-[calc(33.33%-8px)] lg:w-[calc(25%-8px)]"
              style={{ boxShadow: "0px 0px 25px 0px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="travele__tour_img relative w-full h-full night_overlay_before">
                <img
                  src={DestinationImg}
                  className="max-w-full h-full"
                  alt=""
                />
              </div>
              <div className="my-2 text-center">
                <h3 className="mb-1">
                  <Link
                    className="font-bold text-[18px] transition-all hover:text-primary_clr duration-300"
                    to="/destinations"
                  >
                    Arctic Desert
                  </Link>
                </h3>
                <span className="text-[14px] font-bold uppercase text-secondary_clr">
                  Norway
                </span>
              </div>
              <div className="absolute top-5 pb-4 text-white right-4">
                <Rating readOnly precision={0.1} value={4.6} size="small" />
              </div>
            </div>
            <div
              className="travele__tour relative p-2 mb-4 bg-white max-w-[350px] sm:w-[calc(50%-8px)] md:w-[calc(33.33%-8px)] lg:w-[calc(25%-8px)]"
              style={{ boxShadow: "0px 0px 25px 0px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="travele__tour_img relative w-full h-full night_overlay_before">
                <img
                  src={DestinationImg}
                  className="max-w-full h-full"
                  alt=""
                />
              </div>
              <div className="my-2 text-center">
                <h3 className="mb-1">
                  <Link
                    className="font-bold text-[18px] transition-all hover:text-primary_clr duration-300"
                    to="/destinations"
                  >
                    Marina Ridge
                  </Link>
                </h3>
                <span className="text-[14px] font-bold uppercase text-secondary_clr">
                  NEW ZEALAND
                </span>
              </div>
              <div className="absolute top-5 pb-4 text-white right-4">
                <Rating readOnly precision={0.1} value={4.1} size="small" />
              </div>
            </div>
            <div
              className="travele__tour relative p-2 mb-4 bg-white max-w-[350px] sm:w-[calc(50%-8px)] md:w-[calc(33.33%-8px)] lg:w-[calc(25%-8px)]"
              style={{ boxShadow: "0px 0px 25px 0px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="travele__tour_img relative w-full h-full night_overlay_before">
                <img
                  src={DestinationImg}
                  className="max-w-full h-full"
                  alt=""
                />
              </div>
              <div className="my-2 text-center">
                <h3 className="mb-1">
                  <Link
                    className="font-bold text-[18px] transition-all hover:text-primary_clr duration-300"
                    to="/destinations"
                  >
                    Santorini Island
                  </Link>
                </h3>
                <span className="text-[14px] font-bold uppercase text-secondary_clr">
                  greece
                </span>
              </div>
              <div className="absolute top-5 pb-4 text-white right-4">
                <Rating readOnly precision={0.1} value={3.7} size="small" />
              </div>
            </div>
          </div>
          <div className="mb-20 mt- flex justify-center">
            <Link to="/destinations">
              <button className="hikelink__btn py-4">MORE DESTINATIONS</button>
            </Link>
          </div>
        </section>
        {/* About Us */}
        <section id="about" className=" my__space mb-10">
          <div className="flex items-start flex-wrap pt-[70px]">
            <div className="w-full mx-auto md:w-3/4 lg:w-1/2">
              <div className=" px-4 md:flex md:flex-wrap relative">
                <div className="mx-auto w-full sm:w-[70%] md:w-[42%] relative">
                  <div className="bg-secondary_clr border-[8px] border-white flex items-center md:ml-[30px] md:mt-8 justify-center flex-col relative z-[1] py-6 sm:py-[45px] px-3 sm:px-5  w-[85%] sm:w-auto mx-auto">
                    <h3 className="text-[20px] sm:text-[24px] text-center sm:text-left font-bold leading-[1.1] text-white mb-5">
                      Something you want to know aout us !!
                    </h3>
                    <Link to="/about" className="hikelink__btn py-3">
                      Learn More
                    </Link>
                  </div>
                  <div className="relative -mt-10 sm:-mt-20">
                    <img
                      src={DestinationImg}
                      className="max-w-full  mx-auto w-full"
                      alt="About_img"
                    />
                  </div>
                </div>
                <div className="border-[8px] border-white relative mx-auto md:flex my-5 md:my-0 w-full sm:w-[70%] md:w-[58%]">
                  <div>
                    <img src={Img1} className="max-w-full" alt="About_Img" />
                  </div>
                </div>
                <div>
                  <div className=" border-[8px] border-white relative mx-auto md:flex md:ml-[30%] md:-mt-[340px] w-full sm:w-[70%] mt-5">
                    <img src={Img1} className="max-w-full" alt="About_Img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 mt-10 lg:mt-0">
              <div className="md:pl-[30px]">
                <div>
                  <h5 className="hikelink__subtitle">INTRODUCTION ABOUT US</h5>
                  <h2 className="hikelink__title lg:text-[45px] leading-tight">
                    ULTIMATE GUIDE TO EPIC ADVENTURE
                  </h2>
                  <TraveleDivider otherStyles={"text-secondary_clr pl-8"} />
                  <p className="text-[14px]">
                    Our experienced travel agents will work with you to create a
                    customized itinerary that meets all of your travel needs and
                    preferences. And with our wide range of tour options, you're
                    sure to find something that fits your budget and interests.
                  </p>
                </div>
                <ul className="relative mt-5 m-0 mx-0">
                  <li className="list-none relative flex mb-5">
                    <span className="bg-primary_clr text-white text-[25px] relative h-[70px] w-[70px] flex items-center justify-center p-[10px]">
                      <img
                        src={About5}
                        alt="about_img"
                        className="w-full h-full"
                      />
                    </span>
                    <div className="w-[calc(100%-70px)] pl-5">
                      <h2 className="mb-1 font-bold uppercase">
                        BEST PRICE GUARANTEED
                      </h2>
                      <span className="text-[14px] block">
                        you're sure to find something that fits your budget and
                        interests.
                      </span>
                    </div>
                  </li>
                  <li className="list-none relative flex mb-5">
                    <span className="bg-primary_clr text-white text-[25px] relative h-[70px] w-[70px] flex items-center justify-center p-[10px]">
                      <img
                        src={About4}
                        alt="about_img"
                        className="w-full h-full"
                      />
                    </span>
                    <div className="w-[calc(100%-70px)] pl-5">
                      <h2 className="mb-1 font-bold uppercase">
                        AMAZING DESTINATION
                      </h2>
                      <span className="text-[14px] block">
                        Whether you're looking to explore the stunning beaches
                        of Thailand, discover the rich history of Europe anomg
                        others.
                      </span>
                    </div>
                  </li>
                  <li className="list-none relative flex">
                    <span className="bg-primary_clr text-white text-[25px] relative h-[70px] w-[70px] flex items-center justify-center p-[10px]">
                      <img
                        src={About6}
                        alt="about_img"
                        className="w-full h-full"
                      />
                    </span>
                    <div className="w-[calc(100%-70px)] pl-5">
                      <h2 className="mb-1 font-bold uppercase">
                        PERSONAL SERVICES
                      </h2>
                      <span className="text-[14px] block">
                        Our experienced travel agents will work with you to
                        create a customized itinerary that meets all of your
                        travel needs.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative mt-20">
            <div className="sm:px-2 py-10 flex flex-row items-center flex-wrap justify-center">
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
        </section>
        {/* Activity Section */}
        <section
          className="relative my__space bg-fixed day_overlay_before before:opacity-90 py-[100px]"
          style={{
            backgroundImage: `url(${Img2})`,
          }}
        >
          <div className="flex items-center justify-center flex-col text-center mx-auto mb-10 relative text-white">
            <h5 className="hikelink__subtitle">TRAVEL BY ACTIVITY</h5>
            <h2 className="hikelink__title">ADVENTURE & ACTIVITY</h2>
            <TraveleDivider />
            <p className="text-[14px] md:w-2/3">
              So why wait? Start planning your dream vacation today! Simply
              browse through our website to see all of the amazing tours we
              offer, and don't hesitate to contact us with any questions. We
              can't wait to help you plan the trip of a lifetime.
            </p>
          </div>
          <div className="flex items-center justify-center flex-wrap mb-10 relative">
            <div className="p-2 max-w-full w-[160px] sm:w-1/3 md:w-1/4 lg:w-1/6">
              <div className="p-[15px] flex text-center justify-center flex-col items-center border-2 border-[#f1f1f1]">
                <Link to="/destinations">
                  <img
                    className="scale-[.96] hover:scale-100"
                    src={activity1}
                    alt="activity_img"
                  />
                </Link>
                <div className="">
                  <h4 className="text-white font-bold mt-2 duration-300 transition-all hover:text-secondary_clr">
                    <Link to="/destinations">Adventure</Link>
                  </h4>
                  <p className="text-white text-[13px]">15 Destinations</p>
                </div>
              </div>
            </div>
            <div className="p-2 max-w-full w-[160px] sm:w-1/3 md:w-1/4 lg:w-1/6">
              <div className="p-[15px] flex text-center justify-center flex-col items-center border-2 border-[#f1f1f1]">
                <Link to="/destinations">
                  <img
                    className="scale-[.96] hover:scale-100"
                    src={activity2}
                    alt="activity_img"
                  />
                </Link>
                <div className="">
                  <h4 className="text-white font-bold mt-2 duration-300 transition-all hover:text-secondary_clr">
                    <Link to="/destinations">Trekking</Link>
                  </h4>
                  <p className="text-white text-[13px]">13 Destinations</p>
                </div>
              </div>
            </div>
            <div className="p-2 max-w-full w-[160px] sm:w-1/3 md:w-1/4 lg:w-1/6 ">
              <div className="p-[15px] flex text-center justify-center flex-col items-center border-2 border-[#f1f1f1]">
                <Link to="/destinations">
                  <img
                    className="scale-[.96] hover:scale-100"
                    src={activity3}
                    alt="activity_img"
                  />
                </Link>
                <div className="">
                  <h4 className="text-white font-bold mt-2 duration-300 transition-all hover:text-secondary_clr">
                    <Link to="/destinations">Camp Fire</Link>
                  </h4>
                  <p className="text-white text-[13px]">7 Destinations</p>
                </div>
              </div>
            </div>
            <div className="p-2 max-w-full w-[160px] sm:w-1/3 md:w-1/4 lg:w-1/6 ">
              <div className="p-[15px] flex text-center justify-center flex-col items-center border-2 border-[#f1f1f1]">
                <Link to="/destinations">
                  <img
                    className="scale-[.96] hover:scale-100"
                    src={activity4}
                    alt="activity_img"
                  />
                </Link>
                <div className="">
                  <h4 className="text-white font-bold mt-2 duration-300 transition-all hover:text-secondary_clr">
                    <Link to="/destinations">Off Road</Link>
                  </h4>
                  <p className="text-white text-[13px]">15 Destinations</p>
                </div>
              </div>
            </div>
            <div className="p-2 max-w-full w-[160px] sm:w-1/3 md:w-1/4 lg:w-1/6 ">
              <div className="p-[15px] flex text-center justify-center flex-col items-center border-2 border-[#f1f1f1]">
                <Link to="/destinations">
                  <img
                    className="scale-[.96] hover:scale-100"
                    src={activity5}
                    alt="activity_img"
                  />
                </Link>
                <div className="">
                  <h4 className="text-white font-bold mt-2 duration-300 transition-all hover:text-secondary_clr">
                    <Link to="/destinations">Camping</Link>
                  </h4>
                  <p className="text-white text-[13px]">13 Destinations</p>
                </div>
              </div>
            </div>
            <div className="p-2 max-w-full w-[160px] sm:w-1/3 md:w-1/4 lg:w-1/6 ">
              <div className="p-[15px] flex text-center justify-center flex-col items-center border-2 border-[#f1f1f1]">
                <Link to="/destinations">
                  <img
                    className="scale-[.96] hover:scale-100"
                    src={activity6}
                    alt="activity_img"
                  />
                </Link>
                <div className="">
                  <h4 className="text-white font-bold mt-2 duration-300 transition-all hover:text-secondary_clr">
                    <Link to="/destinations">Exploring</Link>
                  </h4>
                  <p className="text-white text-[13px]">25 Destinations</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Tour Guides */}
        <section className="my__space my-10">
          <div className="flex items-center justify-center flex-col text-center mx-auto mb-10 relative text-white">
            <h5 className="hikelink__subtitle">TEAM MEMBERS</h5>
            <h2 className="hikelink__title text-black">OUR TOUR GUIDES</h2>
            <TraveleDivider otherStyles={"text-secondary_clr"} />
          </div>
          <div className="relative mt-10 flex flex-wrap items-start gap-5">
            <div className="mb-5 md:mb-10 relative w-full sm:w-[calc(50%-20px)] md:w-[calc(33.33%-20px)] lg:w-[calc(25%-20px)]">
              <figure className="">
                <img src={TourGuideImg} className="w-full" alt="tour_guide" />
              </figure>
              <div
                className="-mt-16 mx-auto w-3/4 relative"
                style={{ boxShadow: " 0px 0px 35px 0px rgba(0, 0, 0, 0.05)" }}
              >
                <div className="p-4 bg-white text-center">
                  <h3 className="text-[18px] font-bold mb-[5px]">
                    William Scott
                  </h3>
                  <h5 className="text-[#0791BE] font-bold text-[13px] mb-[10px]">
                    Tour Supervisor
                  </h5>
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
            <div className="mb-5 md:mb-10 relative w-full sm:w-[calc(50%-20px)] md:w-[calc(33.33%-20px)] lg:w-[calc(25%-20px)]">
              <figure className="">
                <img src={TourGuideImg} className="w-full" alt="tour_guide" />
              </figure>
              <div
                className="-mt-16 mx-auto w-3/4 relative"
                style={{ boxShadow: " 0px 0px 35px 0px rgba(0, 0, 0, 0.05)" }}
              >
                <div className="p-4 bg-white text-center">
                  <h3 className="text-[18px] font-bold mb-[5px]">
                    Jennie Bennett
                  </h3>
                  <h5 className="text-[#0791BE] font-bold text-[13px] mb-[10px]">
                    Travel Agent
                  </h5>
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
            <div className="mb-5 md:mb-10 relative w-full sm:w-[calc(50%-20px)] md:w-[calc(33.33%-20px)] lg:w-[calc(25%-20px)]">
              <figure className="">
                <img src={TourGuideImg} className="w-full" alt="tour_guide" />
              </figure>
              <div
                className="-mt-16 mx-auto w-3/4 relative"
                style={{ boxShadow: " 0px 0px 35px 0px rgba(0, 0, 0, 0.05)" }}
              >
                <div className="p-4 bg-white text-center">
                  <h3 className="text-[18px] font-bold mb-[5px]">
                    James Hardy
                  </h3>
                  <h5 className="text-[#0791BE] font-bold text-[13px] mb-[10px]">
                    Travel Agent
                  </h5>
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
            <div className="mb-5 md:mb-10 relative w-full sm:w-[calc(50%-20px)] md:w-[calc(33.33%-20px)] lg:w-[calc(25%-20px)]">
              <figure className="">
                <img src={TourGuideImg} className="w-full" alt="tour_guide" />
              </figure>
              <div
                className="-mt-16 mx-auto w-3/4 relative"
                style={{ boxShadow: " 0px 0px 35px 0px rgba(0, 0, 0, 0.05)" }}
              >
                <div className="p-4 bg-white text-center">
                  <h3 className="text-[18px] font-bold mb-[5px]">
                    Harry Wilson
                  </h3>
                  <h5 className="text-[#0791BE] font-bold text-[13px] mb-[10px]">
                    Travel Agent
                  </h5>
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
          <div className="mb-20 mt-5 flex justify-center">
            <Link to="/tour-guides">
              <button className="hikelink__btn py-4">MORE GUIDES</button>
            </Link>
          </div>
        </section>
        {/* Newsletter Section */}
        <Newsletter pt={75} />
      </main>
    </>
  );
};
// otherStyles={"-mt-[100px]"}
export default Home;
