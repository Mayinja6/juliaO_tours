import { Rating } from "@mui/material";
import {
  About1,
  About2,
  About3,
  About4,
  About7,
  About8,
  About9,
  client1,
  client2,
  client3,
  client4,
  client5,
  QuoteImg,
  testimonialImg1,
  testimonialImg2,
  testimonialImg3,
  testimonialImg4,
} from "../assets";
import { Breadcrumb, Preloader, TraveleDivider } from "../components";

const About = () => {
  return (
    <>
      <Preloader />
      <Breadcrumb title={"About Us"} />
      <main>
        <section className="my__space my-16">
          <h3 className="hikelink__subtitle">OUR BENEFITS</h3>
          <div className="flex flex-wrap mb-5">
            <h1 className="hikelink__title md:w-[55%] leading-tight lg:text-[40px]">
              OUR TRAVEL AGENCY HAS BEEN BEST AMONG OTHERS SINCE 1982
            </h1>
            <div className="md:w-[45%] md:pl-8">
              <div>
                <p className="text-[14px]">
                  Our experienced travel agents will work with you to create a
                  customized itinerary that meets all of your travel needs and
                  preferences. And with our wide range of tour options, you're
                  sure to find something that fits your budget and interests.
                </p>
                <p className="text-[14px] mt-5">
                  So why wait? Start planning your dream vacation today! Simply
                  browse through our website to see all of the amazing tours we
                  offer, and don't hesitate to contact us with any questions. We
                  can't wait to help you plan the trip of a lifetime.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-wrap gap-5 my-10">
            <div className="relative flex border mb-3 p-4 w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]">
              <span className="bg-secondary_clr text-white text-[25px] relative h-[80px] w-[80px] flex items-center justify-center p-[10px]">
                <img src={About7} alt="about_img" className="w-full h-full" />
              </span>
              <div className="w-[calc(100%-80px)] pl-5">
                <h2 className="mb-2 font-bold text-[18px] uppercase">
                  Award winning
                </h2>
                <span className="text-[14px] block">
                  We offer tours to destinations all around the world.
                </span>
              </div>
            </div>
            <div className="relative flex border mb-3 p-4 w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]">
              <span className="bg-secondary_clr text-white text-[25px] relative h-[80px] w-[80px] flex items-center justify-center p-[10px]">
                <img src={About8} alt="about_img" className="w-full h-full" />
              </span>
              <div className="w-[calc(100%-80px)] pl-5">
                <h2 className="mb-2 font-bold text-[18px] uppercase">
                  Well allowance
                </h2>
                <span className="text-[14px] block">
                  You're sure to find something that fits your budget.
                </span>
              </div>
            </div>
            <div className="relative flex border mb-3 p-4 w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]">
              <span className="bg-secondary_clr text-white text-[25px] relative h-[80px] w-[80px] flex items-center justify-center p-[10px]">
                <img src={About9} alt="about_img" className="w-full h-full" />
              </span>
              <div className="w-[calc(100%-80px)] pl-5">
                <h2 className="mb-2 font-bold text-[18px] uppercase">
                  Full Insurance
                </h2>
                <span className="text-[14px] block">
                  Simply browse our website to see the tours we offer.
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="my__space mb-20">
          <div className="text-center flex items-center justify-center flex-col my-10">
            <h5 className="hikelink__subtitle">TESTIMONIALS</h5>
            <h2 className="hikelink__title w-full md:w-2/3">
              WHAT TRAVELLERS SAY
            </h2>
            <TraveleDivider otherStyles={"text-secondary_clr"} />
          </div>
          <div className="flex items-center justify-evenly flex-wrap mt-10">
            <div className="sm:px-[15px] py-5 relative max-w-full w-[400px]  md:w-1/2 lg:w-1/3">
              <figure className="border-2 border-primary_clr w-[110px] h-[110px] overflow-hidden rounded-full mb-10 mx-auto flex items-center justify-center relative z-[2]">
                <img
                  src={testimonialImg3}
                  className="w-full max-w-full h-full max-h-full object-cover"
                  alt="testimonial_img"
                />
              </figure>
              <div className="relative night_overlay_before before:opacity-5 pt-[90px] px-5 pb-4 -mt-[90px] z-[1] overflow-hidden rounded-[8px]">
                <img
                  src={QuoteImg}
                  alt=""
                  className="-z-10 absolute w-[55px] h-[60px] top-[10%]"
                />
                <div className="relative">
                  <p className="text-[#151515] text-[13px] italic leading-[1.5] mb-[10px]">
                    Vulputate vulputate mauris primis viverra quis netus leo
                    voluptates. Placerat, feugiat nascetur placerat pulvinar
                    parturient dis quaerat facilisis? Dignisim felis pretium
                    amet. Donec eros faucibus.
                  </p>
                  <div className="flex items-center justify-center w-full relative mb-[5px]">
                    <Rating size="small" readOnly precision={0.1} value={4} />
                  </div>
                  <h3 className="text-center text-[20px] font-semibold">
                    Robert Holland
                  </h3>
                  <span className="text-center text-[12px] block">
                    Traveller
                  </span>
                </div>
              </div>
            </div>
            <div className="sm:px-[15px] py-5 relative max-w-full w-[400px]  md:w-1/2 lg:w-1/3">
              <figure className="border-2 border-primary_clr w-[110px] h-[110px] overflow-hidden rounded-full mb-10 mx-auto flex items-center justify-center relative z-[2]">
                <img
                  src={testimonialImg2}
                  className="w-full max-w-full h-full max-h-full object-cover"
                  alt="testimonial_img"
                />
              </figure>
              <div className="relative night_overlay_before before:opacity-5 pt-[90px] px-5 pb-4 -mt-[90px] z-[1] overflow-hidden rounded-[8px]">
                <img
                  src={QuoteImg}
                  alt=""
                  className="-z-10 absolute w-[55px] h-[60px] top-[10%]"
                />
                <div className="relative">
                  <p className="text-[#151515] text-[13px] italic leading-[1.5] mb-[10px]">
                    Vulputate vulputate mauris primis viverra quis netus leo
                    voluptates. Placerat, feugiat nascetur placerat pulvinar
                    parturient dis quaerat facilisis? Dignisim felis pretium
                    amet. Donec eros faucibus.
                  </p>
                  <div className="flex items-center justify-center w-full relative mb-[5px]">
                    <Rating size="small" readOnly precision={0.1} value={4.5} />
                  </div>
                  <h3 className="text-center text-[20px] font-semibold">
                    William Wright
                  </h3>
                  <span className="text-center text-[12px] block">
                    Traveller
                  </span>
                </div>
              </div>
            </div>
            <div className="sm:px-[15px] py-5 relative max-w-full w-[400px] md:w-1/2 lg:w-1/3">
              <figure className="border-2 border-primary_clr w-[110px] h-[110px] overflow-hidden rounded-full mb-10 mx-auto flex items-center justify-center relative z-[2]">
                <img
                  src={testimonialImg1}
                  className="w-full max-w-full h-full max-h-full object-cover"
                  alt="testimonial_img"
                />
              </figure>
              <div className="relative night_overlay_before before:opacity-5 pt-[90px] px-5 pb-4 -mt-[90px] z-[1] overflow-hidden rounded-[8px]">
                <img
                  src={QuoteImg}
                  alt=""
                  className="-z-10 absolute w-[55px] h-[60px] top-[10%]"
                />
                <div className="relative">
                  <p className="text-[#151515] text-[13px] italic leading-[1.5] mb-[10px]">
                    Vulputate vulputate mauris primis viverra quis netus leo
                    voluptates. Placerat, feugiat nascetur placerat pulvinar
                    parturient dis quaerat facilisis? Dignisim felis pretium
                    amet. Donec eros faucibus.
                  </p>
                  <div className="flex items-center justify-center w-full relative mb-[5px]">
                    <Rating size="small" readOnly precision={0.1} value={4} />
                  </div>
                  <h3 className="text-center text-[20px] font-semibold">
                    Alison Hobbs
                  </h3>
                  <span className="text-center text-[12px] block">
                    Traveller
                  </span>
                </div>
              </div>
            </div>
            <div className="sm:px-[15px] py-5 relative max-w-full w-[400px] md:w-1/2 lg:w-1/3 lg:hidden">
              <figure className="border-2 border-primary_clr w-[110px] h-[110px] overflow-hidden rounded-full mb-10 mx-auto flex items-center justify-center relative z-[2]">
                <img
                  src={testimonialImg4}
                  className="w-full max-w-full h-full max-h-full object-cover"
                  alt="testimonial_img"
                />
              </figure>
              <div className="relative night_overlay_before before:opacity-5 pt-[90px] px-5 pb-4 -mt-[90px] z-[1] overflow-hidden rounded-[8px]">
                <img
                  src={QuoteImg}
                  alt=""
                  className="-z-10 absolute w-[55px] h-[60px] top-[10%]"
                />
                <div className="relative">
                  <p className="text-[#151515] text-[13px] italic leading-[1.5] mb-[10px]">
                    Vulputate vulputate mauris primis viverra quis netus leo
                    voluptates. Placerat, feugiat nascetur placerat pulvinar
                    parturient dis quaerat facilisis? Dignisim felis pretium
                    amet. Donec eros faucibus.
                  </p>
                  <div className="flex items-center justify-center w-full relative mb-[5px]">
                    <Rating size="small" readOnly precision={0.1} value={3.5} />
                  </div>
                  <h3 className="text-center text-[20px] font-semibold">
                    Koby Bryant
                  </h3>
                  <span className="text-center text-[12px] block">
                    Traveller
                  </span>
                </div>
              </div>
            </div>
            <div className="sm:px-[15px] py-5 relative max-w-full w-[400px] md:w-1/2 lg:w-1/3 lg:hidden">
              <figure className="border-2 border-primary_clr w-[110px] h-[110px] overflow-hidden rounded-full mb-10 mx-auto flex items-center justify-center relative z-[2]">
                <img
                  src={testimonialImg1}
                  className="w-full max-w-full h-full max-h-full object-cover"
                  alt="testimonial_img"
                />
              </figure>
              <div className="relative night_overlay_before before:opacity-5 pt-[90px] px-5 pb-4 -mt-[90px] z-[1] overflow-hidden rounded-[8px]">
                <img
                  src={QuoteImg}
                  alt=""
                  className="-z-10 absolute w-[55px] h-[60px] top-[10%]"
                />
                <div className="relative">
                  <p className="text-[#151515] text-[13px] italic leading-[1.5] mb-[10px]">
                    Vulputate vulputate mauris primis viverra quis netus leo
                    voluptates. Placerat, feugiat nascetur placerat pulvinar
                    parturient dis quaerat facilisis? Dignisim felis pretium
                    amet. Donec eros faucibus.
                  </p>
                  <div className="flex items-center justify-center w-full relative mb-[5px]">
                    <Rating size="small" readOnly precision={0.1} value={5} />
                  </div>
                  <h3 className="text-center text-[20px] font-semibold">
                    Amy Rose
                  </h3>
                  <span className="text-center text-[12px] block">
                    Traveller
                  </span>
                </div>
              </div>
            </div>
            <div className="sm:px-[15px] py-5 relative max-w-full w-[400px] md:w-1/2 lg:w-1/3 lg:hidden">
              <figure className="border-2 border-primary_clr w-[110px] h-[110px] overflow-hidden rounded-full mb-10 mx-auto flex items-center justify-center relative z-[2]">
                <img
                  src={testimonialImg3}
                  className="w-full max-w-full h-full max-h-full object-cover"
                  alt="testimonial_img"
                />
              </figure>
              <div className="relative night_overlay_before before:opacity-5 pt-[90px] px-5 pb-4 -mt-[90px] z-[1] overflow-hidden rounded-[8px]">
                <img
                  src={QuoteImg}
                  alt=""
                  className="-z-10 absolute w-[55px] h-[60px] top-[10%]"
                />
                <div className="relative">
                  <p className="text-[#151515] text-[13px] italic leading-[1.5] mb-[10px]">
                    Vulputate vulputate mauris primis viverra quis netus leo
                    voluptates. Placerat, feugiat nascetur placerat pulvinar
                    parturient dis quaerat facilisis? Dignisim felis pretium
                    amet. Donec eros faucibus.
                  </p>
                  <div className="flex items-center justify-center w-full relative mb-[5px]">
                    <Rating size="small" readOnly precision={0.1} value={4} />
                  </div>
                  <h3 className="text-center text-[20px] font-semibold">
                    Drew Gullack
                  </h3>
                  <span className="text-center text-[12px] block">
                    Traveller
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-5 relative my__space">
          <div className="flex items-center justify-center flex-col text-center mx-auto">
            <h5 className="hikelink__subtitle">OUR ASSOCAITES</h5>
            <h2 className="hikelink__title font-extrabold">
              PARTNER'S AND CLIENTS
            </h2>
            <TraveleDivider otherStyles={"text-secondary_clr"} />
            <p className="text-[14px] md:w-2/3">
              Our experienced travel agents will work with you to create a
              customized itinerary that meets all of your travel needs and
              preferences. And with our wide range of tour options, you're sure
              to find something that fits your budget and interests.
            </p>
          </div>
          <div className="relative">
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
        <section className="my__space py-20 bg-tartiary_clr w-full relative">
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
        </section>
      </main>
    </>
  );
};

export default About;
