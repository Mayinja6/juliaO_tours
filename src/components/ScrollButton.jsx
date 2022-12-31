import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useScrollSpy } from "../utils/scrollSpy";

function ScrollButton() {
  const scrollHeightSpy = useScrollSpy();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <button
      onClick={() => window.scrollTo(0, 0)}
      className={`${
        scrollHeightSpy > 45
          ? "opacity-100 visible z-[8]"
          : "opacity-0 invisible -z-[8]"
      } outline-none border-none bg-primary_clr hover:bg-secondary_clr transition-all duration-300 ease-in-out fixed bottom-4 right-4 rounded-[50%] w-9 h-9 sm:w-[45px] sm:h-[45px] text-white font-black text-base sm:text-[20px] text-center`}
    >
      <i className="icon-arrow-up"></i>
    </button>
  );
}

export default ScrollButton;
