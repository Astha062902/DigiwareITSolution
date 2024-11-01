import React from "react";
import Header from "@/components/header";
import SoftwareBanner from "./swbanner";
import Footer from "@/components/footer";
import SWServices from "./swservices";
import App_dev from "./app_dev";
import AI_ML from "./ai_ml";
import Mern_stack from "./mern_stack";
import Big_data from "./big_data";
import Tensorflow from "./Tensorflow";
import MixedReality from "./MixedReality";
import ExamplePage from "./swservices_cards";
import Callback from "@/app/homepage/Callback";

const Softwaredev: React.FC = () => {
  return (
    <div className="services-container">
      <Header />
      <SoftwareBanner />
      <SWServices />
      <ExamplePage />
      <App_dev />
      <AI_ML />
      <Tensorflow />
      <Mern_stack />
      <Big_data />
      <MixedReality />
      <Callback />
      <Footer />
    </div>
  );
};

export default Softwaredev;
