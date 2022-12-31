import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { preloaderImg } from "../assets";
const Preloader = () => {
  const { pathname } = useLocation();
  const preloaderRef = useRef();

  useEffect(() => {
    setTimeout(() => (preloaderRef.current.style.display = "none"), 800);
  }, [pathname]);

  return (
    <div
      ref={preloaderRef}
      className="fixed bg-[rgb(241,245,248)] w-[100vw] h-[100vh] top-0 left-0 z-10 text-center"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img
          src={preloaderImg}
          className="w-[150px] h-[150px] max-w-[95%] max-h-[95%]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Preloader;
