import "./App.css";
import {
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
  Router,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "./Pages/TermsConditions/TermsConditions";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Advertise from "./Pages/Advertise/Advertise";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/privacy/policy",
      element: <PrivacyPolicy />,
    },
  ]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/privacy/policy" element={<PrivacyPolicy />} />
        <Route path="/terms/conditions" element={<TermsConditions />} />
        <Route path="/about/us" element={<AboutUs />} />
        <Route path="/contact/us" element={<ContactUs />} />
        <Route path="/advertise" element={<Advertise />} />
        <Route path="/join/now" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
