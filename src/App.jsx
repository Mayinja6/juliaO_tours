import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import {
  About,
  Contact,
  Home,
  NotFound,
  Services,
  Destinations,
  TourGuide,
} from "./views";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} exact path="/" />
        <Route element={<Destinations />} path="/destinations" />
        <Route element={<TourGuide />} path="/tour-guides" />
        <Route element={<About />} path="/about" />
        <Route element={<Services />} path="/services" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<NotFound />} path="*" />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
