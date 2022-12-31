import { Link } from "react-router-dom";
import { Img3 } from "../assets";
import { Preloader } from "../components";

const NotFound = () => {
  return (
    <>
      <Preloader />
      <div
        className="my__space relative z-[2] text-center bg-no-repeat bg-cover bg-fixed bg-center py-[160px] md:py-[140px] day_overlay_before"
        style={{
          backgroundImage: `url(${Img3})`,
        }}
      >
        <div className="w-full relative text-white">
          <span className="text-[145px] md:text-[224px] lg:text-[300px] text-[rgba(255,255,255,0.32)] font-[poppins] font-black leading-[1]">
            404
          </span>
          <h1 className="text-white absolute top-1/2 left-0 right-0 -translate-y-[145%] sm:-translate-y-[80%]  mb-0 text-[32px] md:text-[40px] hikelink__title lg:text-[65px]">
            Oops! That page can't be found
          </h1>
          <h4 className="text-white text-[16px] sm:text-[18px] mt-10 font-bold">
            It looks like nothing was found at this location. Maybe try one of
            the links below or a search?
          </h4>
          <div className="max-w-[640px] mx-auto mt-11 relative">
            <Link to="/destinations">
              <button className="hikelink__btn py-4"><i className="mr-2 icon-arrow-left"></i> View Destinations Tours</button>
            </Link>
            {/* <form className="w-full relative">
              <input
                type="text"
                name="search"
                placeholder="Search..."
                className="pr-[55px] pl-5 w-full h-12 text-black outline-none border border-transparent focus:border-primary_clr"
              />
              <button className="hikelink__btn absolute py-[15px] px-[20px] top-0 right-0 h-full">
                <i className="icon-magnifier"></i>
              </button>
            </form> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
