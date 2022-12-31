import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useScrollSpy } from "../utils/scrollSpy";
import { JuliaOLogo } from "../assets";
import { MobileDrawer } from "../components";
import { Drawer } from "@mui/material";

const Header = () => {
  const { pathname } = useLocation();
  const scrollheightSpy = useScrollSpy();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  return (
    <header
      className={`left-0 right-0 z-[5] w-full ${scrollheightSpy < 46 ? "absolute text-white" : "fixed bg-white"
        }`}
    >
      <div
        className={`${scrollheightSpy > 45
          ? "hidden"
          : "my__space w-full relative flex items-center justify-between text-[12px] border-b-2 border-[#808080]"
          }`}
      >
        <div className="hidden lg:block">
          <a className="mr-6 link__hover" href="tel:+01 (977) 2599 12">
            <i className="icon-phone mr-1"></i> +01 (977) 2599 12
          </a>
          <a className="mr-6 link__hover" href="mailto:info@Travel.com">
            <i className="icon-envelope mr-1"></i> company@domain.com
          </a>
          <span>
            <i className="icon-map mr-1"></i> 3146 Koontz Lane, California
          </span>
        </div>
        <div className="flex items-center justify-between lg:justify-end w-full lg:w-auto  text-[14px]">
          <div className="py-[10px]">
            {[
              "icon-social-facebook",
              "icon-social-twitter",
              "icon-social-dribbble",
              "icon-social-linkedin",
            ].map((social, i) => (
              <a
                key={i}
                className="mr-3 cursor-pointer link__hover"
                href={`http://www.${social.split("-")[2]}.com`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`${social}`}></i>
              </a>
            ))}
          </div>
          <Link
            to={"/destinations"}
            className="border-r-2 border-l-2 border-[#808080] py-2 px-3 link__hover cursor-pointer"
          >
            <i className="icon-location-pin"></i>
          </Link>
        </div>
      </div>

      <div
        className={`flex justify-between flex-wrap items-center my__space ${scrollheightSpy > 45 ? "py-1" : "py-2"
          }`}
      >
        <div className="flex justify-between items-center sm:w-[70%] lg:w-full relative">
          <Link to="/" className="scale-[.98] hover:scale-100 transition-all">
            <img
              className="w-32 sm:w-auto"
              src={JuliaOLogo}
              alt="logo"
            />
          </Link>
          <ul className="hidden lg:flex items-center relative">
            {[
              {
                name: "Home",
                link: "/",
              },
              {
                name: "destinations",
                link: "/destinations",
                nestedLinks: [{ name: "Tour Guides", link: "/tour-guides" }],
              },
              {
                name: "About",
                link: "/about",
              },
              {
                name: "services",
                link: "/services",
              },
              {
                name: "Contact",
                link: "/contact",
              },
            ].map((headerLink, i) => (
              <li
                key={i}
                className={`py-5 ${headerLink.nestedLinks
                  ? `after:pl-2 after:content-[">"] hover:after:content-["<"]`
                  : ""
                  } header__link mr-4 hover:text-primary_clr ${pathname === headerLink.link ? "text-primary_clr" : ""
                  } transition-all uppercase relative`}
              >
                <Link to={headerLink.link} className="font-bold">
                  {headerLink.name}
                </Link>
                {headerLink.nestedLinks && (
                  <ul className="absolute top-full bg-white w-[200px] transition-[display] duration-300">
                    {headerLink.nestedLinks.map((nestedLink, index) => (
                      <li
                        key={index}
                        className="border-b border-[#ddd] relative last:border-none  first:before:absolute first:before:w-full first:before:h-[3px] first:before:bg-primary_clr"
                      >
                        <Link
                          to={nestedLink.link}
                          className={`text-[#333] block py-[10px] px-[20px] ${pathname === nestedLink.link
                            ? "bg-secondary_clr"
                            : ""
                            } hover:bg-secondary_clr hover:pl-[30px] hover:text-white transition-all capitalize text-[14px] font-semibold`}
                        >
                          {nestedLink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Link
            to="/destinations"
            className="hidden sm:inline-block hikelink__btn py-3 uppercase"
          >
            tours
          </Link>
        </div>
        <span
          className="lg:hidden text-[16px] hover:scale-110 px-2 transition-all cursor-pointer"
          onClick={() => setMobileDrawerOpen(true)}
        >
          <i className="icon-menu"></i>
        </span>
        <Drawer
          open={mobileDrawerOpen}
          anchor="right"
          onClose={() => setMobileDrawerOpen(false)}
        >
          <MobileDrawer setMobileDrawerOpen={setMobileDrawerOpen} />
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
