const TraveleDivider = ({ otherStyles }) => {
  return (
    <span className={`block mb-[15px] relative -mt-3 ${otherStyles || ""}`}>
      <i className="relative after:absolute after:-top-full  after:leading-none after:text-[40px] after:-right-1/2 after:content-['....']"></i>
      <i className="icon-briefcase text-[20px] ml-2 mr-3"></i>
      <i className="relative before:absolute before:-top-full  before:leading-none before:text-[40px] before:content-['....']"></i>
    </span>
  );
};

export default TraveleDivider;
