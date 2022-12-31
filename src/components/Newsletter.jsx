import { Img2 } from "../assets";
import { TraveleDivider } from "../components";

const Newsletter = ({ pt, otherStyles }) => {
  const handleNewslatterForm = (e) => {
    e.preventDefault();
    alert("Thanks, you'll recieve news letters about our offers");
  };
  return (
    <section
      className={`my__space bg-no-repeat bg-cover bg-center bg-fixed pb-[75px] relative night_overlay_before ${otherStyles} z-[2]`}
      style={{
        backgroundImage: `url(${Img2})`,
        paddingTop: `${pt || 75}px`,
      }}
    >
      <div className="w-full sm:w-[85%] md:w-3/4 lg:w-2/3 relative text-white">
        <div>
          <h5 className="hikelink__subtitle text-white before:bg-white">
            TRAVEL OFFER & DISCOUNT
          </h5>
          <h2 className="hikelink__title">HOLIDAY SPECIAL UPTO 25% OFF !</h2>
          <TraveleDivider otherStyles={"pl-8"} />
          <h4 className="leading-[1.2] mb-[35px] font-semibold text-[15px]">
            Sign up now to recieve hot special offers and information about the
            best tour packages, updates and discounts !!
          </h4>
        </div>
        <form className="mb-[30px] relative" onSubmit={handleNewslatterForm}>
          <input
            type="email"
            name="signup"
            placeholder="Your Email Address"
            className="font-medium px-4 md:pr-[190px] py-0 md:pl-[20px] placeholder:text-[#94aab3] w-full h-[60px] border border-[rgba(255, 255, 255, 0.61)] bg-transparent text-white outline-none"
          />
          <input
            type="submit"
            className="hikelink__btn w-full md:w-auto mt-3 md:mt-auto py-4 px-[18px] md:px-[30px] outline-none leading-[1.3] md:absolute md:top-[4px] md:right-[5px]"
            value="SIGN UP NOW!"
          />
        </form>
        <p className="text-[13px]">
          So why wait? Start planning your dream vacation today! Simply browse
          through our website to see all of the amazing tours we offer, and
          don't hesitate to contact us with any questions. We can't wait to help
          you plan the trip of a lifetime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
