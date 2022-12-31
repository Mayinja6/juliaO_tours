import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { DestinationImg, Img1, Img2, Img3 } from "../assets";
import {
  Breadcrumb,
  Newsletter,
  Preloader,
  TraveleDivider,
} from "../components";

const Destinations = () => {
  return (
    <>
      <Preloader />
      <Breadcrumb title={"Destinations"} />
      <div className="relative">
        <div className="text-center flex items-center justify-center flex-col my-10">
          <h5 className="hikelink__subtitle">TOUR DESTINATIONS</h5>
          <h2 className="hikelink__title w-full md:w-2/3">EXPLORE NATURE</h2>
          <TraveleDivider otherStyles={"text-secondary_clr"} />
        </div>
        <div className="my__space mb-12 relative flex items-center justify-evenly flex-wrap gap-2">
          <div
            className="travele__tour relative p-2 mb-4 bg-white max-w-[350px] sm:w-[calc(50%-8px)] md:w-[calc(33.33%-8px)] lg:w-[calc(25%-8px)]"
            style={{ boxShadow: "0px 0px 25px 0px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="travele__tour_img relative w-full day_overlay_before h-full">
              <img src={DestinationImg} className="w-full h-full" alt="" />
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
            <div className="travele__tour_img relative w-full h-full day_overlay_before">
              <img src={DestinationImg} className="max-w-full h-full" alt="" />
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
            <div className="travele__tour_img relative w-full h-full day_overlay_before">
              <img src={DestinationImg} className="max-w-full h-full" alt="" />
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
            <div className="travele__tour_img relative w-full h-full day_overlay_before">
              <img src={DestinationImg} className="max-w-full h-full" alt="" />
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
        <div className="my__space relative mb-12 flex items-center justify-evenly flex-wrap gap-y-5">
          <div
            className="travele__tour relative p-2 bg-white max-w-full w-[450px] md:w-[48%] md:mx-[1%] lg:w-[32.3%] lg:mx-[0.5%]"
            style={{ boxShadow: "0px 0px 25px 0px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="travele__tour_img relative w-full h-full day_overlay_before">
              <img src={Img1} className="max-w-full h-full" alt="" />
            </div>
            <Link
              className="hikelink__btn-rev absolute top-4 left-4 text-[11px] px-3"
              to="/"
            >
              THAILAND
            </Link>
            <div className="absolute bottom-0 pb-4 text-white left-4">
              <h3 className="mb-1">
                <Link
                  className="font-bold text-[15px] transition-all hover:text-primary_clr duration-300"
                  to="/"
                >
                  Disney Land
                </Link>
              </h3>
              <Rating readOnly precision={0.1} value={4} size="small" />
            </div>
          </div>
          <div
            className="travele__tour relative p-2 bg-white max-w-full w-[450px] md:w-[48%] md:mx-[1%] lg:w-[32.3%] lg:mx-[0.5%]"
            style={{ boxShadow: "0px 0px 25px 0px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="travele__tour_img relative w-full h-full day_overlay_before">
              <img src={Img2} className="max-w-full" alt="" />
            </div>

            <Link
              className="hikelink__btn-rev absolute top-4 left-4 text-[11px] px-3"
              to="/"
            >
              NORWAY
            </Link>
            <div className="absolute bottom-0 pb-4 text-white left-4">
              <h3 className="mb-1">
                <Link
                  className="font-bold text-[15px] transition-all hover:text-primary_clr duration-300"
                  to="/"
                >
                  Besseggen Ridge
                </Link>
              </h3>
              <Rating readOnly precision={0.1} value={5} size="small" />
            </div>
          </div>
          <div
            className="travele__tour relative p-2 bg-white max-w-full w-[450px] md:w-[48%] md:mx-[1%] lg:w-[32.3%] lg:mx-[0.5%]"
            style={{ boxShadow: "0px 0px 25px 0px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="travele__tour_img relative w-full h-full day_overlay_before">
              <img src={Img3} className="max-w-full" alt="" />
            </div>
            <Link
              className="hikelink__btn-rev absolute top-4 left-4 text-[11px] px-3"
              to="/"
            >
              ENGLAND
            </Link>
            <div className="absolute bottom-0 pb-4 text-white left-4">
              <h3 className="mb-1">
                <Link
                  className="font-bold text-[15px] transition-all hover:text-primary_clr duration-300"
                  to="/"
                >
                  Burminghum Palace
                </Link>
              </h3>
              <Rating readOnly precision={0.1} value={4} size="small" />
            </div>
          </div>
          <div
            className="travele__tour relative p-2 bg-white max-w-full w-[450px] md:w-[48%] md:mx-[1%] lg:w-[32.3%] lg:mx-[0.5%]"
            style={{ boxShadow: "0px 0px 25px 0px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="travele__tour_img relative w-full h-full day_overlay_before">
              <img src={Img1} className="max-w-full" alt="" />
            </div>

            <Link
              className="hikelink__btn-rev absolute top-4 left-4 text-[11px] px-3"
              to="/"
            >
              MISISSIPI
            </Link>
            <div className="absolute bottom-0 pb-4 text-white left-4">
              <h3 className="mb-1">
                <Link
                  className="font-bold text-[15px] transition-all hover:text-primary_clr duration-300"
                  to="/"
                >
                  Misissipi River
                </Link>
              </h3>
              <Rating readOnly precision={0.1} value={4} size="small" />
            </div>
          </div>
          <div
            className="travele__tour relative p-2 bg-white max-w-full w-[450px] md:w-[48%] md:mx-[1%] lg:w-[32.3%] lg:mx-[0.5%]"
            style={{ boxShadow: "0px 0px 25px 0px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="travele__tour_img relative w-full h-full day_overlay_before">
              <img src={Img2} className="max-w-full" alt="" />
            </div>
            <Link
              className="hikelink__btn-rev absolute top-4 left-4 text-[11px] px-3"
              to="/"
            >
              NEW ZEALAND
            </Link>
            <div className="absolute bottom-0 pb-4 text-white left-4">
              <h3 className="mb-1">
                <Link
                  className="font-bold text-[15px] transition-all hover:text-primary_clr duration-300"
                  to="/"
                >
                  Oxolotan City
                </Link>
              </h3>
              <Rating readOnly precision={0.1} value={4} size="small" />
            </div>
          </div>
          <div
            className="travele__tour relative p-2 bg-white max-w-full w-[450px] md:w-[48%] md:mx-[1%] lg:w-[32.3%] lg:mx-[0.5%]"
            style={{ boxShadow: "0px 0px 25px 0px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="travele__tour_img relative w-full h-full day_overlay_before">
              <img src={Img3} className="max-w-full" alt="" />
            </div>

            <Link
              className="hikelink__btn-rev absolute top-4 left-4 text-[11px] px-3"
              to="/"
            >
              SINGAPORE
            </Link>
            <div className="absolute bottom-0 pb-4 text-white left-4">
              <h3 className="mb-1">
                <Link
                  className="font-bold text-[15px] transition-all hover:text-primary_clr duration-300"
                  to="/"
                >
                  Marina Bay Sand City
                </Link>
              </h3>
              <Rating readOnly precision={0.1} value={4} size="small" />
            </div>
          </div>
        </div>
        <Newsletter pt={75} />
      </div>
    </>
  );
};

export default Destinations;
