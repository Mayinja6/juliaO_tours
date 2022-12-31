import { About1, About2, About3, About4, Img1, Img2, Img3 } from "../assets";
import { Breadcrumb, Preloader, TraveleDivider } from "../components";

const Services = () => {
  return (
    <>
      <Preloader />
      <Breadcrumb title={"Services"} />
      <div className="">
        <div className="text-center flex items-center justify-center flex-col my-10">
          <h5 className="hikelink__subtitle">SERVICES</h5>
          <h2 className="hikelink__title w-full md:w-2/3">WHAT WE OFFER</h2>
          <TraveleDivider otherStyles={"text-secondary_clr"} />
        </div>
        <div className="relative flex flex-wrap items-center justify-evenly my__space lg:gap-4 mb-10">
          <div className="relative w-full md:w-[calc(50%-16px)] sm:px-5">
            <div
              className="relative p-5 sm:p-10 mb-5 sm:mb-10"
              style={{ boxShadow: "0px 0px 25px 0px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex  flex-col">
                <div className="flex mb-5  items-end">
                  <h1 className="font-black text-[rgba(7,145,190,0.4)] text-[65px] mr-4 leading-[0.9]">
                    01.
                  </h1>
                  <h3 className="text-[20px] md:text-[28px] font-bold leading-[1.1em]">
                    Travel Insurance
                  </h3>
                </div>
                <p className="text-[14px] mb-4">
                  Our experienced travel agents will work with you to create a
                  customized itinerary that meets all of your travel needs and
                  preferences. And with our wide range of tour options, you're
                  sure to find something that fits your budget and interests.
                </p>
              </div>
              <figure>
                <img src={Img1} alt="service_Img" />
              </figure>
            </div>
          </div>
          <div className="relative w-full md:w-[calc(50%-16px)] sm:px-5 sm:pt-10">
            <div
              className="relative p-5 sm:p-10 mb-5 sm:mb-10"
              style={{ boxShadow: "0px 0px 25px 0px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex  flex-col">
                <div className="flex mb-5  items-end">
                  <h1 className="font-black text-[rgba(7,145,190,0.4)] text-[65px] mr-4 leading-[0.9]">
                    02.
                  </h1>
                  <h3 className="text-[20px] md:text-[28px] font-bold leading-[1.1em]">
                    Handpicked Hotels
                  </h3>
                </div>
                <p className="text-[14px] mb-4">
                  So why wait? Start planning your dream vacation today! Simply
                  browse through our website to see all of the amazing tours we
                  offer, and don't hesitate to contact us with any questions. We
                  can't wait to help you plan the trip of a lifetime.
                </p>
              </div>
              <figure>
                <img src={Img2} alt="service_Img" />
              </figure>
            </div>
          </div>
          <div className="relative w-full md:w-[calc(50%-16px)] sm:px-5">
            <div
              className="relative p-5 sm:p-10 mb-5 sm:mb-10"
              style={{ boxShadow: "0px 0px 25px 0px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex  flex-col">
                <div className="flex mb-5  items-end">
                  <h1 className="font-black text-[rgba(7,145,190,0.4)] text-[65px] mr-4 leading-[0.9]">
                    03.
                  </h1>
                  <h3 className="text-[20px] md:text-[28px] font-bold leading-[1.1em]">
                    Accessibility
                  </h3>
                </div>
                <p className="text-[14px] mb-4">
                  Our experienced travel agents will work with you to create a
                  customized itinerary that meets all of your travel needs and
                  preferences. And with our wide range of tour options, you're
                  sure to find something that fits your budget and interests.
                </p>
              </div>
              <figure>
                <img src={Img3} alt="service_Img" />
              </figure>
            </div>
          </div>
          <div className="relative w-full md:w-[calc(50%-16px)] sm:px-5 sm:pt-10">
            <div
              className="relative p-5 sm:p-10 mb-5 sm:mb-10"
              style={{ boxShadow: "0px 0px 25px 0px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex  flex-col">
                <div className="flex mb-5  items-end">
                  <h1 className="font-black text-[rgba(7,145,190,0.4)] text-[65px] mr-4 leading-[0.9]">
                    04.
                  </h1>
                  <h3 className="text-[20px] md:text-[28px] font-bold leading-[1.1em]">
                    24/7 Support
                  </h3>
                </div>
                <p className="text-[14px] mb-4">
                  So why wait? Start planning your dream vacation today! Simply
                  browse through our website to see all of the amazing tours we
                  offer, and don't hesitate to contact us with any questions. We
                  can't wait to help you plan the trip of a lifetime.
                </p>
              </div>
              <figure>
                <img src={Img2} alt="service_Img" />
              </figure>
            </div>
          </div>
        </div>
        <div className="my__space py-20 bg-tartiary_clr w-full relative">
          <div className="flex items-center justify-center flex-col text-center mx-auto ">
            <h5 className="hikelink__subtitle text-white before:bg-white">
              CALLBACK FOR MORE
            </h5>
            <h2 className="hikelink__title text-white md:w-[75%] leading-[1.3] mt-2">
              GO TRAVEL.DISCOVER. REMEMBER US!!
            </h2>
            <p className="text-white md:w-[75%] text-[14px] leading-[1.2]">
              So why wait? Start planning your dream vacation today! Simply
              browse through our website to see all of the amazing tours we
              offer, and don't hesitate to contact us with any questions. We
              can't wait to help you plan the trip of a lifetime.
            </p>
          </div>
          <div className="relative text-white mt-10 flex items-center justify-between flex-wrap gap-4">
            <div className="w-full sm:w-[calc(50%-16px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-16px)] bg-primary_clr flex items-center justify-between py-[25px] px-6 bg-opacity-90">
              <div className="pr-4 border-r border-[rgba(255,255,255,0.4)]">
                <img
                  src={About1}
                  className="w-[70px] lg:w-[55px]"
                  alt="about_img"
                />
              </div>
              <div className="flex flex-col justify-center pl-4">
                <span className="text-[32px] font-black leading-[1]">
                  500K+
                </span>
                <span className="text-[13px] font-semibold">
                  Satisfied Clients
                </span>
              </div>
            </div>
            <div className="w-full sm:w-[calc(50%-16px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-16px)] bg-primary_clr flex items-center justify-between py-[25px] px-6 bg-opacity-90">
              <div className="pr-4 border-r border-[rgba(255,255,255,0.4)]">
                <img
                  src={About2}
                  className="w-[70px] lg:w-[55px]"
                  alt="about_img"
                />
              </div>
              <div className="flex flex-col justify-center pl-4">
                <span className="text-[32px] font-black leading-[1]">
                  250K+
                </span>
                <span className="text-[13px] font-semibold">
                  Awards Achieve
                </span>
              </div>
            </div>
            <div className="w-full sm:w-[calc(50%-16px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-16px)] bg-primary_clr flex items-center justify-between py-[25px] px-6 bg-opacity-90">
              <div className="pr-4 border-r border-[rgba(255,255,255,0.4)]">
                <img
                  src={About3}
                  className="w-[70px] lg:w-[55px]"
                  alt="about_img"
                />
              </div>
              <div className="flex flex-col justify-center pl-4">
                <span className="text-[32px] font-black leading-[1]">15K+</span>
                <span className="text-[13px] font-semibold">
                  Active Members
                </span>
              </div>
            </div>
            <div className="w-full sm:w-[calc(50%-16px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-16px)] bg-primary_clr flex items-center justify-between py-[25px] px-6 bg-opacity-90">
              <div className="pr-4 border-r border-[rgba(255,255,255,0.4)]">
                <img
                  src={About4}
                  className="w-[70px] lg:w-[55px]"
                  alt="about_img"
                />
              </div>
              <div className="flex flex-col justify-center pl-4">
                <span className="text-[32px] font-black leading-[1]">10K+</span>
                <span className="text-[13px] font-semibold">
                  Tour Destnation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
