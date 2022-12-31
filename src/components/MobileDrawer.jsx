import { Link, useLocation } from "react-router-dom";
import { JuliaOLogo } from "../assets";

const MobileDrawer = ({ setMobileDrawerOpen }) => {
  const { pathname } = useLocation();
  return (
    <div className="max-w-full w-[325px] py-10">
      <div className="w-full flex justify-between items-center mb-10  px-7">
        <img src={JuliaOLogo} className="max-w-full" alt="website_logo" />
        <span
          className="text-lg cursor-pointer"
          onClick={() => setMobileDrawerOpen(false)}
        >
          <i className="icon-close"></i>
        </span>
      </div>
      <div className="list-none px-2 text-[18px]">
        <span className="block border-y border-t-2 py-2 px-4">
          <Link
            to={"/"}
            className={`${pathname === `/` ? "text-primary_clr font-bold pl-4" : ""
              }`}
            onClick={() => setMobileDrawerOpen(false)}
          >
            Home
          </Link>
        </span>
        <span className="block border-y px-4 py-2">
          <Link
            to={"/destinations"}
            className={`${pathname === `/destinations`
                ? "text-primary_clr font-bold pl-4"
                : ""
              }`}
            onClick={() => setMobileDrawerOpen(false)}
          >
            Destinations
          </Link>
        </span>
        <span className="block border-y px-4 py-2">
          <Link
            to={"/tour-guides"}
            className={`${pathname === `/tour-guides`
                ? "text-primary_clr font-bold pl-4"
                : ""
              }`}
            onClick={() => setMobileDrawerOpen(false)}
          >
            Tour Guides
          </Link>
        </span>
        <span className="block border-y px-4 py-2">
          <Link
            to={"/about"}
            className={`${pathname === `/about` ? "text-primary_clr font-bold pl-4" : ""
              }`}
            onClick={() => setMobileDrawerOpen(false)}
          >
            About
          </Link>
        </span>
        <span className="block border-y px-4 py-2">
          <Link
            to={"/services"}
            className={`${pathname === `/services` ? "text-primary_clr font-bold pl-4" : ""
              }`}
            onClick={() => setMobileDrawerOpen(false)}
          >
            Services
          </Link>
        </span>
        <span className="block border-y px-4 py-2">
          <Link
            to={"/contact"}
            className={`${pathname === `/contact` ? "text-primary_clr font-bold pl-4" : ""
              }`}
            onClick={() => setMobileDrawerOpen(false)}
          >
            Contact
          </Link>
        </span>
        <span className="block border-y border-b-2 px-4 py-2">
          <Link
            to={"/notfound"}
            className={`${pathname === `/notfound` ? "text-primary_clr font-bold pl-4" : ""
              }`}
            onClick={() => setMobileDrawerOpen(false)}
          >
            404 Not found
          </Link>
        </span>
      </div>
    </div>
  );
};

export default MobileDrawer;
