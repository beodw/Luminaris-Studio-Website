import Home from "./page/Home";
import "./assets/styles/scss/style.scss";
import "./assets/styles/scss/_normalize.scss";
import "./assets/styles/scss/base/_base.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OfferCards from "./page/OfferCards";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<OfferCards />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
