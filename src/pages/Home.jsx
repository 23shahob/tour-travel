import React from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="root">
        <Header />
        <Main />
      </div>
      <div className="pt-[78px] bg-[#F9F9FB] h-[482px]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
