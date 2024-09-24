import Home from "./page/Home";
import "./assets/styles/scss/style.scss";
import "./assets/styles/scss/_normalize.scss";
import "./assets/styles/scss/base/_base.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OfferCards from "./page/OfferCards";
import background from "./assets/images/background.jpg"

function App() {
  return (
    <div className="flex flex-col justify-between h-screen font-poppins">
      <img className="absolute top-0 left-0 h-screen w-screen -z-30 opacity-25" src={background}/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<OfferCards />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
