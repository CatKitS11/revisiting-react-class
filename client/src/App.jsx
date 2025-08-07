import {
  BeakerIcon,
  HomeIcon,
  ShoppingCartIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  MusicalNoteIcon,
  ShoppingBagIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";
import Navbar from "./components/Navbar.jsx";
import ProductCategory from "./components/ProductCategory.jsx";
import ProductHighlight from "./components/ProductHighlight.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <ProductCategory />
      <ProductHighlight />
      <Footer />
    </>
  );
}

export default App;
