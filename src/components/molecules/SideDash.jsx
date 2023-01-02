import React from "react";
import DashboardImage from "../../assets/Dashboard.png";
import Logo from "../../assets/Logo.svg";

const SideDash = () => {
  return (
    <div className="w-[500px] bg-[#575DFB] relative">
      <div className="absolute top-1/3 ml-16">
        <div className="flex items-center mb-[55px]">
          <img className="mr-[12px]" src={Logo} alt="logo" />
          <h1 className="text-white text-2xl font-bold">APP Template</h1>
        </div>
        <img className="h-80" src={DashboardImage} />
      </div>
    </div>
  );
};

export default SideDash;
