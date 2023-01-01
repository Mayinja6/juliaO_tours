import { footerImg1, footerImg2 } from "../assets";

const Footer = () => {
  return (
    <footer className="bg-[#383838] text-[13px] py-8 sm:py-[80px] text-[#f3f3f3] my__space flex justify-between w-full flex-wrap">
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4 lg:p-5 relative">
        <h3 className="uppercase font-bold text-[14px] mb-5 pl-3 mx-auto relative before:bg-secondary_clr before:-ml-3 before:absolute before:content-[''] before before:h-full before:w-[3px]">
          About Juria O
        </h3>
        <p className="text-[12px] md:text-[13px] opacity-90 mb-2">
          Welcome to our tour agency website! We specialize in offering unique
          and exciting tours to destinations all around the world.
        </p>
        <div className="relative w-full flex items-center justify-center">
          <a href="/" className="w-1/2 relative p-2">
            <img
              src={footerImg1}
              alt=""
              className="scale-[.97] hover:scale-100 max-w-full max-h-full"
            />
          </a>
          <a href="/" className="w-1/2 relative p-2">
            <img
              src={footerImg2}
              alt=""
              className="scale-[.97] hover:scale-100 max-w-full max-h-full"
            />
          </a>
        </div>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4 lg:p-5 relative">
        <h3 className="uppercase font-bold text-[14px] mb-5 pl-3 mx-auto relative before:bg-secondary_clr before:-ml-3 before:absolute before:content-[''] before before:h-full before:w-[3px]">
          CONTACT INFORMATION
        </h3>
        <p className="text-[12px] md:text-[13px] opacity-90 mb-4">
          So why wait? Start planning your dream vacation today! Simply browse
          through our website to see all of the amazing tours we offer.
        </p>
        <div className="flex flex-col">
          <a href="/" className="transition-all my-1 hover:text-secondary_clr">
            <i className="icon-phone mr-3 text-primary_clr font-bold"></i>
            +01 (977) 2599 12
          </a>
          <a href="/" className="transition-all my-1 hover:text-secondary_clr">
            <i className="icon-envelope mr-3 text-primary_clr font-bold"></i>
            company@domain.com
          </a>
          <span className="my-1">
            <i className="icon-map mr-3 text-primary_clr font-bold"></i>
            3146 Koontz, California
          </span>
        </div>
      </div>
      {/* <div className="w-full sm:w-1/2 lg:w-1/3 p-4 lg:p-5 relative">
        <h3 className="uppercase font-bold text-[14px] mb-5 pl-3 mx-auto relative before:bg-secondary_clr before:-ml-3 before:absolute before:content-[''] before before:h-full before:w-[3px]">
          Latest Post
        </h3>
        <ul>
          {[
            {
              post: "Life is a beautiful journey not a destination",
              link: "/",
              date: "August 17, 2021",
              comments: "No Comments",
            },
            {
              post: "Take only memories, leave only footprints",
              link: "/",
              date: "August 17, 2021",
              comments: "No Comments",
            },
          ].map((blogLink, i) => (
            <li key={i} className="py-2 first:border-b first:border-[#808080]">
              <a
                className="font-semibold text-[14px] transition-colors hover:text-secondary_clr block mb-2"
                href={blogLink.link}
              >
                {blogLink.post}
              </a>
              <div className="text-[12px] text-[#ddd] flex items-center justify-between">
                <span>{blogLink.date}</span>
                <span>{blogLink.comments}</span>
              </div>
            </li>
          ))}
        </ul>
      </div> */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4 lg:p-5 relative">
        <h3 className="uppercase font-bold text-[14px] mb-5 pl-3 mx-auto relative before:bg-secondary_clr before:-ml-3 before:absolute before:content-[''] before before:h-full before:w-[3px]">
          SUBSCRIBE US
        </h3>
        <p className="text-[12px] md:text-[13px] opacity-90 mb-4">
          Don't hesitate to contact us with any questions.
        </p>
        <form className=" w-full relative">
          <input
            type="email"
            name="newsletter-email"
            required
            className="w-full text-black p-3 outline-none mb-3 border-2 border-transparent duration-300 transition-[border] focus:border-primary_clr"
            placeholder="Your Email.."
          />
          <input
            type="submit"
            value="SUBSCRIBE NOW"
            className="hikelink__btn w-full py-4 cursor-pointer outline-none"
          />
        </form>
      </div>
    </footer>
  );
};

export default Footer;
