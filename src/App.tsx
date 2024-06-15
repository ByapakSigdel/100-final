import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePageDesktop from "./pages/HomePageDesktop";
import ContactPageDesktop from "./pages/ContactPageDesktop";
import ServicesPageDesktop from "./pages/ServicesPageDesktop";
import WorksPageDesktop from "./pages/WorksPageDesktop";
import AboutPageDesktop from "./pages/AboutPageDesktop";
import Frame from "./pages/Frame";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/contact-page-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/services-page-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/works-page-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/about-page-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/frame-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePageDesktop />} />
      <Route path="/contact-page-desktop" element={<ContactPageDesktop />} />
      <Route path="/services-page-desktop" element={<ServicesPageDesktop />} />
      <Route path="/works-page-desktop" element={<WorksPageDesktop />} />
      <Route path="/about-page-desktop" element={<AboutPageDesktop />} />
      <Route path="/frame-1" element={<Frame />} />
    </Routes>
  );
}
export default App;
