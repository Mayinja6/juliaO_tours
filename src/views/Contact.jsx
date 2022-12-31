import { Breadcrumb, Preloader, TraveleDivider } from "../components";

const Contact = () => {
  return (
    <>
      <Preloader />
      <Breadcrumb title={"Contact Us"} />
      <div className="my__space flex flex-wrap my-10">
        <div className="relative w-full md:w-1/2 px-4">
          <div className="mb-[50px] flex items-center flex-col justify-center sm:justify-start text-center sm:text-left">
            <h5 className="hikelink__subtitle">GET IN TOUCH</h5>
            <div className="flex items-center flex-wrap my-4">
              <h2 className="hikelink__title leading-[1.1em] font-black mb-4">
                CONTACT US TO GET MORE INFO
              </h2>
              <div className="w-full flex items-center justify-center mt-5">
                <TraveleDivider otherStyles={"text-secondary_clr"} />
              </div>
              <p className="text-[14px] text-[#383838]">
                Don't hesitate to contact us with any questions. We can't wait
                to help you plan the trip of a lifetime.
              </p>
            </div>
          </div>
          <form className="relative">
            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              className="w-full outline-none border px-[10px] border-[#d9d9d9] my-2 py-3  focus:border-primary_clr"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email*"
              className="w-full outline-none border px-[10px] border-[#d9d9d9] my-2 py-3  focus:border-primary_clr"
            />
            <textarea
              rows="5"
              placeholder="Your Message*"
              className="w-full outline-none border px-[10px] border-[#d9d9d9] my-2 py-3  focus:border-primary_clr"
            ></textarea>
            <input
              type="submit"
              name="submit"
              value="SUBMIT MESSAGE"
              className="hikelink__btn py-4"
            />
          </form>
        </div>
        <div className="relative w-full md:w-1/2 px-4">
          <div className="md:pl-[30px]">
            <h3 className="font-semibold text-[23px] mb-[15px]">
              Need help ?? Feel free to contact us !
            </h3>
            <p className="mb-4 text-[14px] text-[#383838]">
              Our experienced travel agents will work with you to create a
              customized itinerary that meets all of your travel needs and
              preferences. And with our wide range of tour options, you're sure
              to find something that fits your budget and interests.
            </p>
            <p className="mb-4 text-[14px] text-[#383838]">
              So why wait? Start planning your dream vacation today! Simply
              browse through our website to see all of the amazing tours we
              offer, and don't hesitate to contact us with any questions. We
              can't wait to help you plan the trip of a lifetime.{" "}
            </p>
            <ul className="relative text-[14px] my-12 m-0 mx-0">
              <li className="list-none relative flex mb-5">
                <span className="bg-secondary_clr text-white text-[25px] h-[60px]  w-[60px] flex items-center justify-center">
                  <i className="icon-map"></i>
                </span>
                <div className="w-[calc(100%-60px)] pl-5">
                  <h4 className="mb-2 font-bold">Location Address</h4>
                  <span className="text-[13px] block leading-[1.1]">
                    411 D Avenue, San Francisco, CS 91950
                  </span>
                </div>
              </li>
              <li className="list-none relative flex mb-5">
                <span className="bg-secondary_clr text-white text-[25px] h-[60px]  w-[60px] flex items-center justify-center">
                  <i className="icon-envelope"></i>
                </span>
                <div className="w-[calc(100%-60px)] pl-5">
                  <h4 className="mb-2 font-bold">Email Address</h4>
                  <span className="text-[13px] block leading-[1.1] link__hover">
                    travele@travel.com
                  </span>
                </div>
              </li>
              <li className="list-none relative flex mb-5">
                <span className="bg-secondary_clr text-white text-[25px] h-[60px]  w-[60px] flex items-center justify-center">
                  <i className="icon-map"></i>
                </span>
                <div className="w-[calc(100%-60px)] pl-5">
                  <h4 className="mb-2 font-bold">Phone Number</h4>
                  <span className="text-[13px] block leading-[1.3]">
                    Telephone: 619-270-8578
                    <br /> Mobile: +(911) 1987 123 88
                  </span>
                </div>
              </li>
            </ul>
            <div>
              <h3 className="font-semibold text-[23px] mb-[15px]">
                Follow us on social media..
              </h3>
              <div className="flex gap-3">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com"
                  className="text-primary_clr border border-primary_clr text-[20px] text-center h-10 w-10 flex items-center justify-center link__hover hover:bg-primary_clr hover:text-white"
                >
                  <i className="icon-social-facebook"></i>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.twitter.com"
                  className="text-primary_clr border border-primary_clr text-[20px] text-center h-10 w-10 flex items-center justify-center link__hover hover:bg-primary_clr hover:text-white"
                >
                  <i className="icon-social-twitter"></i>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com"
                  className="text-primary_clr border border-primary_clr text-[20px] text-center h-10 w-10 flex items-center justify-center link__hover hover:bg-primary_clr hover:text-white"
                >
                  <i className="icon-social-instagram"></i>
                </a>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com"
                  className="text-primary_clr border border-primary_clr text-[20px] text-center h-10 w-10 flex items-center justify-center link__hover hover:bg-primary_clr hover:text-white"
                >
                  <i className="icon-social-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
